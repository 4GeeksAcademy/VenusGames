const API_URL = "https://pokeapi.co/api/v2"
const apiUrl = process.env.BACKEND_URL + "/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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

			getPokemonsList: async (startId, endId) => {
				try {
					const promises  = [];
					for (let id = startId; id <= endId; id++) {
						promises.push(fetch(`${API_URL}/pokemon/${id}`).then(response => response.json())); 
						
					}
					const pokemonsData = await Promise.all(promises);
					setStore ({ pokemons: pokemonsData});

				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			// fetchPokemonByName: async (pokemonName) => { //la cosa es que poniendo el nombre en postman no sale nada
			// 	try {
			// 		const options = {
			// 			method: 'GET',
			// 			headers: {
			// 				accept: 'application/json',
			// 			}
			// 		};

			// 		const response = await fetch(`${API_URL}`);
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


			

			// isAuth: async () => {
			// 	try {
			// 		const options = {
			// 			method: 'GET',
			// 			headers: {
			// 				Authorization: 'Bearer ' + localStorage.getItem("token")
			// 			}
			// 		};
			// 		const response = await fetch(`${apiUrl}/isAuth`, options)
			// 		console.log(response)
			// 		const res = await response.json()
			// 		console.log(res)
			// 		if (response.ok) {
			// 			setStore({ currentUser: res })
			// 			return null
			// 		}
			// 		setStore({ currentUser: false })
			// 	} catch (error) {
			// 		console.log("Error loading message from backend", error);
			// 		setStore({ currentUser: false })
			// 	}
			// },

			// editUser: async (formData) => {
			// 	try {
			// 		const actions = getActions()
			// 		const response = await fetch(apiUrl + "/user", {
			// 			method: 'PUT',
			// 			headers: {
			// 				'Content-Type': 'application/json',
			// 				Authorization: 'Bearer ' + localStorage.getItem("token")
			// 			},
			// 			body: JSON.stringify(formData)
			// 		});
			// 		console.log(formData)
			// 		if (response.ok) {
			// 			const res = await response.json();
			// 			actions.isAuth()
			// 			console.log(res)
			// 			return res
			// 		} else {

			// 			console.error('Error editing user:', response.statusText);
			// 		}
			// 	} catch (error) {
			// 		console.error('Error editing user:', error);
			// 	}
			// },

			


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