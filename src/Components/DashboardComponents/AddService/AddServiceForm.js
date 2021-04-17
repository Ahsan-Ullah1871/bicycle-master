import React from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const AddServiceForm = ({ handleUploadImage, onSubmit }) => {
	const { register, handleSubmit } = useForm();

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Row>
					<Form.Group
						as={Col}
						controlId="formGridEmail"
					>
						<Form.Label>Service Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Service Name"
							name="serviceName"
							ref={register({
								required: true,
							})}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group
						as={Col}
						controlId="formGridPassword"
					>
						<Form.Label>Service Icon</Form.Label>
						<Form.File custom>
							<Form.File.Input
								isValid
								onChange={(event) =>
									handleUploadImage(
										event
									)
								}
							/>
							<Form.File.Label data-browse="Add Icon">
								Choose Icon
							</Form.File.Label>
						</Form.File>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group
						as={Col}
						controlId="formGridEmail"
					>
						<Form.Label>
							Service Description
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Short Description in 80 characters"
							maxlength="80"
							name="serviceDescription"
							ref={register({
								required: true,
							})}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group
						as={Col}
						controlId="formGridEmail"
					>
						<Form.Label>Service Price</Form.Label>
						<Form.Control
							type="text"
							placeholder="Price"
							name="price"
							ref={register({
								required: true,
							})}
						/>
					</Form.Group>
				</Form.Row>
				<button class="submitButton">
					Submit
					<div class="SubmitButton__horizontal"></div>
					<div class="submitButton__vertical"></div>
				</button>
			</form>
		</div>
	);
};

export default AddServiceForm;