"use client";

// Hooks
import { useState } from "react";
import axios from "axios";

// Styles
import classes from "./TableField.module.css";

// Components
import Spinner from "@/components/atoms/Spinner";
import Modal from "@/components/molecules/Modal";
import FormsDinamic from "@/components/molecules/FormsDinamic";

const TableField = ({ name }) => {
    const openPopUp = () => {};

    const [showFormProccessModal, setshowFormProccessModal] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [formDataAxios, setFormDataAxios] = useState(null);

    const [totalFormularios, setTotalFormularios] = useState([]);

    const runProcess = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            const getFormData = async () => {
                await axios
                    .get("http://localhost:8000/runViewInserterP1")
                    .then(({ data }) => {
                        setshowFormProccessModal(true);
                        setFormDataAxios(data);
                        setTotalFormularios(data.length); // Actualiza la cantidad total de formularios
                    })
                    .catch((error) =>
                        console.log("Error Axios al traer los Forms", error)
                    );
            };
            getFormData();
        }, 5000);
    };

    return (
        <div className={classes["table-campos"]}>
            <ol>
                <li> Insertar destinos Sait</li>
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
                        onClick={runProcess}
                    >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </li>
            </ol>

            {!isLoading ? (
                showFormProccessModal && (
                    <Modal>
                        <div className={classes["form-modal-container"]}>
                            <FormsDinamic
                                formulariosPerPage={1}
                                formularios={formDataAxios}
                                setFormDataAxios={setFormDataAxios}
                                handleLastFormSent={setshowFormProccessModal}
                            />
                        </div>
                    </Modal>
                )
            ) : (
                <Modal>
                    <Spinner />
                </Modal>
            )}
        </div>
    );
};

export default TableField;
