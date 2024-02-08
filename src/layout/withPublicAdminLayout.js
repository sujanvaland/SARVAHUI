/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'; 
import {BellOutlined  } from '@ant-design/icons';
import { changeRtlMode, changeLayoutMode, changeMenuMode } from '../redux/themeLayout/actionCreator';
import { logOut } from '../redux/authentication/actionCreator';

const PublicLayout = (WrappedComponent) => { 
  
  class PublicLayoutComponent extends Component {  

    constructor(props) {
      super(props);
      this.state = {
        headerTitle: "",
        displaySidemenu:false,
        path: window.location.pathname
      }
      this.updateDimensions = this.updateDimensions?.bind(this);
    }

    setHeader = (header) => {
    this.setState({ headerTitle: header });
    }

    showSidemenu=()=>{
      this.setState({displaySidemenu:true})
    }

    hidemenuBox=()=>{
      this.setState({displaySidemenu:false})
    }
    
    render() {
      const {headerTitle,displaySidemenu,path} = this.state;
      
      return (
        <div className='mainLayout' >
          {/* for tablet and mobile */}
            <div className='tabheader'>
            <div className='usernamebox' onClick={this.showSidemenu}>
              <span>a</span>
            </div>
            <div className='logotab'>
              <span className='logoimg'><img src={require('../static/images/faviconpng.png')} alt='' /></span>
            </div>
            <div className='righticons'>
              <Link to="/admin/notification" className="btncircle"><BellOutlined /></Link>
            </div>
          </div> 
          {/* for tablet and mobile */}
          <div className={displaySidemenu?'blackTransparent show':'blackTransparent'} onClick={this.hidemenuBox}>&nbsp;</div>
          <div className={displaySidemenu?'leftsidebar show':'leftsidebar'}>
            <div className="innerlogo">
              <img src={require('../static/img/k4m2a.png')} alt='' />                         
            </div>
            <div className='sidemenu'>
              <ul>
                <li>
                  <Link to="/" className={path === "/" ? "active" : ""} onClick={()=>this.setState({path:"/"})}>
                  {
                    path === "/" ? <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z"/><path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"/></g></svg>
                  }
                  Settings and Privacy</Link></li>
                <li><Link to="/explore" className={path === "/explore" ? "active" : ""} onClick={()=>this.setState({path:"/explore"})}>
                  {
                    path === "/explore" ? <svg xmlns="http://www.w3.org/2000/svg"   version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.786 511.786"   xmlSpace="preserve" width="512" height="512"><path d="M213.382,426.694c49.214,0.064,96.923-16.963,134.976-48.171l127.275,127.253c8.475,8.185,21.98,7.95,30.165-0.525   c7.984-8.267,7.984-21.373,0-29.641L378.545,348.337c74.545-91.24,61.011-225.636-30.229-300.181S122.68-12.855,48.135,78.385   S-12.876,304.02,78.364,378.566C116.472,409.701,164.172,426.704,213.382,426.694z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>
                  }
                  
                  Help Center</Link></li>
              </ul>
            </div>
          </div>
          <div className='rightmainbar'>
            {
              path !== "/message" &&
              <div className='righheader'>
                <div className='centersidebar'>
                  <div className='innerheader'>
                    {headerTitle}
                  </div>
                </div>
              </div>
            }
            <WrappedComponent {...this.props} setHeader={this.setHeader} />
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

  PublicLayoutComponent.propTypes = {
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

  return connect(mapStateToProps, mapStateToDispatch)(PublicLayoutComponent);
};

export default PublicLayout;
