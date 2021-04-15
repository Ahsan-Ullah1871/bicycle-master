import React from "react";
import "./TestimonialSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import photo from "../../../../images/review.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonials = [
	{
		name: "Ahsan",
		photo: photo,
		work: "study",
		review:
			"Elit duis tristique sollicitudin nibh sit amet. Integer feugiat scelerisque varius morbi enim nunc faucibus. Eget duis at tellus at urna condimentum. Cursus euismod quis viverra nibh cras pulvinar. Quam nulla porttitor massa id neque",
	},
	{
		name: "Ahsan",
		photo: photo,
		work: "study",
		review:
			"Elit duis tristique sollicitudin nibh sit amet. Integer feugiat scelerisque varius morbi enim nunc faucibus. Eget duis at tellus at urna condimentum. Cursus euismod quis viverra nibh cras pulvinar. Quam nulla porttitor massa id neque",
	},
	{
		name: "Ahsan",
		photo: photo,
		work: "study",
		review:
			"Elit duis tristique sollicitudin nibh sit amet. Integer feugiat scelerisque varius morbi enim nunc faucibus. Eget duis at tellus at urna condimentum. Cursus euismod quis viverra nibh cras pulvinar. Quam nulla porttitor massa id neque",
	},
	{
		name: "Ahsan",
		photo: photo,
		work: "study",
		review:
			"Elit duis tristique sollicitudin nibh sit amet. Integer feugiat scelerisque varius morbi enim nunc faucibus. Eget duis at tellus at urna condimentum. Cursus euismod quis viverra nibh cras pulvinar. Quam nulla porttitor massa id neque",
	},
];

const TestimonialSlider = () => {
	return (
		<div>
			<Carousel
				showArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				interval={6100}
			>
				{testimonials.map((testimonial) => (
					<TestimonialCard testimonial={testimonial} />
				))}
			</Carousel>
		</div>
	);
};

export default TestimonialSlider;
