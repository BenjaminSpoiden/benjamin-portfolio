import React from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = ({ children, animate }) => {

    return (
        <div>
            <Navbar animate={animate} />
            {children}
            <Footer />
        </div>
    )
}