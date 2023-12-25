import React from "react";
import { CiEdit } from "react-icons/ci";    //icono para agregar.
import { CiEraser } from "react-icons/ci";  //icono para borrar.
import "./TodoIcon.css";

const iconTypes = {
    "check": (color) => <CiEdit className="Icon-svg" fill={color}/>,
    "delete": (color) => <CiEraser className="Icon-svg" fill={color}/>,
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };