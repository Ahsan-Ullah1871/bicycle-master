import React from "react";
import "./FooterLastPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const FooterLastPart = () => {
	return (
		<div className="d-flex flex-wrap justify-content-between align-items-center">
			<div className="copyRightAlert">
				<h6>
					©2020 BiCycle-Master . All Rights Reserved By
					Ahsan
				</h6>
			</div>
			<div className="socialLinks">
				<Link>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</Link>

				<Link>
					<FontAwesomeIcon icon={faTwitterSquare} />
				</Link>

				<Link>
					<FontAwesomeIcon icon={faYoutubeSquare} />
				</Link>
			</div>
		</div>
	);
};

export default FooterLastPart;
