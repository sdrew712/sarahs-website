import '../styles/globals.css'
import '../styles/bongo-cat.scss'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a5ea9b",
    },
    secondary: {
      main:"#7ed1e2",
    },
    tertiary: {
      main:"#cebbff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
