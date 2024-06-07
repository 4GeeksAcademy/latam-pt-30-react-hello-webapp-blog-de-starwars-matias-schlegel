const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			specificCharacter: null
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
		}
	};
};

export default getState;
