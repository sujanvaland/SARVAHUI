/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../static/css/settingstyle.scss';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Form, Input, Radio, message, } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { MessageMainBox, MessageMainBoxInner } from '../style';
import { changePassword, deactivateUserAccount } from '../../../redux/profile/actionCreator';


const Account = () => {

  const {history} = useHistory();  
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("profile"))
  const { data } = useSelector(
    (state) => {
      return {
        data: state.userProfile.getProfile,
      };
    },
  );

  const [showPassChange, setShowPassChange] = useState(false);
  const [showDeactivateAcc, setShowDeactivateAcc] = useState(false);

  const ChangeStep = (step) => {
    setShowPassChange(false);
    setShowDeactivateAcc(false);
    switch (step) {
      case 'PassChange':
        setShowPassChange(true);
        break;
      case 'DeactivateAcc':
        setShowDeactivateAcc(true);
        break;
      default:
        break;
    }
  };

  const [userinfo, setUserInfo] = useState({
    currentpassword: '',
    newpassword: '',
    confirmnewpassword: '',
  });

  const handleSaveClick = () => {
    console.log(userinfo);
    if (userinfo.newpassword === userinfo.confirmnewpassword) {
      dispatch(changePassword(userinfo));
    } else {
      message.error(`Confrim Password doesn't match!`)
    }
  }

  const [passwordError, setPasswordError] = useState({
    currentpassword: '',
    newpassword: '',
    confirmnewpassword: '',
  });

  const validatePassword = (field, value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (passwordRegex.test(value)) {
      setPasswordError((prevErrors) => ({ ...prevErrors, [field]: '' }));
      return Promise.resolve();
    }
    setPasswordError((prevErrors) => ({
      ...prevErrors,
      [field]: 'Password should contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.',
    }));
    return Promise.reject();
  };



  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [deactivate, setDeactivate] = useState({
    timeperiod: '',
  });

  const deactivateAccount = () => {
    dispatch(deactivateUserAccount(deactivate, history));
  };

  const onChange = (e) => {
    setDeactivate(e.target.value);
    setIsRadioSelected(true);
  };

  return (
    <>
      {!showPassChange && !showDeactivateAcc &&

        <div className='settingBox'>
          <div className='settingsheader'>
              <h2>Your Account</h2>
            </div>
          <div className='settingcntbox'>
            
            <div>
              <p>
                See information about your account, download an archive of your data,
                or learn about your account deactivation options </p>
            </div>
          <div>
            <ul>
              <li>
                <Link to="#" onClick={() => ChangeStep('PassChange')}><span><i className="fi fi-rr-lock" /> Change your password </span><svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" /> </g></svg></Link>
              </li>
              <li>
                <Link to="#" onClick={() => ChangeStep('DeactivateAcc')}><span><i className="fi fi-rs-heart-crack" />Deactivate your account</span> <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" /> </g></svg></Link>
              </li>
            </ul>
          </div>
          </div>
        </div>

      }
      {showPassChange &&
        <>
          <div className='settingBox'>
          <div className='settingsheader'>
          <Link to="#" onClick={() => setShowPassChange(false)} ><ArrowLeftOutlined /> </Link>
                <h2>Change your password</h2>
            </div>
          <div className='settingcntbox'>              
              <div className='formMain'>
                <Form name="register" onFinish={handleSaveClick} layout="vertical">
                  <ul>
                    <li>
                      <Form.Item
                        label=""
                        name="currentpassword"
                        rules={[
                          { required: true, message: 'Current Password required' },
                        ]}
                        validateStatus={passwordError.currentpassword ? 'error' : ''}
                        help={passwordError.currentpassword}
                      >
                        <Input type="password" placeholder="Current Password" value={userinfo.currentpassword}
                          onChange={(e) => {
                            setUserInfo({ ...userinfo, currentpassword: e.target.value });
                            setPasswordError((prevErrors) => ({ ...prevErrors, currentpassword: '' }));
                          }} required />
                      </Form.Item>
                      <Link to="#">Forgot password?</Link>
                    </li>
                    <li>
                      <Form.Item
                        label=""
                        name="newpassword"
                        rules={[
                          { required: true, message: 'Password required' },
                          { validator: (field, value) => validatePassword('newpassword', value) },
                        ]}
                        validateStatus={passwordError.newpassword ? 'error' : ''}
                        help={passwordError.newpassword}
                      >
                        <Input type="password" placeholder="New Password" value={userinfo.newpassword}
                          onChange={(e) => {
                            setUserInfo({ ...userinfo, newpassword: e.target.value });
                            setPasswordError((prevErrors) => ({ ...prevErrors, newpassword: '' }));
                          }} required />
                      </Form.Item>
                      <Form.Item
                        label=""
                        name="confirmnewpassword"
                        rules={[
                          { required: true, message: 'Password required' },
                          { validator: (field, value) => validatePassword('confirmnewpassword', value) },
                        ]}
                        validateStatus={passwordError.confirmnewpassword ? 'error' : ''}
                        help={passwordError.confirmnewpassword}
                      >
                        <Input type="password" placeholder="Confirm Password" value={userinfo.confirmnewpassword}
                          onChange={(e) => {
                            setUserInfo({ ...userinfo, confirmnewpassword: e.target.value });
                            setPasswordError((prevErrors) => ({ ...prevErrors, confirmnewpassword: '' }));
                          }} required />
                      </Form.Item>
                    </li>
                    <li>
                      <p>
                        Changing your password will log you out of all your active SARVAH sessions except the one you’re using at this time.
                        The <Link to="#">applications</Link> with access to your account won’t be affected.<Link to="#"> Learn more</Link>
                      </p>
                    </li>
                    <li className='flexend'>
                      <Button htmlType='submit' className="btnBlack btnrounded"
                        disabled={userinfo.newpassword !== userinfo.confirmnewpassword}>Save</Button>
                    </li>
                  </ul>

                </Form>
              </div>
            </div>
          </div>
        </>
      }
      {showDeactivateAcc &&
        <>
          
          <div className='settingBox'>
          <div className='settingsheader'>
          <Link to="#" onClick={() => setShowDeactivateAcc(false)}><ArrowLeftOutlined /> </Link>
                <h2>Deactivate your account</h2>
            </div>
          <div className='settingcntbox'>   
             
              <div>
                <MessageMainBox>
                  <MessageMainBoxInner>
                    <div>
                      <div className="userPic" >
                        <span className='userimg'>{User?.profileImg?.length > 10 ? <img src={User.profileImg} alt='' /> : <img src={require('../../../static/images/img_userpic.jpg')} alt='' />}</span>
                      </div>
                    </div>
                    <div className="nameMsgBox">
                      <div className="namedtls flexrow">
                        <div className='flexcolumn'>
                          {`${User?.firstName} ${User?.lastName}`}
                          <span>{`@${User?.userName}`}</span>
                        </div>
                        {data?.isPremium && <img src={require('../../../static/images/blue_tick.png')} className="blueTick" alt="" />}
                      </div>
                    </div>

                  </MessageMainBoxInner>
                </MessageMainBox>
              </div>
              <div className='formMain decativate'>
                <ul>
                  <li>
                    <h2>This will deactivate your account</h2>
                    <p>You’re about to start the process of deactivating your SARVAH account.
                      Your display name, @username, and public profile will no longer be viewable on sarvah.com.
                      </p>
                  </li>
                  <li>
                    <h2>What else you should know</h2>
                    <p>You can restore your SARVAH account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.</p>
                  </li>
                  <li>
                    <h4>Reactivation period</h4>
                    <Radio.Group onChange={onChange} value={deactivate}>
                      <Radio value={1}>30 days</Radio>
                      <Radio value={2}>12 months</Radio>
                    </Radio.Group>
                  </li>
                  <li>
                    <p>Some account information may still be available in search engines, such as Google or Bing.
                      <Link to="#">Learn more</Link></p>
                  </li>
                  <li>
                    <p>If you just want to change your @username, you don’t need to deactivate your account — edit it in your
                      <Link to="#">settings</Link>.</p>
                  </li>
                  <li>
                    <p>To use your current @username or email address with a different SARVAH account,
                      <Link to="#">change them</Link> before you deactivate this account.</p>
                  </li>
                  <li>
                    <p>If you want to download <Link to="#">your SARVAH data</Link>,
                      you’ll need to complete both the request and download process before deactivating your account.
                      Links to download your data cannot be sent to deactivated accounts.</p>
                  </li>
                  <li className='deactivatelink'> <Link to="#" onClick={deactivateAccount}
                    value={deactivate.timeperiod} disabled={!isRadioSelected}>Deactivate</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </>
      }
    </>
  );
};

export default Account;
