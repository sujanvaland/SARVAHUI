import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Modal, Button, Input,Tabs  } from 'antd';
import {LeftOutlined, RightOutlined, EyeOutlined} from '@ant-design/icons';
import Link from 'antd/lib/typography/Link';
import { BuySubcription } from '../../redux/subcrption/actionCreator';

function PremiumModal() {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isModalSecondOpen, setIsModalSecondOpen] = useState(false);
    const [isModalThirdOpen, setIsModalThirdOpen] = useState(false);
    const [isVerifyPhoneNo, setIsVerifyPhoneNo] = useState(true);
    const [isVerifyPassword, setIsVerifyPassword] = useState(false);
    const [isBluemark, setIsBluemark] = useState(false);

    const [goPremium, setgoPremium] = useState(false);
    const [goPremiumPlus, setgoPremiumPlus] = useState(false);
    const [goBasic, setgoBasic] = useState(true); 
    const [SubcriptionType, setSubcriptionType] = useState('individual');
    const [PaymentType, setPaymentType] = useState('monthly');
    

    const showModalSecond = () => {
        setIsModalSecondOpen(true);
        setIsModalOpen(false);
      };
    
        const handleOkSecond = () => {
        setIsModalSecondOpen(false);
         setIsModalOpen(true);
      };


      const showModalThird = () => {
        setIsModalThirdOpen(true);
        setIsModalSecondOpen(false);
        setIsVerifyPhoneNo(true);
        setIsVerifyPassword(false);
      };
    
        const handleOkThird = () => {
            setIsModalThirdOpen(false);
            setIsModalSecondOpen(true);
      };


      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const goNextPremium = () => {
        setgoPremium(true);
        setgoBasic(false);
        setgoPremiumPlus(false);
      };
      const goNextPremiumPlus = () => {
        setgoPremiumPlus(true);
        setgoPremium(false);
        setgoBasic(false); 
      };

      const goBasicBox = () => {
        setgoBasic(true);
        setgoPremiumPlus(false);
        setgoPremium(false);
      };      


      const gotoVerifyPassword = () =>{
        setIsVerifyPassword(true);
        setIsVerifyPhoneNo(false);
      }

      const goNexttoVerify = () =>{
        setIsBluemark(true);
        setIsVerifyPassword(false);
        const obj ={
            planId: 0 ,
            subcriptionType : SubcriptionType,
            paymentType : PaymentType ,
        }
        dispatch(BuySubcription(obj));
      }

  
      

      return (
        <>        
          <Modal className='premiumModal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={600}>
            <h1>Who are you?</h1>
            <p>Choose the right subscription for you:</p>
            <div className='packageMain'>
                <ul>
                    <li className={SubcriptionType === "individual" ? 'activebox' : ''}>
                        <Link to="" onClick={()=>setSubcriptionType("individual")}>
                        <p>Premium</p>
                        <h4>I am an individual</h4>
                        <p className='fnt13'>For individuals looking for deeper integration with self and beyond.</p>
                        </Link>
                    </li>
                    <li className={SubcriptionType === "organization" ? 'activebox' : ''}>
                    <Link to="" onClick={()=>setSubcriptionType("organization")}>
                        <p>Verified Organizations</p>
                        <h4>I am an Organization</h4>
                        <p className='fnt13'>For spiritual businesses, content creators, institutes, spiritual groups, and non-profits.</p>
                        </Link>

                    </li>
                </ul>
            </div>
            <Button className="btnBlack" onClick={showModalSecond}>
                Subscribe
            </Button>
            <p>Learn more about <Link to="">Premium</Link> and <Link to="">Verified Organizations</Link></p>
          </Modal>


          <Modal className='premiumModalTwo'  open={isModalSecondOpen} onOk={handleOkSecond} onCancel={handleOkSecond} width={650}>
            <h1 className='textleft'>  Subscribe</h1> 

            {
                goBasic && 

                <div className='palnMainBox plan1'>
                <div className='plansBox'>
                    <div className='plansHead'>
                        <div/> <h3>Basic</h3><Button onClick={goNextPremium}><RightOutlined /></Button>
                    </div>
                    <div className='packgesdetails'>
                        <h4>Enhanced Experience </h4>
                        <ul>
                            <li>
                                <span>Ads in For You</span> <span>Full</span> 
                            </li>
                            <li>
                                <span>Reply boost</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Edit post</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Longer  post</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Undo post</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Post longer videos</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Top Articles</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Reader</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Background video playback</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Download videos</span> <span>Smallest</span> 
                            </li>
                        </ul>
                    </div>
                    <div className='packgesdetails'>
                        <h4>Creator Hub</h4>
                        <ul>
                            <li>
                                <span>Get paid to post</span> <span>Full</span> 
                            </li>
                            <li>
                                <span>Creator Subscriptions</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>X Pro (web only)</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Media Studio (web only)</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Analytics (web only)</span> <span>Smallest</span> 
                            </li>                        
                        </ul>
                    </div>
                    <div className='packgesdetails'>
                        <h4>Verification & Security</h4>
                        <ul>
                            <li>
                                <span>Checkmark</span> <span>Full</span> 
                            </li>
                            <li>
                                <span>Encrypted direct messages</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>ID verification</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>SMS two-factor authentication</span> <span>Smallest</span> 
                            </li>                                                
                        </ul>
                    </div>
                </div>    
                <div className='packagesBottomBox'>
                    <div className='packageMain'>
                        <ul>
                            <li className={PaymentType === "annual" ? 'activebox' : ''}>
                    <Link to="" onClick={()=>setPaymentType("annual")}>

                                <p>Annual Plan</p>
                                <h4>Rs. 2590.15 / year</h4>
                                <p className='fnt13'>Rs.2590.48 per year billed annually</p></Link>
                            </li>
                            <li className={PaymentType === "monthly" ? 'activebox' : ''}>
                    <Link to="" onClick={()=>setPaymentType("monthly")}>

                                <p>Montyly Plan</p>
                                <h4>Rs. 243.75 / month</h4>
                                <p className='fnt13'>Rs. 2925.00 per year billed monthly</p></Link>
                            </li>
                        </ul>
                        </div>
                    <Button className="btnBlack" onClick={showModalThird}>
                        Upgrade &amp; Pay
                    </Button>
                    <div className='packageNote'>
                        <p>By subscribing, you agree to our Purchaser Terms of Service. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. Cancel at least 24 hours prior to renewal to avoid additional charges. When upgrading to a higher priced tier, credit for the remainder of your previous subscription will go towards your account and automatically be applied to future payments. Your new subscription will start immediately. A verified phone number is required to subscribe.</p>
                    </div>
                </div> 
            </div>  
            }
           
           {
            goPremium &&
            <div className='palnMainBox plan2'>
            <div className='plansBox'>
                <div className='plansHead'>
                <Button  onClick={goBasicBox}><LeftOutlined /></Button> <h3>Premium</h3> <Button onClick={goNextPremiumPlus}><RightOutlined /></Button>
                </div>
                <div className='packgesdetails'>
                    <h4>Enhanced Experience </h4>
                    <ul>
                        <li>
                            <span>Ads in For You</span> <span>Full</span> 
                        </li>
                        <li>
                            <span>Reply boost</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Edit post</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Longer  post</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Undo post</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Post longer videos</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Top Articles</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Reader</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Background video playback</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Download videos</span> <span>Smallest</span> 
                        </li>
                    </ul>
                </div>
                <div className='packgesdetails'>
                    <h4>Creator Hub</h4>
                    <ul>
                        <li>
                            <span>Get paid to post</span> <span>Full</span> 
                        </li>
                        <li>
                            <span>Creator Subscriptions</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>X Pro (web only)</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Media Studio (web only)</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>Analytics (web only)</span> <span>Smallest</span> 
                        </li>                        
                    </ul>
                </div>
                <div className='packgesdetails'>
                    <h4>Verification & Security</h4>
                    <ul>
                        <li>
                            <span>Checkmark</span> <span>Full</span> 
                        </li>
                        <li>
                            <span>Encrypted direct messages</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>ID verification</span> <span>Smallest</span> 
                        </li>
                        <li>
                            <span>SMS two-factor authentication</span> <span>Smallest</span> 
                        </li>                                                
                    </ul>
                </div>
            </div>    
            <div className='packagesBottomBox'>
                <div className='packageMain'>
                    <ul>
                        <li className={PaymentType === "annual" ? 'activebox' : ''}>
                    <Link to="" onClick={()=>setPaymentType("annual")}>
                            <p>Annual Plan</p>
                            <h4>Rs. 6800.15 / year</h4>
                            <p className='fnt13'>Rs.6800.48 per year billed annually</p></Link>
                        </li>
                        <li className={PaymentType === "monthly" ? 'activebox' : ''}>
                    <Link to="" onClick={()=>setPaymentType("monthly")}>
                            <p>Montyly Plan</p>
                            <h4>Rs. 650.75 / month</h4>
                            <p className='fnt13'>Rs. 6800.00 per year billed monthly</p></Link>
                        </li>
                    </ul>
                    </div>
                <Button className="btnBlack" onClick={showModalThird}>
                    Upgrade &amp; Pay
                </Button>
                <div className='packageNote'>
                    <p>By subscribing, you agree to our Purchaser Terms of Service. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. Cancel at least 24 hours prior to renewal to avoid additional charges. When upgrading to a higher priced tier, credit for the remainder of your previous subscription will go towards your account and automatically be applied to future payments. Your new subscription will start immediately. A verified phone number is required to subscribe.</p>
                </div>
            </div> 
        </div> 
           }

             
            {
                goPremiumPlus && 

                <div className='palnMainBox plan3'>
                <div className='plansBox'>
                    <div className='plansHead'>
                    <Button onClick={goNextPremium}><LeftOutlined /></Button> <h3>Premium +</h3> <div/> 
                    </div>
                    <div className='packgesdetails'>
                        <h4>Enhanced Experience </h4>
                        <ul>
                            <li>
                                <span>Ads in For You</span> <span>Full</span> 
                            </li>
                            <li>
                                <span>Reply boost</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Edit post</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Longer  post</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Undo post</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Post longer videos</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Top Articles</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Reader</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Background video playback</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Download videos</span> <span>Smallest</span> 
                            </li>
                        </ul>
                    </div>
                    <div className='packgesdetails'>
                        <h4>Creator Hub</h4>
                        <ul>
                            <li>
                                <span>Get paid to post</span> <span>Full</span> 
                            </li>
                            <li>
                                <span>Creator Subscriptions</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>X Pro (web only)</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Media Studio (web only)</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>Analytics (web only)</span> <span>Smallest</span> 
                            </li>                        
                        </ul>
                    </div>
                    <div className='packgesdetails'>
                        <h4>Verification & Security</h4>
                        <ul>
                            <li>
                                <span>Checkmark</span> <span>Full</span> 
                            </li>
                            <li>
                                <span>Encrypted direct messages</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>ID verification</span> <span>Smallest</span> 
                            </li>
                            <li>
                                <span>SMS two-factor authentication</span> <span>Smallest</span> 
                            </li>                                                
                        </ul>
                    </div>
                </div>    
                <div className='packagesBottomBox'>
                    <div className='packageMain'>
                        <ul>
                            <li className={PaymentType === "annual" ? 'activebox' : ''}>
                    <Link to="" onClick={()=>setPaymentType("annual")}>
                                <p>Annual Plan</p>
                                <h4>Rs. 13600.15 / year</h4>
                                <p className='fnt13'>Rs.13600.48 per year billed annually</p></Link>
                            </li>
                            <li className={PaymentType === "monthly" ? 'activebox' : ''}>
                    <Link to="" onClick={()=>setPaymentType("monthly")}>
                                <p>Montyly Plan</p>
                                <h4>Rs. 1300.75 / month</h4>
                                <p className='fnt13'>Rs. 13600.00 per year billed monthly</p></Link>
                            </li>
                        </ul>
                        </div>
                    <Button className="btnBlack" onClick={showModalThird}>
                        Upgrade &amp; Pay
                    </Button>
                    <div className='packageNote'>
                        <p>By subscribing, you agree to our Purchaser Terms of Service. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. Cancel at least 24 hours prior to renewal to avoid additional charges. When upgrading to a higher priced tier, credit for the remainder of your previous subscription will go towards your account and automatically be applied to future payments. Your new subscription will start immediately. A verified phone number is required to subscribe.</p>
                    </div>
                </div> 
            </div>  
            }
             

          </Modal>


          <Modal className='premiumModalTwo verifymodal'  open={isModalThirdOpen} onOk={handleOkThird} onCancel={handleOkThird} width={650}>
            
            {
                isVerifyPhoneNo && 
                <div className='verifyPhonenumber'>
                <div className='verifyImage'>
                    <img src={require('../../static/images/img_verify.jpg')} alt=''/>
                </div>
                <div className='veryfyText'>
                    <h3>Verify your phone number</h3>
                    <p>Verify your phone number to subscribe for Premium. It should just take a few minutes.</p>
                    <Button className="btnBlack" onClick={gotoVerifyPassword}>
                       Verify your phone number
                    </Button>
                </div>
                   
            </div>
            }

            {
                isVerifyPassword && 
            <div className='verifyPhonenumber verifyPassword'>       
                <div className='k4logo'>
                        <img src={require('../../static/images/black_icon.png')} alt=''/>
                </div>
                <div className='verfypassBox'>
                    <div className='veryfyText'>
                        <h3>Verify your password</h3>
                        <p>Re-enter your k4m2a password to continue.</p>
                    <div className='passwordBox'>
                        <Input 
                        type='password' placeholder='Password'
                        />
                        <Button>
                            <EyeOutlined />
                            {/* <EyeInvisibleOutlined /> */}
                        </Button>
                    </div>
                    </div>
                    <Button className="btnBlack" onClick={goNexttoVerify}>
                       Cancel  Verify
                    </Button>
                </div> 
            </div>
            }
            {
                isBluemark &&                
                <div className='BluemarkBox'>
                    <div className='blueTickBox'>
                        <p>Blue subscribers with a verified phone number will get a blue checkmark once approved.
                        </p>
                        <img src={require('../../static/images/blue_tick.png')} alt=''/>
                    </div>
                    <div className='monthlyPlans'>
                            <Tabs
                                defaultActiveKey="1"
                                items={[
                                {
                                    label: <h4>Annually  <span>Save 12%</span></h4>,
                                    key: '1',
                                    children: <div className='bluecntBox'><h4>Blue</h4>
                                    <ul>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                    </ul>
                                    </div>,
                                },
                                {
                                    label: <h4>Monthly</h4>,
                                    key: '2',
                                    children:<div className='bluecntBox'><h4>Blue</h4>
                                    <ul>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the </li>
                                    </ul>
                                    </div>, 
                                },                   
                                ]}
                            />

                    <Button className="btnBlack" onClick={goNexttoVerify}>
                            Rs. 13600.15 / year
                    </Button>
                    <div className='packageNote'>
                        <p>By subscribing, you agree to our Purchaser Terms of Service. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. Cancel at least 24 hours prior to renewal to avoid additional charges. When upgrading to a higher priced tier, credit for the remainder of your previous subscription will go towards your account and automatically be applied to future payments. Your new subscription will start immediately. A verified phone number is required to subscribe.</p>
                    </div>
                    </div>
                </div>
            }

         
           </Modal>
        </>
      );
    
}

export default PremiumModal;