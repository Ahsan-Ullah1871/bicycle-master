import React from "react";
import "./FooterLastPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { Link as a } from "react-router-dom";

const FooterLastPart = () => {
	return (
		<div className="d-flex flex-wrap justify-content-between align-items-center  ">
			<div className="copyRightAlert">
				<h6>
					©2020 BiCycle-Master . All Rights Reserved By
					Ahsan
				</h6>
			</div>
			<div className="socialLinks">
				<a
					href="https://www.facebook.com/Ahsan1871"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>

				<a
					href="https://twitter.com/login"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faTwitterSquare} />
				</a>

				<a
					href="https://www.youtube.com/channel/UCkmGfi4w60qQa34z-YwD3hQ"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faYoutubeSquare} />
				</a>
			</div>
		</div>
	);
};

export default FooterLastPart;
