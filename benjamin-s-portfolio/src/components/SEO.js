import React from "react"
import { Helmet } from "react-helmet"

export const SEO = ({ desc }) => {

    return (
        <Helmet htmlAttributes={{lang:"en"}} title="Benjamin's Portfolio">
            <meta name="description" content={desc} />
        </Helmet>
    )
}