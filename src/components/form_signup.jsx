import React, { useState, useEffect } from "react";
import "./form_signup.css";

function formValidation(elem, value) {
	const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	const phoneRegEx = /^[0-9+]{8,15}$/;

	if (!value) {
		return `${elem} is required`;
	}
	if (elem == "name") {
		if (value.length < 4 || value.length > 20) {
			return "name should be atleast 4 chars and less than 20 chars";
		}
	} else if (elem == "email") {
		if (value.match(emailRegEx) === null) {
			return "not a valid email address";
		}
	} else if (elem == "password") {
		if (value.length < 6 || value.length > 30) {
			return "password should be atleast 6 chars and less than 30 chars";
		}
	} else if (elem == "phone") {
		if (value.match(phoneRegEx) === null) {
			return "not a valid phone number";
		}
	}
	return false;
}

function FormSignup() {
	const userNone = {
		name: "",
		email: "",
		phone: "",
		gender: "",
		password: "",
	};
	const [userInfo, setUserInfo] = useState(userNone);
	const { name, email, phone, gender, password } = userInfo;
	const [error, setError] = useState(userInfo);

	function handleInput(ev) {
		const { name, value } = ev.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
		setError({ ...error, [name]: formValidation(name, value) });
	}
	return (
		<div className="signUpForm">
			<h1>Signup Form</h1>
			<p>Simple example of signup form with validations.</p>

			<form>
				<label>Full Name</label>
				<div>
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleInput}
					></input>
					{error.name && <p>{error.name}</p>}
				</div>
				<label>Email</label>
				<div>
					<input
						type="email"
						name="email"
						value={email}
						onChange={handleInput}
					></input>
					{error.email && <p>{error.email}</p>}
				</div>

				<label>Phone</label>
				<div>
					<input
						type="tel"
						name="phone"
						value={phone}
						onChange={handleInput}
					></input>
					{error.phone && <p>{error.phone}</p>}
				</div>
				<label>Gender</label>
				<div>
					<div className="genderBox">
						<label>
							<input
								type="radio"
								name="gender"
								value="Male"
								onChange={handleInput}
							></input>
							Male
						</label>
						<label>
							<input
								type="radio"
								name="gender"
								value="Female"
								onChange={handleInput}
							></input>
							Female
						</label>
						<label>
							<input
								type="radio"
								name="gender"
								value="Others"
								onChange={handleInput}
							></input>
							Others
						</label>
					</div>
					{error.gender && <p>{error.gender}</p>}
				</div>
				<label>Password</label>
				<div>
					<input
						type="password"
						name="password"
						value={password}
						onChange={handleInput}
					></input>
					{error.password && <p>{error.password}</p>}
				</div>
			</form>
		</div>
	);
}

export default FormSignup;
