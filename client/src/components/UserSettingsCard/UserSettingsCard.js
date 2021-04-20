import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ADD_USER } from '../../store/action/actions';
import axios from '../../axiosInstance';
import DialogBox from '../UI/DialogBox/DialogBox';
import styles from './UserSettingsCard.module.css';

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (user) => dispatch({ type: ADD_USER, payload: user }),
	};
};

const UserSettingsCard = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [addLine1, setAddLine1] = useState('');
	const [addLine2, setAddLine2] = useState('');
	const [country, setCountry] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [showDialogBox, setShowDialogBox] = useState(false);
	const [message, setMessage] = useState('');

	let userID;
	// check if user is logged in
	if (
		Object.keys(props.user).length !== 0 &&
		props.user.constructor === Object
	) {
		userID = props.user._id;
	}

	const setUserData = () => {
		if (props.user.firstName !== '') {
			setFirstName(props.user.firstName);
		}
		if (props.user.lastName !== '') {
			setLastName(props.user.lastName);
		}
		if (props.user.email !== '') {
			setEmail(props.user.email);
		}
		if (props.user.addLine1 !== '') {
			setAddLine1(props.user.addLine1);
		}
		if (props.user.addLine2 !== '') {
			setAddLine2(props.user.addLine2);
		}
		if (props.user.country !== '') {
			setCountry(props.user.country);
		}
		if (props.user.zipCode !== '') {
			setZipCode(props.user.zipCode);
		}
	};

	useEffect(() => {
		if (userID) {
			setUserData();
		} else {
			setMessage('Please login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userID]);

	const onFirstNameChangeHandler = (event) => {
		setFirstName(event.target.value);
	};
	const onLastNameChangeHandler = (event) => {
		setLastName(event.target.value);
	};
	const onPasswordChangeHandler = (event) => {
		setPassword(event.target.value);
	};
	const onAddLine1ChangeHandler = (event) => {
		setAddLine1(event.target.value);
	};
	const onAddLine2ChangeHandler = (event) => {
		setAddLine2(event.target.value);
	};
	const onCountryChangeHandler = (event) => {
		setCountry(event.target.value);
	};
	const onZipCodeChangeHandler = (event) => {
		setZipCode(event.target.value);
	};

	const userUpdateHandler = (event) => {
		event.preventDefault();
		const updatedUser = {
			firstName: firstName,
			lastName: lastName,
			password: password,
			addLine1: addLine1,
			addLine2: addLine2,
			country: country,
			zipCode: zipCode,
		};
		console.log(updatedUser);
		axios
			.patch('/api/user/' + userID, {
				...updatedUser,
			})
			.then((result) => {
				console.log(result.data);
				// props.addUser(result.data);
				dialogBox('User updated');
			})
			.catch((error) => {
				console.log(error);
				dialogBox('User not updated. Try again');
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
		setTimeout(() => {
			setShowDialogBox(false);
		}, 2000);
	};

	return (
		<div className={styles.settingsCard}>
			<h4 className={styles.settingsCardHeading}>Edit</h4>
			<form
				className={styles.settingsCardContainer}
				onSubmit={userUpdateHandler}
			>
				<div className={styles.nameDiv}>
					<label>
						First Name
						<input
							type='text'
							value={firstName}
							onChange={(event) => onFirstNameChangeHandler(event)}
						/>
					</label>
					<label>
						Last Name
						<input
							type='text'
							value={lastName}
							onChange={(event) => onLastNameChangeHandler(event)}
						/>
					</label>
				</div>
				<div className={styles.emailPasswordDiv}>
					<label>
						Email
						<input type='email' value={email} readOnly />
					</label>
					<label>
						Password
						<input
							type='password'
							value={password}
							onChange={(event) => onPasswordChangeHandler(event)}
						/>
					</label>
				</div>
				<div className={styles.addressDiv}>
					<label>
						Address Line 1
						<input
							type='text'
							value={addLine1}
							onChange={(event) => onAddLine1ChangeHandler(event)}
						/>
					</label>
					<label>
						Address Line 2
						<input
							type='text'
							value={addLine2}
							onChange={(event) => onAddLine2ChangeHandler(event)}
						/>
					</label>
				</div>
				<div className={styles.countryZipCodeDiv}>
					<label>
						Country
						<input
							type='text'
							value={country}
							onChange={(event) => onCountryChangeHandler(event)}
						/>
					</label>
					<label>
						Zip Code
						<input
							type='text'
							value={zipCode}
							onChange={(event) => onZipCodeChangeHandler(event)}
						/>
					</label>
				</div>
				<input type='submit' value='Save' />
			</form>
			<DialogBox showBox={showDialogBox}>{message}</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsCard);
