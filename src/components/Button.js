import React from "react";

const Button = ({ color, btn_txt, onClick }) => {

    return (
        <button className="btn"
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {btn_txt}
        </button>
    );

}

export default Button