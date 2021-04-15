import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const NavBar = () => {
	return (
		<div className=" d-flex justify-content-between align-items-center NavBarPart ml-5 mr-5">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<div className="navMenu">
				<Link>Home</Link>
				<Link>About Us</Link>
				<Link>Services</Link>
				<Link>LogIn</Link>
			</div>
		</div>
	);
};

export default NavBar;
