import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import AllBookingListTable from "./AllBookingListTable";

const AllBookingList = () => {
	const [allBookingList, setAllBookingList] = useState(null);
	useEffect(() => {
		axios({
			method: "get",
			url: `https://salty-retreat-17704.herokuapp.com/allBookingList`,
			responseType: "stream",
		}).then(function (response) {
			setAllBookingList(response.data);
		});
	}, []);

	const changeStatus = (event, id) => {
		const status =
			event.target.options[event.target.selectedIndex].text;
		console.log(status, id);

		axios({
			method: "PATCH",
			url: `https://salty-retreat-17704.herokuapp.com/updateStatus/${id}`,
			data: { status },
		});
	};

	const AllBookingListStyle = {
		width: "80%",
		height: "500px",
		backgroundColor: "white",
		padding: " 50px",
		margin: "0 auto",
		overflow: "scroll",
		color: "black",
	};
	return (
		<div style={AllBookingListStyle}>
			<h3 className="text-center">All Booking List</h3>
			<div className="icon  d-flex justify-content-center mb-5">
				<SpecialIcon />
			</div>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Service</th>
						<th>Pay with</th>
						<th>Status</th>
					</tr>
				</thead>

				{allBookingList?.map((bookingData) => (
					<AllBookingListTable
						bookingData={bookingData}
						changeStatus={changeStatus}
					/>
				))}
			</Table>
		</div>
	);
};

export default AllBookingList;
