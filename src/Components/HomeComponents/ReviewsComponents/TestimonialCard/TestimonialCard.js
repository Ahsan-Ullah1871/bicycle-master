import React from "react";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div>
			<img src={testimonial.photo} alt="" />
			<div className="TestimonialCarousel">
				<h3>{testimonial.name}</h3>
				<h4>{testimonial.work}</h4>
				<p>{testimonial.review}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
