import React from "react"

export const Card = ({img, title, link}) => {
    return (
        <div className="card d-flex" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={link} className="btn btn-primary">Learn more!</a>
                    <button type="button" className="btn">🖤</button>
                </div>
        </div>
    )
}