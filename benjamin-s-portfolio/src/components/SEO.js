import React from "react"
import { Helmet } from "react-helmet"

export const SEO = ({ title, desc }) => {

    return (
        <Helmet htmlAttributes={{lang:"en"}} title={title ? `Benjamin's Portfolio | ${title}` : `Benjamin's Portfolio`}>
            <meta name="description" content={desc} />
        </Helmet>
    )
}