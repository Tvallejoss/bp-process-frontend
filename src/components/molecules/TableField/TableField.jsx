'use client'

// Hooks
import React from "react";

// Styles
import classes from "./TableField.module.css";

const TableField = ( {name}) => {
    
    const openPopUp = () => 
    {
        console.log('name', name);
        alert('Popup open', name )
    }


    return (
        <div className={classes["table-campos"]}>
            <ol>
                <li>Update-DB-Prod</li>
                <li>22/02/2024 6:20 AM</li>
                <li>Info</li>
                <li>Success</li>
                <li className={classes["icon-svg"]}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f28e2a"
                        strokeWidth="2"
                        className="feather feather-play"
                        onClick = {()=> openPopUp()}
                    >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>

                    </svg>
                </li>
            </ol>
        </div>
    );
};

export default TableField;
