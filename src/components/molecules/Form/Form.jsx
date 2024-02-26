// Hooks
import React, { useState } from "react";

// classes
import classes from "./Form.module.css";

const Form = () => {
    const [formData, setFormData] = useState({
        data: "",
        id: "",
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
        <div className={classes.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div>{" "}
                <div className={classes.formGroup}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div>{" "}
                <div className={classes.formGroup}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="email">Nombre:</label>
                    <input
                        type="email"
                        id="email"
                        name="text"
                        value={formData.email}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="message">comentarios:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={classes.textarea}
                    />
                </div>
                <button type="submit" className={classes.submitButton}>
                    Enviar Informacion
                </button>
            </form>
        </div>
    );
};

export default Form;
