import React from "react"

export const Service = ({ title, desc, icon }) => {

    return (
        <div className="service-display">
            <div style={{ justifySelf:"center", marginTop: "10px" }} >
                {icon}
            </div>
            <h2 className="service-title"> {title} </h2>
            <div className="divider"/>
            <p>
                {desc}
            </p>
        </div>
    )
}