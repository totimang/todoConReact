import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({ Completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={Completed ? "green" : "gray"}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };