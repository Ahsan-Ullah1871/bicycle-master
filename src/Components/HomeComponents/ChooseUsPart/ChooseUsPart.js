import React from "react";
import "./ChooseUsPart.css";
import choosePic from "../../../images/choosePic.jpg";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import ChooseUsPartCard from "../ChooseUsPartCard/ChooseUsPartCard";

const ChooseUsPart = () => {
	return (
		<div style={{ marginTop: "100px" }}>
			<div className="row w-100">
				<div className=" choosePic col-md-4 offset-md-1">
					<img src={choosePic} alt="" />
				</div>
				<div className="col-md-6">
					<h1>Why Choose Us</h1>
					<SpecialIcon />
					<p className="mt-5">
						Consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
					<br />
					<ChooseUsPartCard />
				</div>
			</div>
		</div>
	);
};

export default ChooseUsPart;
