
import React from 'react';
import { Button } from 'antd';

function AboutUsComponent(props){
    // eslint-disable-next-line react/prop-types
    const { changeStep } = props;
    
    return (
        <div className="signUpcntBoxmain">
        <div className="signUpcntBox">
          <h4>About K4M2A</h4>
          <h3>A platform for the future of humanity</h3>
          <p>
            At K4M2A, we&apos;re not just a company; we&apos;re a movement. Imagine if humanity worked
            together seamlessly, like gears in a well-oiled machine. That&apos;s the essence of K4M2A.
          </p>
          <p>
            Our mission transcends the ordinary – we&apos;re here to unravel the mysteries of life, both on
            Earth and beyond, utilizing the perfect blend of scientific prowess and spiritual exploration.
          </p>
          <p>
            Just like SpaceX pioneers the unexplored realms of space and Tesla Motors revolutionizes the
            automotive industry, K4M2A aspires to redefine the very fabric of collective human discovery.
            We&apos;re not merely building a platform; we&apos;re constructing a launchpad for collaborative
            brilliance, inviting you to join the cosmic expedition.
          </p>
        </div>
        <Button className="btnnextbox" onClick={() => changeStep('ClaimUserName')}>
          {' '}
          <img src={require('../../../../../static/images/next_arrow.png')} alt="" />
        </Button>
      </div>
    )
}

export default AboutUsComponent;