import React from "react"
import { FaGithub, FaLink } from "react-icons/fa"

export const TableRow = ({ rowItem }) => {

    return (
        <tr>
            <td className="table-row-year"> {rowItem.year} </td>
            <td className="table-row-title"> {rowItem.title} </td>
            <td className="table-row-company">{rowItem.company ? rowItem.company : "-"}</td>
            <td className="table-row-stack"> 
                <ul>
                    {rowItem.stack.map(st => <li key={st.technology}> {st.technology} </li>)}
                </ul> 
            </td>
            <td className="table-row-links"> 
                <ul>
                    {rowItem.url && <li><a href={rowItem.url}> <FaLink /> </a></li>}
                    {rowItem.github_url && <li><a href={rowItem.github_url}><FaGithub /></a></li>}
                </ul>
            </td>
        </tr>
    )
}