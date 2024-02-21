import React from "react";
import classes from "./Table.module.css";

const Table = () => {
    return (
        <div className={classes["table-container"]}>
            <table className={classes["table"]}>
                <thead>
                    <tr>
                        <th>Título 1</th>
                        <th>Título 2</th>
                        <th>Título 3</th>
                        <th>Título 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dato 1</td>
                        <td>Dato 2</td>
                        <td>Dato 3</td>
                        <td>Dato 4</td>
                    </tr>
                    {/* Agrega más filas según sea necesario */}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
