import React from "react";
import { Link } from "react-router-dom";
import "./FooterMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faMapMarker,
	faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import FooterLastPart from "../FooterLastPart/FooterLastPart";
import logo from "../../../../images/footerLogo.png";

const FooterMain = () => {
	return (
		<div className="footerMainPart   justify-content-center">
			<div className="container row ">
				<div className="col-md-5">
					<div className="logo">
						<img src={logo} alt="" />
						<p>
							Elit duis tristique
							sollicitudin nibh sit amet.
							Integer feugiat scelerisque
							varius morbi enim nunc
							faucibus. Eget duis at tellus
							at urna condimentum.
						</p>
					</div>
				</div>
				<div className="col-md-3">
					<h3>Quick Links</h3>
					<div className="links">
						<div className="link d-flex align-items-center">
							<FontAwesomeIcon
								icon={faArrowRight}
							/>
							<Link>About Us</Link>
						</div>
						<div className="link d-flex align-items-center">
							<FontAwesomeIcon
								icon={faArrowRight}
							/>
							<Link> Services</Link>
						</div>
						<div className="link d-flex align-items-center">
							<FontAwesomeIcon
								icon={faArrowRight}
							/>
							<Link> Gallery</Link>
						</div>
						<div className="link d-flex align-items-center">
							<FontAwesomeIcon
								icon={faArrowRight}
							/>
							<Link> Dashboard</Link>
						</div>
					</div>
				</div>
				<div className="col-md-4 text-center">
					<h3>Get In Touch</h3>
					<div className="address d-flex align-items-center justify-content-center">
						<FontAwesomeIcon
							icon={faMapMarker}
							style={{
								marginRight: "20px",
								color: "tomato",
							}}
						/>
						<h6>Rangpur,Sadar</h6>
					</div>
					<div className="phoneNumber   d-flex align-items-center justify-content-center">
						<FontAwesomeIcon
							icon={faPhoneAlt}
							style={{
								marginRight: "20px",
								color: "tomato",
							}}
						/>
						<h6>01872457887</h6>
					</div>
				</div>
			</div>
			<hr className="special-line" />
			<FooterLastPart />
		</div>
	);
};

export default FooterMain;
