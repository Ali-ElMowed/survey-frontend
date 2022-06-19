import React from "react";

const Button = ({color , btn_txt})=>{

    return(
        <button className="btn"
        style={{backgroundColor:color}}
        >
        {btn_txt}
        </button>
    );

}

export default Button