import React, { useContext, useEffect } from "react";
import { CardSpecificCharacter } from "../component/CardSpecific";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "./../../styles/specificCharacter.css";


export const SpecificCharacter = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            actions.getSpecificCharacter(id);
        }
    }, [id]);

    return (
        <React.Fragment>
            {store.specificCharacter ? (
                <div className="container">
                    <div className="">
                        <div className="cardSpecificCharacter col-4">
                            <CardSpecificCharacter
                               img="https://www.xtrafondos.com/wallpapers/darth-vader-de-star-wars-4936.jpg"
                               title={store.specificCharacter.name}
                               text={store.specificCharacter.description}
                               name={store.specificCharacter.name}
                               birthYear={store.specificCharacter.birth_year}
                               gender={store.specificCharacter.gender}
                               height={store.specificCharacter.height}
                               skinColor={store.specificCharacter.skin_color}
                               EyeColor={store.specificCharacter.eye_color}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading character...</p>
            )}
        </React.Fragment>
    );
};