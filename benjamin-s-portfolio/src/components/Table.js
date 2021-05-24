import React from "react"
import { TableHead } from "./TableHead"
import { TableRow } from "./TableRow"

export const Table = ({ tableHeadData, tableBodyData, customClass }) => {

    return (
        <table className={customClass}>
            <thead>
                <tr>
                    <TableHead headItems={tableHeadData} />
                </tr>
            </thead>
            <tbody>
                {
                    tableBodyData.map((data) => <TableRow key={data.title} rowItem={data} />)
                }
            </tbody>
        </table>
    )
}