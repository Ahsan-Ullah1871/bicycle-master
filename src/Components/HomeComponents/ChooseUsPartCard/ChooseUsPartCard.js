import React from "react";
import "./ChooseUsPartCard.css";
import iconChoose from "../../../images/special.png";

const ChooseUsPartCard = () => {
	return (
		<>
			<div className="row mt-5">
				<div className="col-md-6 d-flex justify-content-between">
					<div className="chooseIcons">
						<img src={iconChoose} alt="" />
					</div>
					<div className="informationPart ">
						<h3>Expert Mechanics</h3>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Ut
							elit tellus, luctus nec
							ullamcorper mattis, pulvinar
							dapibus leo.
						</p>
					</div>
				</div>
				<div className="col-md-6 d-flex   ">
					<div className="chooseIcons">
						<img src={iconChoose} alt="" />
					</div>
					<div className="informationPart">
						<h3>Expert Mechanics</h3>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Ut
							elit tellus, luctus nec
							ullamcorper mattis, pulvinar
							dapibus leo.
						</p>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-md-6 d-flex  ">
					<div className="chooseIcons">
						<img src={iconChoose} alt="" />
					</div>
					<div className="informationPart">
						<h3>Expert Mechanics</h3>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Ut
							elit tellus, luctus nec
							ullamcorper mattis, pulvinar
							dapibus leo.
						</p>
					</div>
				</div>
				<div className="col-md-6 d-flex   ">
					<div className="chooseIcons">
						<img src={iconChoose} alt="" />
					</div>
					<div className="informationPart">
						<h3>Expert Mechanics</h3>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Ut
							elit tellus, luctus nec
							ullamcorper mattis, pulvinar
							dapibus leo.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChooseUsPartCard;
