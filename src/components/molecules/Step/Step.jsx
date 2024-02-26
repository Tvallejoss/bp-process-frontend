// hooks
import React from "react";

// Styles
import classes from "./Step.module.css";

const Steps = (props) => {
    return (
        <div
            className={`${classes.stepBlock} ${
                props.selected ? classes.selected : ""
            }`}
        >
            <div
                className={classes["circleWrapper"]}
                onClick={() => props.updateStep(props.index + 1)}
            >
                <div className={classes["circle"]}>{props.index + 1}</div>
            </div>
            <span>{props.label}</span>
        </div>
    );
};

export default Steps;
