'use client'

// Hooks
import React from "react";

// Styles
import classes from "./Table.module.css";

// Icons
import { IconRun } from "@/assets/icons";

// Components
import TableField from "@/components/molecules/TableField";

const Table = () => {
    return (
        <div className={classes["table-container"]}>
            <div className={classes["table-title"]}>
                <ol className={classes["title"]}>
                    <li>Procesos</li>
                    <li>Actualizado</li>
                    <li>Informacion </li>
                    <li>Estado</li>
                    <li>Acciones</li>
                </ol>
            </div>

            <TableField name= 'update 1' />
            <TableField name= 'update 2'/>
            <TableField name= 'update 3' />
        </div>
    );
};

export default Table;
