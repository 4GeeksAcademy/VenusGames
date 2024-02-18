import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {

    const navigate = useNavigate()
    

    return (

        <div>

            <div className="foot">

                <div className="footer-info">
					<p className="mx-1 p-f button-r footer-letters" role="button" onClick={() => navigate("/aboutus")}>About us</p>
                    <p className="mx-1 p-f button-r footer-letters" role="button" onClick={() => navigate("/frequentquestions")}>Frequent Questions</p>
					<p className="mx-1 p-f button-r footer-letters" role="button" onClick={() => navigate("/technicalsupport")}>Technical Support</p>
                    
                </div>
            </div>
        </div>

    )
}

export default Footer