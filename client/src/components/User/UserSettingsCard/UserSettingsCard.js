import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import axios from '../../../axiosInstance';
import styles from './UserSettingsCard.module.css';
import DialogBox from '../../UI/DialogBox/DialogBox';
import { ADD_USER } from '../../../store/action/actions';
import ConfirmPassword from '../../ConfirmPassword/ConfirmPassword';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (userData) => dispatch({ type: ADD_USER, payload: userData }),
	};
};

const UserSettingsCard = (props) => {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [country, setCountry] = useState('');
	const [zipCode, setZipCode] = useState('');

	const [message, setMessage] = useState('');
	const [showDialogBox, setShowDialogBox] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	// check if user is logged in
	const isLoggedIn = props.userState.isLoggedIn;
	let userData;
	if (isLoggedIn && Object.keys(props.userState.userData) !== 0) {
		userData = props.userState.userData;
	}

	const setUserData = () => {
		if (userData.firstName !== '') {
			setFirstName(userData.firstName);
		}
		if (userData.lastName !== '') {
			setLastName(userData.lastName);
		}
		if (userData.email !== '') {
			setEmail(userData.email);
		}
		if (userData.address !== '') {
			setAddress(userData.address);
		}
		if (userData.country !== '') {
			setCountry(userData.country);
		}
		if (userData.zipCode !== '') {
			setZipCode(userData.zipCode);
		}
	};

	useEffect(() => {
		if (isLoggedIn) {
			setUserData();
		}
		// clean up function
		return () => {
			setEmail('');
			setFirstName('');
			setLastName('');
			setPassword('');
			setAddress('');
			setCountry('');
			setZipCode('');
		};
	}, [userData]);

	const onFirstNameChangeHandler = (event) => {
		setFirstName(event.target.value);
	};
	const onLastNameChangeHandler = (event) => {
		setLastName(event.target.value);
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
	const passwordConfirmHandler = (event) => {
		setPassword(event.target.value);
	};

	const confirmHandler = (event) => {
		event.preventDefault();
		setShowConfirmPassword(true);
	};

	const onSaveBtnClicked = () => {
		setShowConfirmPassword(false);
		userUpdateHandler();
	};

	const onCancelBtnClicked = () => {
		setShowConfirmPassword(false);
	};

	const userUpdateHandler = () => {
		const updatedUser = {
			firstName: firstName,
			lastName: lastName,
			password: password,
			address: address,
			country: country,
			zipCode: zipCode,
		};
		const token = props.userState.token;
		axios({
			method: 'PATCH',
			url: `/api/auth/user/update`,
			headers: {
				'content-type': 'application/json',
				'auth-token': token,
			},
			data: { ...updatedUser },
		})
			.then((response) => {
				if (response.status === 200) {
					props.addUser(response.data);
					dialogBox('User updated');
				} else {
					console.log(response.data?.error.message);
					dialogBox('User not updated. Try again');
				}
			})
			.catch((error) => {
				console.log(error.response.data?.error.message);
				dialogBox('User not updated. Try again');
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
	};

	let content;
	if (isLoggedIn) {
		content = (
			<>
				<h2 className={styles.heading}>User settings</h2>
				<div className={styles.settingscontainer}>
					<h4 className={styles.settingsCardHeading}>Edit</h4>
					<form className={styles.settingsForm} onSubmit={confirmHandler}>
						<div className={styles.nameDiv}>
							<label>
								First Name
								<input
									type='text'
									required
									value={firstName}
									onChange={onFirstNameChangeHandler}
								/>
							</label>
							<label>
								Last Name
								<input
									type='text'
									value={lastName}
									onChange={onLastNameChangeHandler}
								/>
							</label>
						</div>
						<div className={styles.emailDiv}>
							<label>
								Email
								<input type='email' value={email} readOnly />
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

	return (
		<>
			<ConfirmPassword
				passwordConfirmHandler={passwordConfirmHandler}
				saveBtnClicked={() => onSaveBtnClicked()}
				cancelBtnClicked={() => onCancelBtnClicked()}
				show={showConfirmPassword}
			/>
			<div className={styles.settingsCard}>{content}</div>
			<DialogBox showBox={showDialogBox} setShowDialogBox={setShowDialogBox}>
				{message}
			</DialogBox>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsCard);
