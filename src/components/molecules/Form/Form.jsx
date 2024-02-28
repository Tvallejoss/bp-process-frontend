// Hooks
import React, { useState } from "react";

// classes
import classes from "./Form.module.css";

const Form = () => {
    const [formData, setFormData] = useState({
        idog: "",
        isActive: "",
        type: "",
    });

    // Setear valores del Form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={classes["form-container"]}>
            <div className={classes["form-inputs-container"]}>
                <div className={classes["first-column"]}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Idog:</label>
                        <input
                            type="text"
                            id="idog"
                            name="idog"
                            value={formData.idog}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="place_name"
                            name="place_name"
                            value={formData.place_name}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Provincia:</label>
                        <input
                            type="text"
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Zona:</label>
                        <input
                            type="text"
                            id="zone"
                            name="zone"
                            value={formData.zone}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>
                </div>

                <div className={classes["second-column"]}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Activo:</label>
                        <select
                            type="text"
                            id="isActive"
                            name="isActive"
                            value={formData.isActive}
                            onChange={handleChange}
                            className={classes.input}
                        >
                            <option value="0">Si</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Descripcion:</label>
                        <input
                            type="text"
                            id="type_description"
                            name="type_description"
                            value={formData.type_description}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Codigo Postal:</label>
                        <input
                            type="text"
                            id="zip_code"
                            name="zip_code"
                            value={formData.zip_code}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>
                </div>

                <div className={classes["third-column"]}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Code:</label>
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="name">Localidad:</label>
                        <input
                            type="text"
                            id="locality_name"
                            name="locality_name"
                            value={formData.locality_name}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Habilitado:</label>
                        <select
                            type="text"
                            id="enabled_place"
                            name="enabled_place"
                            value={formData.enabled_place}
                            onChange={handleChange}
                            className={classes.input}
                        >
                            <option value="0">Si</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <button type="submit" className={classes.submitButton}>
                Enviar Informacion
            </button>
        </form>
    );
};

export default Form;
