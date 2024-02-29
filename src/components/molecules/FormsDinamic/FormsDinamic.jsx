// Hooks
import React, { useState } from "react";

// Components
import NewProgressBar from "@/components/molecules/NewProgressBar";
import Form from "@/components/molecules/Form";

// Styles
import classes from "./FormsDinamic.module.css";

const FormsDinamic = () => {
    function updateStep(step) {
        updateCurrentStep(step);
    }
    return (
        <div className={classes["steps-navigation-container"]}>
            <div className={classes["progress-bar-container"]}>
                <NewProgressBar />
            </div>

            <h2> Formulario a completar</h2>
            <div className={classes["form-container"]}>
                <Form />
            </div>
        </div>
    );
};

export default FormsDinamic;
