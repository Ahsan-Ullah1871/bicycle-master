import React from "react";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import "./AboutGarage.css";
import garagePic1 from "../../../images/gragePic1 (1).jpg";
import garagePic2 from "../../../images/gragePic2.jpg";

const AboutGarage = () => {
	return (
		<div className="container">
			<div className=" row w-100">
				<div className="col-md-6">
					<h3>About Our Garage</h3>
					<SpecialIcon />
					<div className="aboutText">
						<div className="aboutHeader">
							<h5>
								Consectetur adipiscing
								elit, sed do eiusmod
								tempor incididunt ut
								labore et dolore magna
								aliqua.
							</h5>
						</div>
						<div className="aboutDescription">
							<p>
								Elit duis tristique
								sollicitudin nibh sit
								amet. Integer feugiat
								scelerisque varius morbi
								enim nunc faucibus. Eget
								duis at tellus at urna
								condimentum. Cursus
								euismod quis viverra
								nibh cras pulvinar. Quam
								nulla porttitor massa id
								neque. Amet mattis
								vulputate enim nulla
								aliquet porttitor lacus
								luctus. Sit amet
								consectetur adipiscing
								elit duis tristique.
								Venenatis tellus in
								metus vulputate eu. Sed
								turpis tincidunt id
								aliquet risus feugiat.
								Ut tellus elementum
								sagittis vitae et leo
								duis ut. Fermentum et
								sollicitudin ac orci.
								Lectus magna fringilla
								urna porttitor rhoncus
								dolor purus non. Ornare
								arcu odio ut sem nulla.
								Ut eu sem integer vitae
								justo.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-5 garagePictures">
					<img
						className="image1"
						src={garagePic1}
						alt=""
					/>
					<img
						className="image2"
						src={garagePic2}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutGarage;
