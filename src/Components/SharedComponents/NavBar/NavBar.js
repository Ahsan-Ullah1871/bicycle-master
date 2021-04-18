import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
	return (
		<Navbar expand="lg" className="NavBarPart">
			<Navbar.Brand href="/home" className="logo">
				<img src={logo} alt="" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<div className="navMenu">
						<Link to="/home">Home</Link>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/dashboard/dashboardBookNow">
							Services
						</Link>
						<Link to="/login">LogIn</Link>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
