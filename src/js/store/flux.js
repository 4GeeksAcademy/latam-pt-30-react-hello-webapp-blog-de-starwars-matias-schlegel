const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
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
			}
		}
	};
};

export default getState;
