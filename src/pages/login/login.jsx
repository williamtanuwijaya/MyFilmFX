import React from "react";
import InputTextMessage from "../../components/text-field/inputTextField";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';




function HalamanLogin() {
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <InputTextMessage 
          id="Username"
          label="User Name"
          variant="outlined"
          fullwidth
          required
          margin="normal"
          autofocus
          name="username"
          type="text"
        />
        
        <InputTextMessage
          id="password"
          label="Password"
          variant="outlined"
          fullwidth
          required
          margin="normal"
          autofocus
          name="password"
          type="password"
        />
        </Container>
      </React.Fragment>
    );
  
}

export default HalamanLogin;




