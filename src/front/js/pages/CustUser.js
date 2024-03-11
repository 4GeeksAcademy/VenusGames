import React, { useState, useEffect, useContext } from "react";
import CustomizedUser from "../component/CustomizedUser.jsx";
import "../../styles/cust.css"

const CustUser = () => {
	return (
		<div className="container">
			<h2 className="title" style={{marginTop: "25px"}}>Customize</h2>
			<div><CustomizedUser /></div>
		</div>
	);
};

export default CustUser