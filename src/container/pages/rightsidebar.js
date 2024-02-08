
import React from 'react';
import { Link } from 'react-router-dom';
// import GoogleContacts from 'react-google-contacts';
import TempGoogleLoginComponent from './usercontact/modal';
// import TrialComponent from './usercontact/trial';

function RightSideBarComponent(){
    // const responseCallback = (response) => {
    //   console.log(response);
    // }
   
    return (
      
        <div className='rightsidebarcntbox'>

        <h1>
          <TempGoogleLoginComponent />
        </h1>


        <div className='rightsidecntbox scrollbox'>

          {/* <TrialComponent />
          

          <GoogleContacts
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Import"
            onSuccess={responseCallback}
            onFailure={responseCallback}
          />, */}
          <div className='analyticsBox subscribe'>
            <h3>Support Your Spiritual Journey</h3>
            <p>We build and sustain K4M2A without any external funding. Your support helps keep the spirit alive.</p>
            <Link to="/">Donate to Support</Link>
          </div>
          <div className='analyticsBox whappning'>
            <h3>What’s Trending</h3>
            <ul>
              <li>
                <p>Event · Trending</p>
                <div className='tagsbo'>
                Spiritual New Year 2024
                </div>
                <p className='postcount'>21.5K posts</p>
              </li>
              <li>
                <p>Retreat · Trending</p>
                <div className='tagsbo'>
                Yoga Retreat San Francisco
                </div>
                <p className='postcount'>1.5K posts</p>
              </li>
              <li>
                <p>Research · Trending</p>
                <div className='tagsbo'>
                Water Has Memory
                </div>
                <p className='postcount'>2.5K posts</p>
              </li>
            </ul>
            <Link to="/" className="btnshowmore">Show more</Link>
          </div>

          <div className='analyticsBox'>
            <h3>Who to follow</h3>
            <ul className='listItemsbox'>
              <li>
                <div className='headbpx'>
                  <div className='imgmaindiv'>
                    <div className='imgDesc'>
                      <div className='imgdiv'>
                        <img src={require('../../static/images/user_alena.jpeg')} alt='' />
                      </div>
                      <div className='namedetails'>
                        <h6 className="profilename">
                        Alena Hall <span className='greentickicon'><img src={require('../../static/images/icon_check.png')} alt='' /></span>
                          <span>@alenahall</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <Link to="" className="btn btnblack btnfollow">Follow</Link>
                </div>

                <div className='userinfoBox'>
                  <div className='headbpx'>
                    <div className='imgmaindiv'>
                      <div className='imgdiv'>
                        <img src={require('../../static/images/user_alena.jpeg')} alt='' />
                      </div>
                    </div>
                    <div className='rightbtns'>
                      <Link to="" className="btn btnblack btnfollow">Follow</Link>
                    </div>
                  </div>
                  <div className='namedetails'>
                    <h6 className="profilename">
                    Alena Hall<div className='greentickicon'><img src={require('../../static/images/icon_check.png')} alt='' /></div>
                      <span>@alenahall</span>
                    </h6>
                    <p>Front End Developer, Working Towards Full Stack and Web 3. Photography and Writing make me productive . Delhi,India.</p>
                    <div className='followers'>
                      <Link to=""><span>20</span> Following</Link><Link to=""><span>20</span> Followers</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='headbpx'>
                  <div className='imgmaindiv'>
                    <div className='imgDesc'>
                      <div className='imgdiv'>
                        <img src={require('../../static/images/user_abraham.jpeg')} alt='' />
                      </div>
                      <div className='namedetails'>
                        <h6 className="profilename">
                        Abraham Green<span className='greentickicon'><img src={require('../../static/images/icon_check.png')} alt='' /></span>
                          <span>@abrahamgreen</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <Link to="" className="btn btnblack btnfollow">Follow</Link>
                </div>

                <div className='userinfoBox'>
                  <div className='headbpx'>
                    <div className='imgmaindiv'>
                      <div className='imgdiv'>
                        <img src={require('../../static/images/user_abraham.jpeg')} alt='' />
                      </div>
                    </div>
                    <div className='rightbtns'>
                      <Link to="" className="btn btnblack btnfollow">Follow</Link>
                    </div>
                  </div>
                  <div className='namedetails'>
                    <h6 className="profilename">
                      Abraham Green<div className='greentickicon'><img src={require('../../static/images/icon_check.png')} alt='' /></div>
                      <span>@abrahamgreen</span>
                    </h6>
                    <p>Front End Developer, Working Towards Full Stack and Web 3. Photography and Writing make me productive . Delhi,India.</p>
                    <div className='followers'>
                      <Link to=""><span>20</span> Following</Link><Link to=""><span>20</span> Followers</Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='footerLinks'>
            <Link to='/tos'>Terms of Service</Link>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/cookie'>Cookie Policy</Link>
            <Link to='/access'>Accessibility</Link>
            <Link to='/ads'>Ads info</Link>
            <p>&copy; 2023 • K4M2A • v0.1</p>
          </div>
        </div>
      </div>
    )
}

export default RightSideBarComponent;