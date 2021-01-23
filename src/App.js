import './App.css';
import { makeStyles } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import Paper from './components/paper/Paper';
import Header from './components/header/Header';
import SignUp from './pages/login/Login';
import { login, register } from './services/auth.service';

const useStyles = makeStyles({
	root: {
		// backgroundColor: "black"
	}
});

function App() {
	const classes = useStyles();
	// login('deevdnd981@gmail.com', '1223243244');
	register({
		name: 'nikhil sati',
		email: 'nikhil121sati@gmail.com',
		password: '123456789',
		DOB: new Date(),
		mobile: 8126474916
	});
	return (
		<div className={classes.root}>
			<Header />
			<header className="App-header">
				<SignUp />
			</header>
		</div>
	);
}

export default App;
