import { Link } from 'react-router-dom';
import styles from './LoginRegister.module.css';

const LoginRegister = (props) => {
	const pathName = props.match.path;

	let card;
	if (pathName === '/login') {
		card = (
			<div className={styles.logInCard}>
				<h2 className={styles.logInHeading}>
					Hello, Welcome to <span>e</span>
				</h2>
				<form className={styles.form}>
					<label>
						Email
						<input
							type='email'
							name='loginId'
							placeholder='Login ID/Email...'
							required
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							placeholder='Password...'
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
					<Link className={styles.RegisterBtn} to='/register'>
						Create an account
					</Link>
				</div>
			</div>
		);
	} else {
		card = (
			<div className={styles.logInCard}>
				<h2 className={styles.logInHeading}>
					Hello, Welcome to <span>e</span>
				</h2>
				<h4>Create an account</h4>
				<form className={styles.form}>
					<label>
						Your Name
						<input type='text' name='name' placeholder='Your Name' required />
					</label>
					<label>
						Email ID
						<input
							type='email'
							name='emailId'
							placeholder='Email Id'
							required
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							placeholder='Password'
							required
						/>
					</label>
					<input type='submit' value='Register' />
				</form>
			</div>
		);
	}

	return <main className={styles.page}>{card}</main>;
};

export default LoginRegister;
