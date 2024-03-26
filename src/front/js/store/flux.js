//const pokeApiUrl = "https://pokeapi.co/api/v2"
const apiUrl = process.env.BACKEND_URL + "api"


export const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokeApiUrl: "https://pokeapi.co/api/v2",
			message: null,
			currentUser: null,
			favorites: [],
			custom: [],
			users: [],
			products: [],
			pokemons: [],
			pokemon: {},
			currentEdit: {
			},
			loggedUserId: null,
		},
		actions: {
			sign_up: async (newUser) => {
				try {
					let result = await fetch(`${apiUrl}/sign_up`, {
						method: "POST",
						body: JSON.stringify(newUser),
						headers: {
							"Content-Type": "application/json"
						}
					})
					const data = await result.json()
					console.log("respuesta al intentar un new user:", data);
					return data
				} catch (e) {
					console.error(e)
				}
			},

			logIn: async (newLogIn) => {
				try {
					let result = await fetch(`${apiUrl}/login`, {
						method: "POST",
						body: JSON.stringify(newLogIn),
						headers: {
							"Content-Type": "application/json"
						}
					});

					const data = await result.json();
					console.log("respuesta al intentar iniciar sesión:", data);

					if (data.user) {
						setStore({ loggedUserId: data.user.id });
					}

					return data;
				} catch (e) {
					console.error(e);
				}
			},

			logout: async () => {
				try {
					const actions = getActions();
			
					setStore({ loggedUserId: null, favorites: [] });
					actions.isAuth();
					return true;
				} catch (error) {
					console.error('Error during logout:', error);
					return false;
				}
			},

			loadAllUsers: async () => {
				try {
					const response = await fetch(`${apiUrl}/users`)
					console.log(response)
					const res = await response.json()
					console.log(res)
					if (response.ok) {
						setStore({ users: res })
						return res
					}
					return false
				} catch (error) {
					console.log("Error loading message from backend", error);
					return false
				}
			},

			getPokemonsList: async (url) => {
				try {
					const response = await fetch(url, {
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
						}
					});

					if (!response.ok) {
						throw new Error('Failed to fetch Pokemon data');
					}

					// Actualizar el estado de la tienda con el objeto data modificado
					const data = await response.json();
					const store = getStore();
					setStore({ ...store, pokemons: data });
					console.log(data);
				} catch (error) {
					console.error('Error fetching Pokemon data:', error);
				}
			},

			getPokemonDetails: async (name) => {
				if (!name) {
					console.error('Name is undefined');
					return;
				}
				try {
					const response = await fetch(`${getStore().pokeApiUrl}/pokemon/${name}`);
					if (!response.ok) {
						throw new Error('Failed to fetch Pokemon details');
					}
					const data = await response.json();
					const store = getStore();
					setStore({ ...store, pokemon: data });
				} catch (error) {
					console.error('Error fetching Pokemon details:', error);
				}
			},

			getPokemonRegion: async (regionName) => {
				try {
					const response = await fetch(`${getStore().pokeApiUrl}/region/${regionName}`);
					const data = await response.json();
					console.log('Response from API:', data);

					// Obtener la Pokédex de la región
					const regionPokedex = data.main_generation;
					if (!regionPokedex) {
						throw new Error(`No se encontró la pokedex para la región ${regionName}`);
					}
					const regionPokedexUrl = regionPokedex.url;

					// Realizar una solicitud para obtener los detalles de la pokedex de la región
					const regionPokedexResponse = await fetch(regionPokedexUrl);
					const regionPokedexData = await regionPokedexResponse.json();
					console.log(`${regionName} Pokedex Data:`, regionPokedexData);

					// Obtener las entradas de Pokémon de la pokedex de la región
					const regionPokemonEntries = regionPokedexData.pokemon_species;

					// Almacena los datos de los Pokémon de la región en el estado global
					const store = getStore();
					setStore({ ...store, pokemons: regionPokemonEntries });
				} catch (error) {
					console.error(`Error fetching Pokemon region for ${regionName}:`, error);
				}
			},


			// getPokemonDetails: async () => { //la cosa es que poniendo el nombre en postman no sale nada
			// 	try {
			// 		const options = {
			// 			method: 'GET',
			// body: JSON.stringify({ fields: ['name', 'stats', 'ability', 'characteristic', 'evolution'] }),
			// 			headers: {
			// 				accept: 'application/json',
			// 			}
			// 		};

			// 		const response = await fetch(`${pokeApiUrl}`);
			// 		const data = await response.json();

			// 		if (response.ok) {
			// 			return data;
			// 		} else {
			// 			console.error('Error fetching pokemon by name', data);
			// 			throw new Error('Failed to fetch pokemon by name');
			// 		}
			// 	} catch (error) {
			// 		console.error('Error fetching pokemon', error);
			// 		throw error;
			// 	}
			// },




			isAuth: async () => {
				try {
					const options = {
						method: 'GET',
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem("token")
						}
					};
					const response = await fetch(`${apiUrl}/isAuth`, options)
					console.log(response)
					const res = await response.json()
					console.log(res)
					if (response.ok) {
						setStore({ currentUser: res })
						return null
					}
					setStore({ currentUser: false })
				} catch (error) {
					console.log("Error loading message from backend", error);
					setStore({ currentUser: false })
				}
			},

			editUser: async (formData) => {
				try {
					const actions = getActions()
					const response = await fetch(`${apiUrl}/user`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							Authorization: 'Bearer ' + localStorage.getItem("token")
						},
						body: JSON.stringify(formData)
					});
					console.log(formData)
					if (response.ok) {
						const res = await response.json();
						actions.isAuth()
						console.log(res)
						return res
					} else {

						console.error('Error editing user:', response.statusText);
					}
				} catch (error) {
					console.error('Error editing user:', error);
				}
			},

			getProducts: async () => {
				try {
					const response = await fetch(`${apiUrl}/products`);
					if (!response.ok) {
						throw new Error('Error al obtener los productos');
					}
					const data = await response.json();
					const store = getStore();
					setStore({ ...store, products: data });
				} catch (error) {
					console.error('Error fetching Products details:', error);
				}
			},


			addNewProduct: async (newProductData) => {
				try {
					const response = await fetch(`${apiUrl}/products`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: 'Bearer ' + localStorage.getItem("token")
						},
						body: JSON.stringify(newProductData),
					});
					if (response.ok) {
						const data = await response.json();
						const store = getStore();
						// Agregar el nuevo producto al estado products
						setStore({ ...store, products: [...store.products, data.product] });
						console.log("Producto creado exitosamente:", data);
					} else {
						console.error("Error al crear el producto:", response.statusText);
					}
				} catch (error) {
					console.error("Error al procesar la solicitud:", error);
				}
			},



			// AddFavorite para comunicar con el front pero sin detalles ya que en routes.py se hizo la solitud POST (?)
			addFavorites: async (productId) => {
				try {
					const token = localStorage.getItem("token");
					const response = await fetch(`${apiUrl}/user/favorites`, {
						method: "POST",
						body: JSON.stringify({ product_id: productId }),
						headers: {
							'Content-type': 'application/json',
							'Authorization': 'Bearer ' + localStorage.getItem("token")
						}
					});
					if (response.ok) {
						actions.getFavorites();
					} else {
						console.error("Failed to add favorite");
					}
				} catch (error) {
					console.error("Error adding favorite:", error);
				}
			},

	
			getFavorites: async () => {
				try {
					const token = localStorage.getItem("token");
					const response = await fetch(`${apiUrl}/user/favorites`, {
						method: "GET",
						headers: {
							'Content-type': 'application/json',
							'Authorization': 'Bearer ' + localStorage.getItem("token")
						}
					});
					if (response.ok) {
						const data = await response.json();
						// Actualizar el estado de fav con los favoritos obtenidos
						setStore({ ...store, favorites: data });
					} else {
						console.error("Failed to get favorites");
					}
				} catch (error) {
					console.error("Error getting favorites:", error);
				}
			},


			//metodo para borrar favorito por favorito
			removeFavorite: async (itemToRemove) => {
				try {
					const token = localStorage.getItem("token");
					console.log("Item received to remove:", itemToRemove);

					const response = await fetch(`${apiUrl}/user/favorites`, {
						method: "DELETE",
						body: JSON.stringify(itemToRemove),
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
							"Authorization": 'Bearer ' + localStorage.getItem("token"),
						}
					});

					if (!response.ok) {
						throw new Error("Unable to delete");
					}

					const store = getStore();
					const updatedFavorites = store.favorites.filter(favorite => favorite.id !== itemToRemove.id);
					setStore({ favorites: updatedFavorites });
				} catch (error) {
					console.error(error);
				}
			},


		}

	};
};

export default getState;