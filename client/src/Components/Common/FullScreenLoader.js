import React from "react";
import loader from "../../Assets/img/loader.svg";

const FullScreenLoader = ()=>{
    return (
            <div className="ProcessingDiv">
                <div className="center-screen text-center">
                    <img className="loader-size" src={loader} alt=""/>
                </div>
            </div>
    );
};

export default FullScreenLoader;