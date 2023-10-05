import React from "react";
import { useNavigate } from "react-router-dom";

function AutomotiveCard(){

    const navigate = useNavigate()

    return(
        <div className="hme_crd" onClick={() => navigate("/automotives")}>
            <div>
                <i class="fa-solid fa-car"></i>
            </div>
            <h4>Automotive</h4>
        </div>
    )
}

export default AutomotiveCard;