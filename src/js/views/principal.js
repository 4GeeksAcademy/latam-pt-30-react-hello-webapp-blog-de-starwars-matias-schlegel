import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";


export const Characters = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <h1>Characters</h1>
                <div className="d-flex">
                    {store.characters && store.characters.length > 0 ? (
                        store.characters.map((character) => (
                            <div className="col-md-4" key={character.uid}>
                                <Card 
                                    img="https://www.nawpic.com/media/2020/star-wars-nawpic-1.png"
                                    title={character.name}
                                    link={character.url}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading characters...</p>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};