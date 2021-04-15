import React from "react";
import "./Services.css";
import icon from "../../../images/services.png";
import ServicesCard from "../ServicesCard/ServicesCard";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";

const services = [
	{
		serviceName: "Fixing Bike",
		serviceIcon: icon,
		serviceDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	{
		serviceName: "Fixing Bike",
		serviceIcon: icon,
		serviceDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	{
		serviceName: "Fixing Bike",
		serviceIcon: icon,
		serviceDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	{
		serviceName: "Fixing Bike",
		serviceIcon: icon,
		serviceDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
];
const Services = () => {
	return (
		<div className="servicesPart " style={{ marginTop: "180px" }}>
			<div className="servicesHeader justify-content-center mt-5 pt-5">
				<h3>Our Services</h3>
				<div className="icon  d-flex justify-content-center mb-5">
					<SpecialIcon />
				</div>
				<p style={{ fontSize: "25px" }}>
					Consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
			</div>
			<div className="row w-100 d-flex justify-content-center mt-5">
				{services.map((service) => (
					<ServicesCard service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
