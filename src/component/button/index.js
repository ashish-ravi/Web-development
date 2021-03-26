import React from "react";

const ButtonOwn = (props) => {
    return(
        <span>
            <button
                style={props.style}
                onClick={() => {
                    props.onClick(props.label);
                } }
            >
                {props.label}
            </button>
        </span>
    );
};

export default ButtonOwn;