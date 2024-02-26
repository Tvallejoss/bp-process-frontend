// Hooks
import React from "react";

// Components
import Step from "@/components/molecules/Step";

// Styles
import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
    return (
        <div className={classes["stepWrapper"]}>
            {props.labelArray.map((item, index) => (
                <Step
                    key={index}
                    index={index}
                    label={item}
                    updateStep={props.updateStep}
                    selected={props.currentStep === index + 1}
                ></Step>
            ))}
        </div>
    );
};

export default ProgressBar;
