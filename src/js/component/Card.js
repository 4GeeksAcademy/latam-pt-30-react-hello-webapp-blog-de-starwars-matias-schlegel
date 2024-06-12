import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

export const Card = ({img, title, link, characterId }) => { 
    const {store, actions} = useContext(Context)

const handleAddFavorite = () => {
    const character = store.characters.find(char => char.uid === characterId);
    if (character) {
        actions.addFavorite(character);
    }
};

    return (
        <div className="card d-flex" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex mt-3">
                        <Link 
                        to={`/demo/${characterId}`}
                        href={link} 
                        className="btn btn-primary"
                        >
                            Learn more!
                        </Link>
                        <button 
                        type="button" 
                        className="btn"
                        onClick={handleAddFavorite}
                        >
                            🖤
                        </button>
                    </div>
                </div>
        </div>

    )
}