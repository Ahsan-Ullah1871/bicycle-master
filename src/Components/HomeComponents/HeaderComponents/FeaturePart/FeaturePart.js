import React from "react";
import "./FeaturePart.css";
import DiagnosticsImage from "../../../../images/Diagnostics.png";
import ServicesImage from "../../../../images/services.png";
import MaintenanceImage from "../../../../images/maintenance.png";

const FeaturePart = () => {
	return (
		<div className="featureRow w-100 d-flex justify-content-center">
			<div className=" featureCol">
				<div className="featureNestedDiv">
					<div className="featureVector">
						<img src={DiagnosticsImage} alt="" />
					</div>
					<div className="featureInfo">
						<h2>Diagnostics</h2>
						<h6>
							Lorem ipsum dolor sit, amet
							consectetur adipisicing elit.
							Nemo, sapiente ex. Velit
							accusamus odit reiciendis!
						</h6>
					</div>
				</div>
			</div>
			<div className=" featureCol">
				<div className="featureNestedDiv">
					<div className="featureVector">
						<img src={MaintenanceImage} alt="" />
					</div>
					<div className="featureInfo">
						<h2>Maintenance</h2>
						<h6>
							Lorem ipsum dolor sit, amet
							consectetur adipisicing elit.
							Nemo, sapiente ex. Velit
							accusamus odit reiciendis!
						</h6>
					</div>
				</div>
			</div>
			<div className=" featureCol">
				<div className="featureNestedDiv">
					<div className="featureVector">
						<img src={ServicesImage} alt="" />
					</div>
					<div className="featureInfo">
						<h2>Services</h2>
						<h6>
							Lorem ipsum dolor sit, amet
							consectetur adipisicing elit.
							Nemo, sapiente ex. Velit
							accusamus odit reiciendis!
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturePart;
