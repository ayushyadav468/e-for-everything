import { connect } from 'react-redux';
import axios from '../../../axiosInstance';
import { useState, useEffect } from 'react';
import styles from './UserSettingsCard.module.css';
import DialogBox from '../../UI/DialogBox/DialogBox';
import { ADD_USER } from '../../../store/action/actions';

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
	const [address, setAddress] = useState('');
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
		if (props.user.address !== '') {
			setAddress(props.user.address);
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
	const onAddressChangeHandler = (event) => {
		setAddress(event.target.value);
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
			address: address,
			country: country,
			zipCode: zipCode,
		};
		axios
			.patch('/api/user/' + userID, {
				...updatedUser,
			})
			.then((result) => {
				props.addUser(result.data);
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

	let content;
	if (userID) {
		content = (
			<>
				<h2 className={styles.heading}>User settings</h2>
				<div className={styles.settingscontainer}>
					<h4 className={styles.settingsCardHeading}>Edit</h4>
					<form className={styles.settingsForm} onSubmit={userUpdateHandler}>
						<div className={styles.nameDiv}>
							<label>
								First Name
								<input
									type='text'
									required
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
									required
									onChange={(event) => onPasswordChangeHandler(event)}
								/>
							</label>
						</div>
						<div className={styles.addressDiv}>
							<label>
								Address
								<textarea
									type='text'
									value={address}
									onChange={(event) => onAddressChangeHandler(event)}
									rows='3'
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
			</>
		);
	} else {
		content = (
			<>
				<h2 className={styles.heading}>Please Login</h2>
			</>
		);
	}

	return <div className={styles.settingsCard}>{content}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsCard);
