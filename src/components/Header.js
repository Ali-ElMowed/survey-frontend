import React, { useEffect } from "react";
import Button from "./Button";
const Header = ({ title }) => {
    const saveChanges = () => {

    }
    return (

        <header className="header">

            <h1 className="title">{title}</h1>
            <Button
                color={'#0D99FF'}
                btn_txt={"Save Changes"}
                onClick={saveChanges}
            />

        </header>


    );
}

export default Header;