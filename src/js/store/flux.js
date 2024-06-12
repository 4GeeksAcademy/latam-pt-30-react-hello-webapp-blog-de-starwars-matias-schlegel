const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			specificCharacter: null,
			planets: [],
			specificPlanet: null,
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					if (!response.ok) {
						throw new Error("Levante un error")
					}
					const data = await response.json()
					setStore({ characters: data.results})
					console.log(data.results)
				} catch(error) {
					console.log(error)
				}
			},
			getSpecificCharacter: async (id) => {
				setStore({ specificCharacter: null }) // Restablecezco el estado antes de la nueva solicitud
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (!response.ok) {
						throw new Error("Levante un error")
					}
					const data = await response.json()
					setStore({ specificCharacter: data.result.properties})
					console.log(data.result)
				} catch(error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				try{
					const response = await fetch("https://www.swapi.tech/api/planets")
					if (!response.ok) {
						if (response.status === 429) {
							// Espera antes de reintentar la solicitud
							console.log("Demasiadas solicitudes, reintentando en 1 segundo...");
							await new Promise(resolve => setTimeout(resolve, 1000));
							return getActions().getSpecificPlanet(id);
						} else {
							throw new Error("Levante un error");
						}
					}
					const data = await response.json()
					setStore({ planets: data.results })
					console.log(data.results)
				} catch(error) {
					console.log(error)
				}
			},
			getSpecificPlanet: async (id) => {
				setStore({ specificPlanet: null }) // Restablecezco el estado antes de la nueva solicitud
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (!response.ok) {
						if (response.status === 429) {
							// Espera antes de reintentar la solicitud
							console.log("Demasiadas solicitudes, reintentando en 1 segundo...");
							await new Promise(resolve => setTimeout(resolve, 1000));
							return getActions().getSpecificPlanet(id);
						} else {
							throw new Error("Levante un error");
						}
					}
					const data = await response.json()
					setStore({ specificPlanet: data.result.properties})
					console.log(data.result)
				} catch(error) {
					console.log(error)
				}
			},
			addFavorite: (character) => {
                const newFavorites = [...getStore().favorites, character];
                setStore({ favorites: newFavorites });
			},
			deleteFavorite: async (id) => {
				const newDelete = getStore().favorites.filter(favorite => favorite.uid !== id);
				setStore({ favorites: newDelete });
			}
		}
	}
};

export default getState;
