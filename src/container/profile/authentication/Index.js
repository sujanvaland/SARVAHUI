import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
 

const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Row>
        {/* <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
          <Aside>
            <div className="auth-side-content">
              <img src={require('../../../static/img/auth/topShape.png')} alt="" className="topShape" />
              <img src={require('../../../static/img/auth/bottomShape.png')} alt="" className="bottomShape" />
              <Content>
                <img style={{ width: '150px' }} src={require('../../../static/img/Logo_Dark.svg')} alt="" />
                <br />
                <br />
                <Heading as="h1">
                  StrikingDash React <br />
                  Web Application
                </Heading>
                <img
                  className="auth-content-figure"
                  src={require('../../../static/img/auth/Illustration.png')}
                  alt=""
                />
              </Content>
            </div>
          </Aside>
        </Col> */}

        <Col xxl={24} xl={24} lg={24} md={24} xs={24}>
          <WraperContent />
          <div className='footerbox'>
              <div className='ftr_left'>
                  <Link to=""><img src={require('../../../static/images/icon_x.png')} alt=''/></Link>
                  <Link to=""><img src={require('../../../static/images/icon_linkdin.png')} alt=''/></Link>
                  <Link to=""><img src={require('../../../static/images/icon_insta.png')} alt=''/></Link>
                  <Link to=""><img src={require('../../../static/images/icon_fb.png')} alt=''/></Link>
              </div>
              <div className='ftr_right'>
                  <p>&copy; SARVAH 2024</p>
                  <Link to="/donation">Donate</Link>
                  <Link to='/tos'>Terms of Service</Link>
                  <Link to='/privacy'>Privacy Policy</Link>
                  <Link to='/cookie'>Cookie Policy</Link>
                  <Link to='/access'>Accessibility</Link>
                  <Link to='/ads'>Ads info</Link>
              </div>
          </div>
        </Col>
      </Row>
    );
  };
};

export default AuthLayout;
