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
                {/* <div className={classes.formGroup}>
                    <label htmlFor="name">Idog:</label>
                    <input
                        type="text"
                        id="idog"
                        name="idog"
                        value={formData.idog}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div> */}


                
            </div>
            <button type="submit" className={classes.submitButton}>
                Enviar Informacion
            </button>
        </form>
    );
};

export default Form;
