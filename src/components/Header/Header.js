import React from "react";
import "./Header.css";

function Header({pageHeader}) {
    return ( 
        <div className="header">
            <h3 className="header-h3">{pageHeader}</h3>
        </div>
     );
}

export default Header;