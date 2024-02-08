import React from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

console.log(window.location.origin);



const LinkedInLoginComponent = () => {

    // const onSuccessHandle = (res) => {
    //     console.log('onSuccessHandle..........', res)
    // }

    const { linkedInLogin } = useLinkedIn({
      clientId: '774aup9cjmhqo0',
      redirectUri: 'http://localhost:3000/linkedin',
      scope:['openid','profile','w_member_social','email','r_learningdata'],
      // redirectUri: `${window.location.origin}/linkedin/`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
      onSuccess: (code) => {
        console.log(code);
      },
      onError: (error) => {
        console.log(error);
      },
    });

  const handleLinkedInLogin = () => {
    // Replace YOUR_LINKEDIN_CLIENT_ID and REDIRECT_URI with your actual values
    const clientId = '774aup9cjmhqo0';
    const redirectUri = 'http://localhost:3000/'; // Set this to your app's redirect URI

    // Build the authorization URL
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid%20profile%20w_member_social%20email%20r_learningdata`;

    // Redirect the user to the LinkedIn authorization page
    window.location.href = authUrl;
  };

  return (
    
    <>
    
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
     */}
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Sign in with Linked In"
        style={{ maxWidth: '180px', cursor: 'pointer' }}
      />
      <div>
        <button type="button" onClick={handleLinkedInLogin}>
          Sign In with LinkedIn
        </button>
      </div>
    </>
  );
};

export default LinkedInLoginComponent;
