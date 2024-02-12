import React from "react";
import { Link } from "react-router-dom";

export const Demo = () => {
	return (
			<>
				<div></div>
				<Link to="/" className="back-home">
					<button className="info-buton">Back home</button>
			</Link>
			</>
		);
	};