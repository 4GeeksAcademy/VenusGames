"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Product, Order, Favorites
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import json
from flask_jwt_extended import create_access_token, get_jwt_identity,jwt_required,JWTManager
from flask_bcrypt import Bcrypt
from flask import current_app

api = Blueprint('api', __name__)
bcrypt = Bcrypt()
jwt = JWTManager()

CORS(api, origins= "https://expert-couscous-vxp6v47xgj93pgwj-3000.app.github.dev")

@api.route('/sign_up', methods=['POST'])
def create_one_user():
    try:
        
        body = request.get_json()
        print(body)
        required_fields = ["fullName", "email", "password"]
        for field in required_fields:
            if field not in body or not body[field]:
                return jsonify({"error": f"El campo '{field}' es requerido y no puede estar vacío"}), 400

        raw_password = body.get('password')
        password_hash = bcrypt.generate_password_hash(raw_password).decode('utf-8')

        new_user = User (
        full_name = body.get("fullName"),
        email= body.get("email"),
        password = password_hash,
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify ({"msg": "Usuario creado exitosamente", "fullName": body.get("fullName")}), 200

    except Exception as e:
        current_app.logger.error(f"Error al crear usuario: {str(e)}")
        return jsonify({"error": "Ocurrió un error al procesar la solicitud"}), 500
    
@api.route("/login", methods=['POST'])
def login():
    try:
        data = request.get_json()

        if not data or 'email' not in data or 'password' not in data:
            return jsonify({"error": "Se requieren tanto el correo electrónico como la contraseña."}), 400
        
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"error": "Faltó algún dato en el cuerpo de la solicitud."}), 400

        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"error": "Usuario no encontrado."}), 404

        if not bcrypt.check_password_hash(user.password, password):
            return jsonify({"error": "Contraseña incorrecta."}), 401

        access_token = create_access_token(identity=user.id)

        return jsonify({"access_token": access_token, "user": user.serialize()}), 200

    except Exception as e:
        print(f"Error en la ruta /login: {str(e)}")

        return jsonify({"error": f"Ocurrió un error al procesar la solicitud: {str(e)}"}), 500

@api.route('/users', methods=['GET'])
def users():
    users = User.query.all()
    if users:
        serialized_users = [user.serialize() for user in users]
        return jsonify(serialized_users), 200
    else:
        return jsonify({"msg": "No users found"}), 404

@api.route('/isAuth', methods=['GET'])
@jwt_required()
def is_auth():
    user_id=get_jwt_identity()
    user = User.query.get(user_id)
    if user is None:
        return False, 404
    return jsonify(user.serialize()), 200

# introducir productos con 'POST' para crear, 'GET' para leer, y 'DELETE' para borrar un producto

@api.route('/products', methods=['POST'])
@jwt_required()
def create_product():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)

        if not user:
            return jsonify({"error": "Usuario no encontrado."}), 404

        body = request.get_json()

        new_product = Product(
            name=body.get("name"),
            description=body.get("description"),
            price=body.get("price"),
            creator=user
        )

        db.session.add(new_product)
        db.session.commit()

        return jsonify({"msg": "Producto creado exitosamente", "product": new_product.serialize()}), 200

    except Exception as e:
        current_app.logger.error(f"Error al crear producto: {str(e)}")
        return jsonify({"error": "Ocurrió un error al procesar la solicitud"}), 500

#leer products = 'GET'

@api.route('/products', methods=['GET'])
def get_all_products():
    products = Product.query.all()

    if products:
        serialized_products = [product.serialize() for product in products]
        return jsonify(serialized_products), 200
    else:
        return jsonify({"msg": "No se encontraron productos"}), 404


#Se crea favoritos trayendo primero los ya guardados    
@api.route('/user/favorites', methods=['GET'])
@jwt_required()
def get_all_favorites():
    user_id = get_jwt_identity()
    favorites = Favorites.query.filter_by(user_id=user_id).all()
    if not favorites:
        return jsonify({"msg": "No se encontraron favoritos"}), 404
    serialized_favorites = [favorite.serialize() for favorite in favorites]
    return jsonify(serialized_favorites), 200


