import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";
import { CardPlanet } from "../component/CardPlanet";


export const Characters = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
        actions.getPlanets()
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <h1>Characters</h1>
                <div className="d-flex">
                    {store.characters && store.characters.length > 0 ? (
                        store.characters.map((character) => (
                            <div className="col-4" key={character.uid}>
                                <Card 
                                    img="https://www.nawpic.com/media/2020/star-wars-nawpic-1.png"
                                    title={character.name}
                                    link={`/specificCharacter/${character.uid}`}
                                    characterId={character.uid}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading characters...</p>
                    )}
                </div>

                <div className="">
                    <h1>Planets</h1>
                        <div className="d-flex">
                            {store.planets && store.planets.length > 0 ? (
                                store.planets.map((planet) => (
                                    <div className="col-4" key={planet.uid}>
                                        <CardPlanet 
                                            img2="https://i.pinimg.com/originals/56/37/69/563769f0491a3898145f0113ead75443.jpg"
                                            title2={planet.name}
                                            link2={`/specificPlanet/${planet.uid}`}
                                            planetId={planet.uid}
                                        />
                                    </div>
                                    ))
                                ) : (
                                    <p>Loading planets...</p>
                                )}
                        </div>
                </div>
            </div>
        </React.Fragment>
    );
};