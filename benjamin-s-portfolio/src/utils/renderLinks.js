import React from "react"
import { map } from "lodash"
import { Link } from "gatsby"
import { scrollToPosition } from "./scroller";

export const handleMenuClick = (l, e) => {
    if (typeof window !== 'undefined' && l.link.includes('#')) {
        const [anchorPath, anchor] = l.link.split('#');
        if (window.location.pathname === anchorPath) {
            e.preventDefault();
            scrollToPosition(`#${anchor}`, -80);
        }
    }
}

export const renderLinks = (linkData) => {
    return map(linkData, l => {
        return (
            <li>
                <Link
                    key={l.link}
                    title={l.title}
                    to={l.link}
                    onClick={e =>handleMenuClick(l, e)}
                >
                    {l.title}
                </Link>
            </li>
        )
    })
}