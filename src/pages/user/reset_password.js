import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'

import FormPasswordReset from '../../components/password_reset/FormPasswordReset'
import './reset.css'

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

function App() {
  return (
    <div className="App">
      <FormPasswordReset />
    </div>
  )
}

function Reset() {
    return (
<MuiThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>
    )
}

export default Reset;