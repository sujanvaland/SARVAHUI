import React, { useRef, useState } from 'react'; 
import { Modal, Button,Dropdown, Menu } from 'antd';
import {DownOutlined,UploadOutlined} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import EventDetailsComponent from './eventDetails';
import { DiscoverCommunities } from '../style';

function EventTimeline() {

    //   const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const history = useHistory();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState('comingEvent');

    const settingBox = () => {
        setIsModalOpen(true);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const showTimeLine = (currenttype) => {
        setType(currenttype);
    }
    const handleMenuClick = (e) => {
        // Accessing e.item.props.type, but e.item.props may be undefined
        console.log(e.item.props.type);
      };

    
     const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" type="optionType1">
        Option 1
      </Menu.Item>
      <Menu.Item key="2" type="optionType2">
        Option 2
      </Menu.Item>
      <Menu.Item key="3" type="optionType3">
        Option 3
      </Menu.Item>
    </Menu>
  );

    return (
        <>
            <div className='cntpagecomponent'>
                <div className='centersidebarcontent flexcolumn mt56'>
                    <div className='tabbox'>
                        <Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                            <img src={require('../../../static/images/icon_back.png')} alt="" />
                        </Link>
                        <Button onClick={() => showTimeLine('comingEvent')} className={type === 'comingEvent' ? 'btntab active' : 'btntab'}> Explore Jobs</Button>
                        <Button onClick={() => showTimeLine('myEvent')} className={type === 'myEvent' ? 'btntab active' : 'btntab'}> Matched Jobs </Button>
                        <Button className='btntabsetting' onClick={settingBox}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z" /> </g></svg></Button>
                    </div>
                    <div className='wdth100 mdt-50' ref={scrollRef}>

                   
                    <DiscoverCommunities className="communitiesBoxDetails eventDetails">
                    <div className='eventSearch'>
                        <ul>
                            <li>
                                <Dropdown overlay={menu} trigger={['click']}>
                                <a href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                    Any Time <DownOutlined />
                                </a>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={menu} trigger={['click']}>
                                <a href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                    Any Date <DownOutlined />
                                </a>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={menu} trigger={['click']}>
                                <a href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                    Any Place <DownOutlined />
                                </a>
                                </Dropdown>
                            </li>
                            <li>
                                <Link to="" className="resetLink">Reset Filter</Link>
                            </li>
                        </ul>
                    </div>
                        <h3> Today </h3>
                        <div className="disCommunities">
                            <div className="comminitiesImage">
                                <img src={require('../../../static/images/back1.jpg')} alt="" />
                            </div>
                            <div className="rightBox">
                                <div className="CommunitiesDetails">
                                <div className="countMembers">THU DEC 21- 6:30 PM IST</div>
                                    <h4>The Purpose of Life in Buddhism</h4>
                                    <div className="countMembers"> Vadodara The Purpose of Life In Buddhism </div>
                                </div>
                                <div className='eventBottom'>
                                    <div className="countMembers">1.8k attendees</div>
                                    <div className='eventRight'>
                                        <Link to=""><UploadOutlined /></Link>
                                        <Link to=""><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/></g></svg></Link>
                                    </div>
                                </div>                                   
                            </div>

                        </div>
                        <div className="disCommunities">
                            <div className="comminitiesImage">
                                <img src={require('../../../static/images/back1.jpg')} alt="" />
                            </div>
                            <div className="rightBox">
                                <div className="CommunitiesDetails">
                                    <div className="countMembers">THU DEC 21- 6:30 PM IST</div>
                                    <h4>The Purpose of Life in Buddhism</h4>
                                    <div className="countMembers"> Vadodara The Purpose of Life In Buddhism </div>
                                </div>
                                <div className='eventBottom'>
                                    <div className="countMembers">1.8k attendees</div>
                                    <div className='eventRight'>
                                        <Link to=""><UploadOutlined /></Link>
                                        <Link to=""><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/></g></svg></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <h3> Sunday, March 24  </h3>
                        <div className="disCommunities">
                            <div className="comminitiesImage">
                                <img src={require('../../../static/images/back1.jpg')} alt="" />
                            </div>
                            <div className="rightBox">
                                <div className="CommunitiesDetails">
                                <div className="countMembers">THU DEC 21- 6:30 PM IST</div>
                                    <h4>The Purpose of Life in Buddhism</h4>
                                    <div className="countMembers"> Vadodara The Purpose of Life In Buddhism </div>
                                </div>
                                <div className='eventBottom'>
                                    <div className="countMembers">1.8k attendees</div>
                                    <div className='eventRight'>
                                        <Link to=""><UploadOutlined /></Link>
                                        <Link to=""><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/></g></svg></Link>
                                    </div>
                                </div>
                                   
                            </div>

                        </div>
                        <div className="disCommunities">
                            <div className="comminitiesImage">
                                <img src={require('../../../static/images/back1.jpg')} alt="" />
                            </div>
                            <div className="rightBox">
                                <div className="CommunitiesDetails">
                                <div className="countMembers">THU DEC 21- 6:30 PM IST</div>
                                    <h4>The Purpose of Life in Buddhism</h4>
                                    <div className="countMembers"> Vadodara The Purpose of Life In Buddhism </div>
                                </div>
                                <div className='eventBottom'>
                                    <div className="countMembers">1.8k attendees</div>
                                    <div className='eventRight'>
                                        <Link to=""><UploadOutlined /></Link>
                                        <Link to=""><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/></g></svg></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </DiscoverCommunities>
                    </div>
                </div>
                <EventDetailsComponent />
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={650}>
                gj
            </Modal>

        </>
    );
}

export default EventTimeline;
