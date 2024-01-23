import React from "react";
import "./Headphones.css";
import PreviewSmall from "../../components/PreviewSmall/PreviewSmall";
import Bringing from '../../components/Bringing/Bringing';
import Header from "../../components/Header/Header";


function Headphones() {
    return ( 
        <div>
            <Header pageHeader="Headphones"/>
            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default Headphones;