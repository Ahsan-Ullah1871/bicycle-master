import React from "react";
import Services from "../Services/Services";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
	return (
		<div className=" serviceCol">
			<div className="serviceNestedDiv">
				<div className="serviceVector">
					<img src={service.serviceIcon} alt="" />
				</div>
				<div className="featureInfo">
					<h2>{service.serviceName}</h2>
					<h6>{service.serviceDescription}</h6>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
