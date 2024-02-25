"use client";

// Hooks
import { useState } from "react";

// Styles
import classes from "./TableField.module.css";

// Components
import Modal from "@/components/molecules/Modal";

const TableField = ({ name }) => {
    const openPopUp = () => {};

    const [showFormProccessModal, setshowFormProccessModal] = useState(false);

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
                        onClick={() => setshowFormProccessModal(true)}
                    >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </li>
            </ol>

            {showFormProccessModal && (
                <Modal onClose={() => setshowFormProccessModal(false)}>
                    <h1 onCancel={() => setshowFormProccessModal(false)}>
                        {" "}
                        Forms: {name}
                    </h1>
                </Modal>
            )}
        </div>
    );
};

export default TableField;
