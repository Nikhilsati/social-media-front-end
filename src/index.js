import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import Store from './store/Store';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={Store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
