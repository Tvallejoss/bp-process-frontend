// Hooks
import React, { useState } from "react";

// Components
import ProgressBar from "@/components/molecules/ProgressBar";
import Form from "@/components/molecules/Form";

// Styles
import classes from "./FormsDinamic.module.css";

const FormsDinamic = () => {
    const stepsNames = ["Formulario 1", "Formulario 2", "Formulario 3", "Formulario 4", "Formulario 5"];
    const [currentStep, updateCurrentStep] = useState(1);

    function updateStep(step) {
        updateCurrentStep(step);
    }
    return (
        <div className={classes["steps-navigation-container"]}>
            <ProgressBar
                labelArray={stepsNames}
                currentStep={currentStep}
                updateStep={updateStep}
            ></ProgressBar>


            <h1> Formulario a completar</h1>
            <div className={classes["form-container"]}>
                <Form />
            </div>

            <div className={classes["buttons-container"]}>
                <button
                    className={classes["primaryButton"]}
                    disabled={currentStep === 1}
                    onClick={() => updateStep(currentStep - 1)}
                >
                    Anterior
                </button>
                <button
                    className={classes["primaryButton"]}
                    disabled={currentStep === stepsNames.length}
                    onClick={() => updateStep(currentStep + 1)}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default FormsDinamic;
