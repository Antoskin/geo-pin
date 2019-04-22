import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { GoogleLogin } from 'react-google-login';
import { GraphQLClient } from 'graphql-request';
// import Typography from "@material-ui/core/Typography";

const clientId='610206240128-8v62hvorsentppdeva5366e415ke30j8.apps.googleusercontent.com';

const Login = ({ classes }) => {

  const onSuccess = success => {
    const token = success.getAuthResponse().id_token;

    const client = new GraphQLClient('http://localhost:4000/', {
      headers: { authorization: token }
    })
  };

  return <>
    <GoogleLogin 
      clientId={clientId} 
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  </>
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
