import React  from 'react';
import { GiftOutlined,StarOutlined, ShareAltOutlined } from '@ant-design/icons'; 
 import { Link } from 'react-router-dom';

function Invitefriend() {
  return (
    <>
   <div className='cntpagecomponent'> 
              <div className='centersidebarcontent flexcolumn'>
                  
                 fsd
              
              </div>          
              <div className='rightsidebarcntbox'>  
                  
              <div className='rightsidecntbox invittess'>
                    <div className='analyticsBox'>
                          <h5 className='subtitlebox'> 
                          <span><Link to="">Your invite stats</Link></span>  
                          </h5>
                          <div className='maincountbox'>
                            <ul>
                              <li>
                                <span className='countnum'>
                                  0
                                </span>
                                Visited invite link
                              </li>
                              <li>
                                <span className='countnum'>
                                  0
                                </span>
                                Joined Peerlist
                              </li>
                              <li>
                                <span className='countnum'>
                                  0
                                </span>
                                Verified Profiles
                              </li>
                            </ul>
                          </div>
                    </div>
                    <div className='analyticsBox mt-4'>
                          <h5 className='subtitlebox'> 
                          <span><Link to="">How it works?</Link></span>  
                          </h5>
                          <div className='workslits'>
                              <ul className='listItemsbox rolebox'>
                                  <li>
                                    <div className='headbpx'>
                                      <div className='imgmaindiv'>
                                        <div>
                                              <ShareAltOutlined />                     
                                        </div>                           
                                      </div>
                                      <div className='rolesdetails namedetails '>                          
                                          <h6 className='profilename'>Share your invite link
                                            <span>Share your invite link with your friends & colleagues on other social platforms to unlock perks.</span>
                                          </h6>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className='headbpx'>
                                      <div className='imgmaindiv'>
                                        <div>
                                            <StarOutlined />    
                                        </div>                           
                                      </div>
                                      <div className='rolesdetails namedetails '>                          
                                          <h6 className='profilename'>Your friends joins Peerlist
                                            <span>Your friends joins Peerlist and verify their profile by verifying work experience and/or education.</span>
                                          </h6>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className='headbpx'>
                                      <div className='imgmaindiv'>
                                        <div>
                                              <GiftOutlined />                     
                                        </div>                           
                                      </div>
                                      <div className='rolesdetails namedetails '>                          
                                          <h6 className='profilename'>Unlock perks!
                                            <span>As a gesture of gratitude, we will be sending you a gift upon completing each step!</span>
                                          </h6>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                          </div>
                    </div>

                    <div className='analyticsBox mt-4'>
                          <h5 className='subtitlebox'> 
                            <span><Link to="">Share invite link</Link></span>  
                          </h5>
                          <Link to="" className="btncircle"> <ShareAltOutlined />           </Link>
                    </div>
                </div>
                
               


              
              </div>                
            </div> 
    </>
  );
}

export default Invitefriend;
