import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = (props) => {
	return (
		<main className={styles.page}>
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
		</main>
	);
};

export default Login;
