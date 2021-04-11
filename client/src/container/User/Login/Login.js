import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import axios from '../../../axiosInstance';
import { USER_LOGIN } from '../../../store/action/actions';
import DialogBox from '../../../components/UI/DialogBox/DialogBox';

// To get USER state
// const mapStateToProps = (state) => {
// 	return {
// 		user: state.user,
// 	};
// };

const mapDispatchToProps = (dispatch) => {
	return {
		userLogin: (user) => dispatch({ type: USER_LOGIN, payload: user }),
	};
};

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({
		message: '',
	});
	const [showDialogBox, setShowDialogBox] = useState(false);

	const loginHandler = async (event) => {
		// prevent default page reload
		event.preventDefault();
		const userData = {
			email: email,
			password: password,
		};
		await axios
			.post('/api/user/login', userData)
			.then((response) => {
				const user = { ...response.data };
				// save user in redux state
				props.userLogin(user);
				// reset form
				setEmail('');
				setPassword('');
				// redirect to the page user came to login
				props.history.go(-1);
			})
			.catch((err) => {
				setError({ message: err.response.data.error.message });
				// reset form
				setEmail('');
				setPassword('');
				setShowDialogBox(true);
				setTimeout(() => {
					setShowDialogBox(false);
				}, 2000);
			});
	};

	return (
		<main className={styles.page}>
			<div className={styles.logInCard}>
				<h2 className={styles.logInHeading}>
					Hello, Welcome to <span>e</span>
				</h2>
				<form className={styles.form} onSubmit={(event) => loginHandler(event)}>
					<label>
						Email
						<input
							type='email'
							name='loginId'
							placeholder='Login ID/Email...'
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							placeholder='Password...'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required
						/>
					</label>
					<Link to='#'>Forget Password?</Link>
					<input type='submit' value='Login' />
				</form>
				<div className={styles.RegisterDiv}>
					<p className={styles.RegisterPara}>
						New to <span>e</span>
					</p>
					<Link
						className={styles.RegisterBtn}
						to={{
							pathname: '/register',
							// state: { goBackFunc: () => props.history.goBack().caller },
						}}
					>
						Create an account
					</Link>
				</div>
			</div>
			<DialogBox showBox={showDialogBox}>{error.message}</DialogBox>
		</main>
	);
};

export default connect(null, mapDispatchToProps)(Login);
