import React from "react"

export const CardSpecificCharacter = ({ img, text, title, name, birthYear, gender, height, skinColor, EyeColor}) => {
    return(
        <React.Fragment>
                <div className="d-flex">
                        <img src={img} />       
                    <div className="titleText">
                        <h5>{title}</h5>
                        <p>{text}</p>
                    </div>
                </div>
                <div className="stick">
                </div>
                <div className="info d-flex">
                    <div>
                        <p><strong>name</strong></p>
                        <p>{name}</p>
                    </div>
                    <div>
                        <p><strong>Birth Year</strong></p>
                        <p>{birthYear}</p>
                    </div>
                    <div>
                        <p><strong>Gender</strong></p>
                        <p>{gender}</p>
                    </div>
                    <div>
                        <p><strong>Height</strong></p>
                        <p>{height}</p>
                    </div>
                    <div>
                        <p><strong>Skin Color</strong></p>
                        <p>{skinColor}</p>
                    </div>
                    <div>
                        <p><strong>Eye Color</strong></p>
                        <p>{EyeColor}</p>
                    </div> 
                </div>
        </React.Fragment>
    )
}