import React from "react";
import { Link } from "react-router-dom";

export const Demo = () => {
	return (
			<>
            <form onSubmit={onSearchSubmit}>
                <div className="form-group">
                    <svg
                        xmins='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox="0 0 24 24"
                        strokeWidth={'1.5'}
                        stroke="currentColor"
                        className="icon-search"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d=""
                        </svg>
                </div>
            </form>
			</>
		);
	};