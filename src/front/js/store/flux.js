//const pokeApiUrl = "https://pokeapi.co/api/v2"
const apiUrl = process.env.BACKEND_URL + "/api"


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokeApiUrl: "https://pokeapi.co/api/v2",
			message: null,
			currentUser: null,
			favorites: [],
			custom: [],
			users:[],
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
					})

					const data = await result.json();
					console.log("respuesta al intentar iniciar sesión:", data);
					setStore({ loggedUserId: data.id });
					return data;

				} catch (e) {
					console.error(e);
				}
			},

			logout: async () => {
				try {
					const actions = getActions()
					setStore({ loggedUserId: null, favorites: [] });
					actions.isAuth()
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

			getPokemonDetails: async (identifier) => {
				try {
					const response = await fetch(`${getStore().pokeApiUrl}/pokemon/${identifier}`);
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
					



			// 		const data = await response.json(); // Ahora data contiene una lista de Pokémon, pero puedo necesitar hacer más solicitudes para obtener detalles adicionales.
			// 		const store = getStore();
			// 		setStore({ ...store, pokemons: data });
			// 		console.log(data)

			// 	} catch (error) {
			// 		console.error('Error fetching Pokemon data:', error);
			// 	}
			// },

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
					const response = await fetch(apiUrl + "/user", {
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

			


			addFavorite: async (item, type) => {
				try {
					const actions = getActions();

					const response = await fetch(apiUrl + '/user/favorites', {
						body: JSON.stringify({
							pokemons_id: type === "pokemon" ? item.id : null,
						}),
						method: "POST",
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
						}
					});

					if (response.ok) {
						const data = await response.json();
						console.log(data);
						actions.getFavorite();
						const store = getStore();
						setStore({ ...store, favorites: [...store.favorites, item] })

					} else {
						console.error("Failed to add favorite pokemon");
					}

				} catch (e) {
					console.error(e);
				}
			},

			getFavorite: async () => {
				try {
					const response = await fetch(apiUrl + '/user/favorites', {
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
						}
					});

					const res = await response.json();
					console.log(res)
					const store = getStore()
					setStore({ ...store, favorites: res })
				} catch (e) {
					console.error(e);
				}
			},
			updateFavorites: async (itemToRemove) => {
				try {
					console.log("Item received to remove:", itemToRemove);

					const response = await fetch(apiUrl + "/user/favorite", {
						method: "DELETE",
						body: JSON.stringify(itemToRemove),
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
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