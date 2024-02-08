import React, { useEffect, useRef } from 'react';
import GoogleLogin from 'react-google-login';

const TrialComponent = () => {
  const accessToken = useRef(null);

  useEffect(() => {
    console.log("access token",accessToken)
  }, [accessToken]);

  const handleSuccess = (res) => {
    // accessToken = res.accessToken;
    accessToken.current = res.accessToken

    const apiUrl = 'https://people.googleapis.com/v1/people/me/connections?personFields=names'

    fetch(apiUrl,{
        method: "POST",
        headers: new Headers({'Authorization' : `Bearer ${  res.accessToken}`})
    }).then((res) => {
        console.log("response from people api", res)
    })

    console.log(res);
  };

  const handleFailure = (err) => {
    console.log(err);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Import contacts"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      />
      Hello world
    </>
  );
};

export default TrialComponent;
