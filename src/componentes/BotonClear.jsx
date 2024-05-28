import React from "react";

export const BotonClear = (props) => (
    <div className="boton-clear" onClick={() => props.manejarClear('')}>
        {props.children}
    </div>
);