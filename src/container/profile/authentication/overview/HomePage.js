import React, { useCallback, useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Auth0Lock } from 'auth0-lock';
import { checkUsername, login } from '../../../../redux/authentication/actionCreator';
import { auth0options } from '../../../../config/auth0';
import { Main } from '../../../styled';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;



function HomePage() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    username: ""
  });

  useEffect(() => {
    if (formState.username.length >= 5) {
      dispatch(checkUsername(formState.username))
    }
  }, [formState.username])

  const storeres = useSelector(state => state.auth);

  function handleFormChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleSubmit = useCallback(() => {
    dispatch(login());
    history.push('/admin');
  }, [history, dispatch]);

  // const onChange = (checked) => {
  //   setState({ ...state, checked });
  // };

  lock.on('authenticated', authResult => {
    lock.getUserInfo(authResult.accessToken, error => {
      if (error) {
        return;
      }

      handleSubmit();
      lock.hide();
    });
  });

  const navigateToSignup = () => {

    const spacepattern = /\s/;
    const specialchar = /[\W_]+/

    
    if(spacepattern.test(formState.username))
    {
      message.error("Space isn't allowed in username");
    }
    else if(specialchar.test(formState.username))
    {
      message.error("No special character allowed");
    }
    else
    {
      history.push(`/register/${formState.username}`);
    }
  }
  return (
    <div>
      <div className="topheader">
        <div className='container'>
          <div className='logo'>
            <img src={require('../../../../static/images/logo.jpg')} alt='team' />
          </div>
          <Link to="/register" className='btn btnblack'>Claim Username</Link>
        </div>
      </div>

      <div className='heroarea'>
        <div className='container'>
          <div className='herosection'>
            <div className='taglinelist'>
            💰We Are Raising $1M <span>To Build The Most Credible Spiritual Network</span>
            </div>
            <div className='heroText'>
              <h1>Spiritual Network </h1>
              <div className='bannerSubText'>
                <span>for seekers</span>
                <span>for seekers</span>
                <span>for believers</span>
                <span>for mystics</span>
                <span>for philosophers</span>
                <span>for skeptics and agnostics</span>
              </div>
            </div>

            <div className='enternamebox'>
              <span className='smltitle'>
                Claim your username and request an invite before it&apos;s too late!
              </span>
              <div className='textboxmain'>
                <Form>
                    <span className='logoimg'><img src={require('../../../../static/images/faviconpng.png')} alt='' /></span><span>k4m2a.com/</span>
                    <Input placeholder="username" value={formState.username} name="username" onChange={handleFormChange} />

                  <>
                    {/* {(storeres.loading) &&
                      "Loading..."} */}

                    {(storeres.loading || storeres.isExist || formState?.username?.length < 5) &&
                      <Button className='btnsubmit disabled' onClick={navigateToSignup} disabled> <ArrowRightOutlined /></Button>}

                    {!(storeres.loading || storeres.isExist || formState?.username?.length < 5) &&
                      <Button className='btnsubmit' onClick={navigateToSignup}> <ArrowRightOutlined /></Button>}
                  </>
                </Form>
              
              </div>

              {formState?.username?.length < 5 &&
                <div className='errorbox red'>5 characters look better as username 🖐
                </div>
              }

              {!storeres.loading && storeres.isExist && formState?.username?.length >= 5 &&
                <div className='errorbox red'>Username already exist</div>
              }
            </div>

          </div>


        </div>
      </div>

      <div className='homecntarea'>
        <div className='container'>
          <h4>Not for Everyone</h4>
          <h1>Make life simpler, more pleasant and less productive.</h1>
        </div>
        <div className='columnarea'>
          <div className='container'>
            <Main className='backtransparent'>
              <Row gutter={25}>
                <Col xxl={12} lg={12} md={12} xs={24}>
                  <div className='columnbox'>
                    <div className='title2'>MADE FOR PEOPLE</div>
                    <div className='Maintitle'><span>NOT</span> BUILT</div>
                    <div className='title2'>FOR PRODUCTIVITY.</div>
                    <p>We recognize that your spiritual needs go beyond mere productivity.  That is why
                      everything we have crafted is dedicated to nurturing and supporting your unique spiritual journey.</p>
                    <img src={require('../../../../static/images/Not-For-Productivity.jpeg')} alt='img' />
                  </div>
                </Col>
                <Col xxl={12} lg={12} md={12} xs={24}>
                  <div className='columnbox'>
                    <div className='title2'>INTRODUCING</div>
                    <div className='Maintitle'><span>DWELL</span></div>
                    <div className='title2'>MODE</div>
                    <p>It allows you to engage and explore your favorite spiritual topic with undivided focus and concentration, allowing for a more profound and meaningful experience.</p>
                    <img src={require('../../../../static/images/Dwell-Mode-Meditation.jpeg')} alt='img' />
                  </div>
                </Col>
                <Col xxl={12} lg={12} md={12} xs={24}>
                  <div className='columnbox'>
                    <div className='title2'>BUILT WITH</div>
                    <div className='Maintitle'><span className='jomo'>JOMO</span> INSIDE</div>
                    {/* <div className='title2'>
                      </div> */}
                    <p>
                    We love joy-of missing-out, that is why everything here is built for a state of mind that is all about focusing on what you love and enjoy (minus the FOMO)
                    
                    </p>
                    <img src={require('../../../../static/images/JOMO.jpg')} alt='img' />
                  </div>
                </Col>
                <Col xxl={12} lg={12} md={12} xs={24}>
                  <div className='columnbox'>
                    <div className='title2'>EXCLUSIVE</div>
                    <div className='Maintitle'><span>INVITE</span> ONLY </div>
                    {/* <div className='title2'>
                      </div> */}
                    <p>
                      We are only looking only for people who are spiritual. Spirituality is subjective, you decide and declare if you are spiritual or not
                    </p>
                    <img src={require('../../../../static/images/INVITE-ONLY.jpeg')} alt='img' />
                  </div>
                </Col>
                <Col xxl={24} lg={24} md={24} xs={24}>
                  <div className='columnbox flexcolumn'>
                    <div className='columnboxtext'>
                      <div className='title2'>SHARE YOUR</div>
                      <div className='Maintitle'><span>INCREDIBLE</span> SPIRITUAL <span>EXPERIENCES</span> </div>
                      <div className='title2'>Your Way</div>
                    </div>
                    <div className='columnimgbox'>
                      <img src={require('../../../../static/images/share-your-incredible-spiritual-experiences-your-way.jpg')} alt='img' />
                    </div>
                  </div>
                </Col>
              </Row>
            </Main>
          </div>
        </div>
      </div>

      <div className='footersection'>
        <div className='container'>
          <div className='footerlogo'>
            <img src={require('../../../../static/images/logo_white_03.png')} alt='' />
          </div>
          <div className='footerlinks'>
            {/* <ul>
              <li><a href='#'>Scroll</a></li>
              <li><a href='#'>People</a></li>
              <li><a href='#'>Companies</a></li>
              <li><a href='#'>Jobs</a></li>
              <li><a href='#'>Projects</a></li>
            </ul> */}
            <ul className='termslink'>
              <li><Link to="/codeofconduct">Code of Conduct</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/tnp">Terms &amp; Conditions</Link></li>
            </ul>
            <div className='copyright'>
              <p>&copy; 2023 • K4M2A • v0.1</p>
            </div>
          </div> 
        </div>
      </div>

    </div>
  );
}

export default HomePage;
