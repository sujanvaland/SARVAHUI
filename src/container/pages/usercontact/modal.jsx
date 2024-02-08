// GoogleLoginComponent.js
import React from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { storeUserContacts } from '../../../redux/usercontacts/actionCreator';


const TempGoogleLoginComponent = () => {

  const dispatch = useDispatch();

  // const { userContacts } = useSelector((state) => ({
  //   userContacts: state?.UserContacts
  // }));

  // console.log(userContacts)

  const getPeopleData = async (accessToken) => {
    try {
      console.log('access token', accessToken);

      const apiUrl = 'https://people.googleapis.com/v1/people/me/connections?personFields=names,phoneNumbers,photos';

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);

      const userContactsList = response.data.connections.map((contact) => {
        return {
          uniqueId: contact.names?.[0]?.metadata.source.id,
          firstName: contact.names?.[0]?.givenName || '',
          lastName: contact.names?.[0]?.familyName || '',
          fullName: contact.names?.[0]?.displayName || '',
          phoneNumber: contact.phoneNumbers?.[0]?.canonicalForm,
          photo: contact.photos?.[0]?.url,
          email:""
        };
      });

      console.log("userContactsList", userContactsList);

      dispatch(storeUserContacts(userContactsList))

      // Handle people data
    } catch (error) {
      console.error('Error fetching people', error);
    }
  };

  const responseGoogle = (response) => {
    if (response.accessToken) {
      getPeopleData(response.accessToken);
    }
  };

  console.log(responseGoogle);

  const scope = 'https://www.googleapis.com/auth/contacts.readonly';

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        scope={scope}
      />
    </div>
  );
};

export default TempGoogleLoginComponent;
