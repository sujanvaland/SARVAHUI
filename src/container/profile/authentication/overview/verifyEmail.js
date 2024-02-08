import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyEmailParam } from '../../../../redux/authentication/actionCreator';


function VerifyEmailComponents() {

  const dispatch = useDispatch();
  const { otp, userid } = useParams();

  useEffect(() => {
    if (otp !== '0') {
      try {
        const plainotp = window.atob(otp);
        const plainuserid = window.atob(userid);
        const obj = {
          encryptedOtp: plainotp,
          encryptedUserId: plainuserid,
        };
        dispatch(VerifyEmailParam(obj));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const verified = useSelector((state) => state.auth.isVerified);

  return (
    <>
      <div>
        <div className="signupStepsMain">
          <div className="signuplayerBox">
            <div className="signupLeftBox">
              <div className="signuplogo">
                <img src={require('../../../../static/images/logowhite.png')} alt="" />
              </div>
              <img src={require('../../../../static/images/1.jpg')} alt="" />
            </div>
            <div className="signupRightBox">
              <div className="innernav">
                <ul>
                  <li className="active">Verify Email</li>
                </ul>
              </div>
              {!verified?.success && (
                <>
                  <div className="signUpcntBoxmain thankyou  ">
                    <div className="signUpcntBox">
                      <h3>Verifying Your Email</h3>
                      <h4>You will need to verify your email to complete registration</h4>
                      <div className="verifyimgbox">
                        <img src={require('../../../../static/images/imgverify.jpg')} alt="" />
                      </div>
                      <p>
                        An email has been sent to with a link to verify your account. If you have not received the email
                        after a few minutes, please check your spam folder
                      </p>
                      <div className="twobuttonsbox">
                        <Link to="" className="btnLearnmore">
                          Contact Support
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {verified?.success && (
                <>
                  <div className="signUpcntBoxmain thankyou  ">
                    <div className="signUpcntBox">
                      <h3> Email Verified</h3>
                      <div className="verifyimgbox">
                        <img src={require('../../../../static/images/imgverify.jpg')} alt="" />
                      </div>
                      <p>
                        Congratulations! You&apos;ve successfully verified your email. You&apos;re now all set to sign in and
                        explore everything our platform has to offer. Welcome to k4m2a 🎉
                      </p>
                      <div className="twobuttonsbox">
                        <Link to="/" className="btnLearnmore btnresend mr15">
                          SignIn Now
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmailComponents;
