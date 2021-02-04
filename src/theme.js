import { createMuiTheme } from '@material-ui/core';
const theme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			// main: '#0296dc',
			// dark: '#0a82bf'
			main: '#fb9416',
		},
		secondary: {
			main: '#097fd2',
			dark: '#006dbb'
		},
		error: {
			main: '#ce181e'
		},
		warning: {
			main: '#f47721'
		},
		info: {
			main: '#00a78e'
		},
		success: {
			main: '#7ac143'
		}
	},
	typography: {
		fontFamily: 'Montserrat'
	}
});

export default theme;
