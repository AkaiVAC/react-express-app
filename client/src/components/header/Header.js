import React from "react";
import "./Header.css";

const Header = ({ headerName }) => {
    return (
        <header>
            <h1>{headerName}</h1>
        </header>
    );
};

export default Header;
