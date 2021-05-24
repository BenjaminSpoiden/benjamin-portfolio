import React from "react"

export const TableHead = ({ headItems }) => {

    return (
        <>
            {
                headItems.map(item => {
                    console.log(`head-${item}`)
                    return <td key={item} className={`head-${item}`} > {item} </td>
                })
            }
        </>
    )
}