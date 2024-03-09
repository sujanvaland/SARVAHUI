/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import {
  BellOutlined,
  PlusOutlined,
  HomeOutlined,
  SearchOutlined,
  FundOutlined,
  MailOutlined,
  SettingOutlined,
  SettingFilled,
} from '@ant-design/icons';
import SearchUser from './components/SearchUser';
import PremiumModal from './components/PremiumModal';
import UploadPost from '../container/pages/post/uploadPost';
import { changeRtlMode, changeLayoutMode, changeMenuMode } from '../redux/themeLayout/actionCreator';
import { logOut } from '../redux/authentication/actionCreator';
import { Modal } from '../components/modals/antd-modals';
import { removeItem } from '../utility/localStorageControl';

const ThemeLayout = (WrappedComponent) => {
  class LayoutComponent extends Component {
    myRef = null;

    toggleBtnRef = null;

    constructor(props) {
      super(props);
      this.state = {
        headerTitle: '',
        displaySidemenu: false,
        path: window.location.pathname,
        showUploadPost: false,
        fadeFooter: false,
      };
      this.myRef = React.createRef();
      this.toggleBtnRef = React.createRef();
      this.updateDimensions = this.updateDimensions?.bind(this);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleScrenClick);
      window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
      const scollPos = window.scrollY;
      if (scollPos > 0) {
        this.setState({ fadeFooter: true });
      } else {
        this.setState({ fadeFooter: false });
      }
    };

    setHeader = (header) => {
      this.setState({ headerTitle: header });
    };

    // eslint-disable-next-line class-methods-use-this
    handleScrenClick = (e) => {
      if (e.target?.id !== this.toggleBtnRef?.current?.id) {
        const classes = this.myRef?.current?.className?.toString();
        if (classes?.includes('show')) {
          this.closeMenu();
        }
      }
    };

    showSidemenu = () => {
      this.setState({ displaySidemenu: true });
    };

    hidemenuBox = () => {
      this.setState({ displaySidemenu: false });
    };

    // eslint-disable-next-line class-methods-use-this
    handlelogout = () => {
      Cookies.remove('logedIn');
      Cookies.remove('token');
      localStorage.removeItem('profile');
      removeItem('access_token');
      window.location.href = window.location.href.includes('localhost') ? `http://localhost:3000` : `https://k4m2a.com`;
    };

    render() {
      const { headerTitle, displaySidemenu, path, showUploadPost, fadeFooter } = this.state;
      const Profilemenu = (
        <Menu className="moremnuBox">
          <Menu.Item key="1" onClick={this.handlelogout}>
            Logout
          </Menu.Item>
        </Menu>
      );
      const User = JSON.parse(localStorage.getItem('profile'));
      return (
        <div className="mainLayout">
          {/* for tablet and mobile */}
          <div className="tabheader">
            <div className="usernamebox" onClick={this.showSidemenu}>
              <span>a</span>
            </div>
            <div className="logotab">
              <span className="logoimg">
                <img src={require('../static/images/faviconpng.png')} alt="" />
              </span>
            </div>
            <div className="righticons">
              <Link to="/admin/notification" className="btncircle">
                <BellOutlined />
              </Link>
            </div>
          </div>
          {/* for tablet and mobile */}
          <div className={displaySidemenu ? 'blackTransparent show' : 'blackTransparent'} onClick={this.hidemenuBox}>
            &nbsp;
          </div>
          <div className={displaySidemenu ? 'leftsidebar show' : 'leftsidebar'}>
            <div className="innerlogo">
              {/* <img src={require('../static/images/logo.png')} alt='' />  */}
              <img src={require('../static/images/Sarvah.png')} alt="" />
            </div>
            <div className="usernamebox devicebox">
              <div className="flexboxrow">
                <span className="userimg">
                  <img src={require('../static/images/img_userpic.jpg')} alt="" />
                </span>
                <h2>
                  {`${User?.firstName} ${User?.lastName}`}
                  <span>{`@${User?.userName}`}</span>
                </h2>
              </div>
              <div className="followrsbox">
                <div className="subbox">
                  {User?.following} <span>Following</span>
                </div>
                <div className="subbox">
                  {User?.followers} <span>Follower</span>
                </div>
              </div>
              <Button className="btnAddprofile">
                {' '}
                <svg viewBox="0 0 24 24" aria-hidden="true" data-testid="iconPlus">
                  <g>
                    <path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" />
                  </g>
                </svg>
              </Button>
            </div>

            <div className="sidemenu">
              <ul>
                <li>
                  <Link to="/" className={path === '/' ? 'active' : ''} onClick={() => this.setState({ path: '/' })}>
                    {path === '/' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z" />
                        <path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
                        <g id="_01_align_center" data-name="01 align center">
                          <path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z" />
                        </g>
                      </svg>
                    )}
                    Home
                  </Link>
                </li>
                {User.loginType === "jobSeeker" &&<li>
                  <Link
                    to="/appliedjobs"
                    className={path === '/appliedjobs' ? 'active' : ''}
                    onClick={() => this.setState({ path: '/appliedjobs' })}
                  >
                    {path === '/appliedjobs' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 511.786 511.786"
                        xmlSpace="preserve"
                        width="512"
                        height="512"
                      >
                        <path d="M213.382,426.694c49.214,0.064,96.923-16.963,134.976-48.171l127.275,127.253c8.475,8.185,21.98,7.95,30.165-0.525   c7.984-8.267,7.984-21.373,0-29.641L378.545,348.337c74.545-91.24,61.011-225.636-30.229-300.181S122.68-12.855,48.135,78.385   S-12.876,304.02,78.364,378.566C116.472,409.701,164.172,426.704,213.382,426.694z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                      </svg>
                    )}
                    Applied Jobs
                  </Link>
                </li>}
                <li>
                  <Link
                    to="/message"
                    className={path === '/message' ? 'active' : ''}
                    onClick={() => this.setState({ path: '/message' })}
                  >
                    {path === '/message' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z" />
                        <path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
                      </svg>
                    )}
                    Messages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bookmarks"
                    className={path === '/bookmarks' ? 'active' : ''}
                    onClick={() => this.setState({ path: '/bookmarks' })}
                  >
                    {path === '/bookmarks' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
                      </svg>
                    )}
                    Bookmarks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className={path === '/profile' ? 'active' : ''}
                    onClick={() => this.setState({ path: '/profile' })}
                  >
                    {path === '/profile' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        width="512"
                        height="512"
                      >
                        <g>
                          <circle cx="256" cy="128" r="128" />
                          <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
                        </g>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                        <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                      </svg>
                    )}
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/setting"
                    className={path === '/setting' ? 'active' : ''}
                    onClick={() => this.setState({ path: '/setting' })}
                  >
                    {path === '/setting' ? <SettingFilled /> : <SettingOutlined />}
                    Settings
                  </Link>
                </li>
                {User.loginType === "recruiter" && <li>
                  <Link
                    to="/postJob"
                    className={path === '/postJob' ? 'active' : ''}
                    onClick={() => this.setState({ path: '/postJob' })}
                  >
                    {path === '/postJob' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        width="512"
                        height="512"
                      >
                        <g>
                          <circle cx="256" cy="128" r="128" />
                          <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
                        </g>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                        <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                      </svg>
                    )}
                    Post Job
                  </Link>
                </li>}
                {/* <li className="addpostbtn">
                  <Link
                    to="/postjob"
                    className={path === '/postjob' ? 'active' : ''}
                    onClick={() => this.setState({ path: '/postjob' })}
                  >
                    PostJob
                  </Link>
                </li> */}
              </ul>
            </div>
            {showUploadPost && (
              <Modal
                type="primary"
                title=""
                visible
                footer={null}
                width={600}
                onCancel={() => this.setState({ showUploadPost: false })}
                style={{
                  top: 10, // Adjust this value to set the desired top position
                }}
                className="postModal"
              >
                <UploadPost closeModel={() => this.setState({ showUploadPost: false })} />
              </Modal>
            )}

            <div className="usernamebox">
              <div className="flexboxrow">
                <span className="userimg">
                  {User?.profileImg?.length > 10 ? (
                    <img src={User.profileImg} alt="" />
                  ) : (
                    <img src={require('../static/images/img_userpic.jpg')} alt="" />
                  )}
                </span>
                <h2>
                  {`${User?.firstName} ${User?.lastName}`}
                  <span>{`@${User?.userName}`}</span>
                </h2>
              </div>
              <div className="more">
                <Dropdown overlay={Profilemenu} placement="topRight" trigger={['click']}>
                  <Button className="ant-dropdown-link" size="small">
                    <FeatherIcon icon="more-horizontal" />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
          {path === '/premium' && <PremiumModal />}
          <div className="rightmainbar">
            {path !== '/message' && path !== '/event' && (
              <div className="righheader">
                <div className="centersidebar">
                  <div className="innerheader">{headerTitle}</div>
                </div>
                <SearchUser />
              </div>
            )}
            <WrappedComponent {...this.props} setHeader={this.setHeader} />
          </div>

          {path === '/' && (
            <div className="diviceAddpost">
              <Link to="">
                <PlusOutlined />
              </Link>
            </div>
          )}
          {path === '/message' && (
            <div className="diviceAddpost addmsg">
              <Link to="">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
                  </g>
                </svg>
              </Link>
            </div>
          )}

          <div className={fadeFooter === true ? 'deviceFooterMenu fadeEfect' : 'deviceFooterMenu'}>
            <Link to="/">
              <HomeOutlined />
            </Link>
            <Link to="">
              <SearchOutlined />
            </Link>
            <Link to="">
              <FundOutlined />
            </Link>
            <Link to="/notification">
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                <path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z" />
              </svg>
            </Link>
            <Link to="/message">
              <MailOutlined />
            </Link>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      ChangeLayoutMode: state.ChangeLayoutMode.data,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  };

  const mapStateToDispatch = (dispatch) => {
    return {
      changeRtl: (rtl) => dispatch(changeRtlMode(rtl)),
      changeLayout: (show) => dispatch(changeLayoutMode(show)),
      changeMenuMode: (show) => dispatch(changeMenuMode(show)),
      logOut: () => dispatch(logOut()),
    };
  };

  LayoutComponent.propTypes = {
    ChangeLayoutMode: propTypes.bool,
    rtl: propTypes.bool,
    topMenu: propTypes.bool,
    changeRtl: propTypes.func,
    changeLayout: propTypes.func,
    changeMenuMode: propTypes.func,
    setHeader: propTypes.func,
    history: propTypes.shape({
      push: propTypes.func.isRequired,
    }).isRequired,
  };

  return connect(mapStateToProps, mapStateToDispatch)(LayoutComponent);
};
export default ThemeLayout;
