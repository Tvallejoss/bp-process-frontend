// Hooks
import React, { useState } from "react";
import axios from "axios";
// Components
import NewProgressBar from "@/components/molecules/NewProgressBar";

// Styles
import classes from "./FormsDinamic.module.css";

const Formulario = ({ datos }) => {
    /*
    {
        "idlocality": "7723", ---> No mostrar
        "zip_code": null, ---> Codigo Postal ( Puede modificar) Viene Null 
        "province_name": "SALTA",  ---> Provincia (se autocompleta y no puede modificarlo)
        "locality_name": "SAN CARLOS (SAL)", ----> Nombre Localidad Buspack (se autocompleta y puede modificar)
        "enabled_place": "SAN CARLOS (SAL)", -----> Nombre Localidad Sait (se autocompleta y no puede modificarlo)
        "isActive": "1", ----> No mostrar
         "zone" : "", ---> "Zona" (puede modificar) viene Null
    }

*/

    const [formData, setFormData] = useState({
        idlocality: datos["idlocality"],
        zip_code: datos["zip_code"] || "",
        province_name: datos["province_name"],
        locality_name: datos["locality_name"],
        enabled_place: datos["enabled_place"],
        isActive: datos["isActive"],
        zone: datos["zone"] || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("URL_DEL_BACKEND", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Manejar respuesta del backend
            if (response.status === 200) {
                alert("Datos enviados exitosamente");
            } else {
                alert("Error al enviar datos al backend");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={classes["form-container"]}>
            <div className={classes["form-inputs-container"]}>
                <div className={classes["first-column"]}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Localidad Buspack:</label>
                        <input
                            type="text"
                            id="locality_name"
                            name="locality_name"
                            value={datos["locality_name"]}
                            className={classes.input}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="name">Localidad Sait:</label>
                        <input
                            type="text"
                            id="enabled_place"
                            name="enabled_place"
                            value={datos["enabled_place"]}
                            className={classes.input}
                            readOnly // Para evitar la edición del campo
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Provincia:</label>
                        <input
                            type="text"
                            id="province_name"
                            name="province_name"
                            value={datos["province_name"]}
                            className={classes.input}
                            readOnly // Para evitar la edición del campo
                        />
                    </div>
                </div>

                <div className={classes["second-column"]}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Codigo Postal:</label>
                        <input
                            type="text"
                            id="zip_code"
                            name="zip_code"
                            value={datos.zip_code || ""} // Si zip_code es null, establece un valor vacío
                            className={classes.input}
                            readOnly // Para evitar la edición del campo
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="name">Zona:</label>
                        <input
                            type="text"
                            id="zone"
                            name="zone"
                            value={datos.zone || ""}
                            className={classes.input}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className={classes.submitButton}
                onClick={handleSubmit}
            >
                Enviar Informacion
            </button>
        </div>
    );
};

// Componente de Paginación
const Paginacion = ({ currentPage, totalPages, onPageChange }) => {
    // Calcula si hay una página anterior
    const hasPreviousPage = currentPage > 1;

    // Calcula si hay una página siguiente
    const hasNextPage = currentPage < totalPages;

    // Función para cambiar a la página anterior
    const goToPreviousPage = () => {
        if (hasPreviousPage) {
            onPageChange(currentPage - 1);
        }
    };

    // Función para cambiar a la página siguiente
    const goToNextPage = () => {
        if (hasNextPage) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div>
            <button onClick={goToPreviousPage} disabled={!hasPreviousPage}>
                Anterior
            </button>
            <span>
                Página {currentPage} de {totalPages}
            </span>
            <button onClick={goToNextPage} disabled={!hasNextPage}>
                Siguiente
            </button>
        </div>
    );
};

// Componente Principal
const FormsDinamic = ({ formulariosPerPage, formularios }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Lógica de paginación
    const indexOfLastFormulario = currentPage * formulariosPerPage;
    const indexOfFirstFormulario = indexOfLastFormulario - formulariosPerPage;
    const currentFormularios = formularios.slice(
        indexOfFirstFormulario,
        indexOfLastFormulario
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={classes["steps-navigation-container"]}>
            <h1>Formularios a completar</h1>
            {/* Renderizar formularios actuales */}
            {currentFormularios.map((formulario, index) => (
                <Formulario key={index} datos={formulario} />
            ))}
            {/* Renderizar paginación */}
            <Paginacion
                currentPage={currentPage}
                totalPages={Math.ceil(formularios.length / formulariosPerPage)}
                onPageChange={paginate}
            />
        </div>
    );
};

export default FormsDinamic;
