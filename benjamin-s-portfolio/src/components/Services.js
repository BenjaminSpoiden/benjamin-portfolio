import React from "react"
import { Service } from "./Service"
import services from "../constant/services"

export const Services = () => {

    return (
        <>
            <h2 className="heading">What I Do</h2>
            <div className="services-display">
                { services.map((data, index) => <Service key={index} title={data.title} desc={data.desc} icon={data.icon} />) }
            </div>
        </>
    )
}