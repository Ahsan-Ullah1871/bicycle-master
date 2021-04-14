import React from "react";
import "./TopBanner.css";
import { Button } from "react-bootstrap";

const TopBanner = () => {
	return (
		<>
			<div className="topBanner text-center"></div>
			<div className="bannerText ">
				<h1 className="w-70  ">
					Professional Bicycle Repair & Custom Services
				</h1>
				<div className="bookButton mt-5">
					<button className="special-Button">
						Book Now
					</button>
				</div>
			</div>
		</>
	);
};

export default TopBanner;