#se la da opcion para agregar favoritos
@api.route('/user/favorites', methods=['POST'])
@jwt_required()
def add_favorites():
    user_id = get_jwt_identity()
    body = request.json 

    if not body.get("product_id"):
        return jsonify({"error": "Se requiere 'product_id' para agregar a favoritos"}), 400
    
    # Verificar si el producto ya está en favoritos
    existing_favorite = Favorites.query.filter_by(product_id=body.get("product_id"), user_id=user_id).first()
    if existing_favorite:
        return jsonify({"error": "El producto ya está en favoritos"}), 400
    
    # Crear el nuevo favorito
    new_favorite = Favorites(
        user_id=user_id,
        product_id=body.get("product_id"),
        name=body.get("name"),
        description=body.get("description"),
        price=body.get("price")
    )
    db.session.add(new_favorite)
    db.session.commit()
    return jsonify({"msg": "Producto agregado a favoritos exitosamente", "added_favorite": new_favorite.serialize()}), 200


#Si el usuario ya no quiere tener el producto en el listado, se da la opcion de borrarlo
@api.route('/user/favorites/<int:favorite_id>', methods=['DELETE'])
@jwt_required()
def delete_favorite(favorite_id):
    user_id = get_jwt_identity()
    
    favorite = Favorites.query.filter_by(id=favorite_id, user_id=user_id).first()
    
    if not favorite:
        return jsonify({"error": "Favorito no encontrado"}), 404

    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"msg": "Favorito eliminado exitosamente"}), 200

    
#Crear ordenes de los products = 'POST'
@api.route('/orders', methods=['POST'])
@jwt_required()
def create_order():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)

        if not user:
            return jsonify({"error": "Usuario no encontrado."}), 404

        body = request.get_json()

        new_order = Order(
            user=user,
            product_id=body.get("product_id"),
            quantity=body.get("quantity"),
            total_price=body.get("total_price")
        )

        db.session.add(new_order)
        db.session.commit()

        return jsonify({"msg": "Pedido creado exitosamente", "order": new_order.serialize()}), 200

    except Exception as e:
        current_app.logger.error(f"Error al crear pedido: {str(e)}")
        return jsonify({"error": "Ocurrió un error al procesar la solicitud"}), 500
    

# Ruta para eliminar un producto = DELETE
@api.route('/products/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product(product_id):
    try:
        # Obtener el usuario actual autenticado desde el token JWT
        current_user_id = get_jwt_identity()
        current_user = User.query.get(current_user_id)

        # Verificar si el usuario es un administrador
        if not current_user.admin:
            # Si no es un administrador, verificar si es el creador del producto
            product = Product.query.get(product_id)
            if product.creator_id != current_user_id:
                return jsonify({"error": "No tienes permiso para eliminar este producto"}), 403

        # Eliminar el producto de la base de datos
        product = Product.query.filter_by(id=product_id).first()
        if product:
            db.session.delete(product)
            db.session.commit()
            return jsonify({"message": "El producto ha sido eliminado exitosamente"}), 200
        else:
            return jsonify({"error": "No se encontró el producto"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Ruta para editar un producto = PUT
@api.route('/products/<int:product_id>', methods=['PUT'])
@jwt_required()
def edit_product(product_id):
    try:
        # Obtener el usuario actual autenticado desde el token JWT
        current_user_id = get_jwt_identity()
        current_user = User.query.get(current_user_id)

        # Verificar si el usuario es un administrador
        if not current_user.admin:
            # Si no es un administrador, verificar si es el creador del producto
            product = Product.query.get(product_id)
            if product.creator_id != current_user_id:
                return jsonify({"error": "No tienes permiso para editar este producto"}), 403

        # Obtener los datos del producto a editar del cuerpo de la solicitud
        data = request.get_json()
        product = Product.query.get(product_id)

        # Actualizar los campos del producto
        product.name = data.get("name", product.name)
        product.description = data.get("description", product.description)
        product.price = data.get("price", product.price)

        db.session.commit()

        return jsonify({"message": "Producto editado exitosamente", "product": product.serialize()}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
