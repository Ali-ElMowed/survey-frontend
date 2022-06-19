import React from "react";
import Button from "./Button";
const Header = ({title})=>{
    return(

        <header className="header">

            <h1 className="title">{title}</h1>
            <Button 
            color={'#0D99FF'}
            btn_txt={"create one"}/>
            
        </header>


    );
}

export default Header;