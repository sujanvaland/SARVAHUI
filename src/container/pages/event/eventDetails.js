
import React from 'react';
import { Button, Input } from 'antd';
import {FieldTimeOutlined, VideoCameraOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function EventDetailsComponent() {

    return (
        <div className='rightsidebarcntbox '>
            <div className='rightsidecntbox scrollbox eventDetailsbox'>
                <div className='header'>
                    <h2><span>Hosted by</span> Subhash Trivedi <img src={require('../../../static/images/blue_tick.png')} alt=""/></h2>
                    <div>
                    <Button > free</Button>
                    <Button className='btnBlack'> Attend </Button>
                    </div>

                </div>
                <h3>The Purpose of Life in Buddhism</h3>
                
                <div className='analyticsBox subscribe whitebox'> 
                    <div className='boxOne'>
                        <div className='iconBox'>
                        <FieldTimeOutlined />
                        </div>
                        <p>Thursday, December 21, 2023 at 6:30
                            PM to Thursday, December 21, 2023 at 7:30 PM IST</p>
                            
                    </div>
                    <div className='boxOne'>
                    <div className='iconBox'>
                        <VideoCameraOutlined />
                    </div>
                        <p>Online Event <Link to="">Link visible for attendees</Link></p>
                    </div>                
                    
                </div>
                <div className='detailsBox'>
                    <h4>Details</h4>
                    <p>Learn the wisdom of Buddha and lead a life of everlasting peace and joy.
                        You can participate from anywhere in the world since the conference is virtual,
                        all you have to do to gain access is to click the following links.
                    </p>
                </div>

                <div className='detailsBox'>
                    <h4>Attendees (23) <Link to="">See all</Link> </h4>
                    <div className='attendeesMainBox'>
                        <ul>
                        <li>
                                <div className='imgBluetick'>
                                    <div className='imgdiv'>
                                        <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                                    </div>
                                    <img src={require('../../../static/images/blue_tick.png')} alt='' className='bluetick' />
                                </div>
                                <h6 className="profilename">
                                    Abraham Green
                                </h6>
                            </li>
                            <li>
                                <div className='imgBluetick'>
                                    <div className='imgdiv'>
                                        <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                                    </div>
                                    <img src={require('../../../static/images/blue_tick.png')} alt='' className='bluetick' />
                                </div>
                                <h6 className="profilename">
                                    Abraham Green
                                </h6>
                            </li>
                            <li>
                                <div className='imgBluetick'>
                                    <div className='imgdiv'>
                                        <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                                    </div>
                                    <img src={require('../../../static/images/blue_tick.png')} alt='' className='bluetick' />
                                </div>
                                <h6 className="profilename">
                                    Abraham Green
                                </h6>
                            </li>
                            <li>
                                <div className='imgBluetick'>
                                    <div className='imgdiv'>
                                        <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                                    </div>
                                    <img src={require('../../../static/images/blue_tick.png')} alt='' className='bluetick' />
                                </div>
                                <h6 className="profilename">
                                    Abraham Green
                                </h6>
                            </li>
                            <li>
                                <div className='imgBluetick'>
                                    <div className='imgdiv'>
                                        <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                                    </div>
                                    <img src={require('../../../static/images/blue_tick.png')} alt='' className='bluetick' />
                                </div>
                                <h6 className="profilename">
                                    Abraham Green
                                </h6>
                            </li>
                            <li>
                                <div className='imgBluetick'>
                                    <div className='imgdiv'>
                                        <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                                    </div>
                                    <img src={require('../../../static/images/blue_tick.png')} alt='' className='bluetick' />
                                </div>
                                <h6 className="profilename">
                                    Abraham Green
                                </h6>
                            </li>
                            <li>
                                <div className='imgBluetick'>
                                    <div className='imgdiv'>
                                        <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                                    </div>
                                    <img src={require('../../../static/images/blue_tick.png')} alt='' className='bluetick' />
                                </div>
                                <h6 className="profilename">
                                    Abraham Green
                                </h6>
                            </li>
                        </ul>
                    </div>                   
                </div>

                <div className='detailsBox'>
                    <h4>Comment</h4>
                    <div className='commentBox'>
                        <div className='userpibbox'>
                            <img src={require('../../../static/images/user_abraham.jpeg')} alt='' />
                        </div>
                        <Input
                            type="text"
                            placeholder='Comment'
                        />
                        <Button className='btnBlack'>Comment</Button>
                    </div>
                   
                </div>

                {/* <div className='analyticsBox whappning'>
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
                </div> */}


                {/* <div className='footerLinks'>
                    <Link to='/tos'>Terms of Service</Link>
                    <Link to='/privacy'>Privacy Policy</Link>
                    <Link to='/cookie'>Cookie Policy</Link>
                    <Link to='/access'>Accessibility</Link>
                    <Link to='/ads'>Ads info</Link>
                    <p>&copy; 2023 • K4M2A • v0.1</p>
                </div> */}
            </div>
        </div>
    )
}

export default EventDetailsComponent;