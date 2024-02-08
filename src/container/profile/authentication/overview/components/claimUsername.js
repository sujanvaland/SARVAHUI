
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button,  Form, Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { checkUsername } from '../../../../../redux/authentication/actionCreator';


function ClaimUserNameComponent(props){
    // eslint-disable-next-line react/prop-types
    const { changeStepToQuestion } = props;
    const authdata = useSelector((state) => state.auth);
    const [username, setusername] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if (username.length >= 5) {
          dispatch(checkUsername(username));
        }
    }, [username]);

    const handleChange = (e) => {
        setusername(e.target.value);
    }

    return (
        <div className="signUpcntBoxmain claimusername mt100">
            <div className="signUpcntBox">
                <h4 className='blackColor'>Claim your username and request an invite.</h4>
                <h3>Claim Now!</h3>
                <div className="enternamebox mrtop20">
                    <div className="textboxmain">
                        <Form>
                            <span className="logoimg">
                            <img src={require('../../../../../static/images/faviconpng.png')} alt="" />
                            </span>
                            <span>k4m2a.com/</span>

                            <Input
                                placeholder="username"
                                name="username"
                                value={username}
                                onChange={(e)=>handleChange(e)}
                            />

                            <>
                            {!authdata.isExist && username?.length >= 5 ? (
                                <Button className="btnsubmit" onClick={() => changeStepToQuestion('Question',username)}>
                                {' '}
                                <ArrowRightOutlined />
                                </Button>
                            ) : (
                                <Button className="btnsubmit" disabled>
                                {' '}
                                <ArrowRightOutlined />
                                </Button>
                            )}
                            </>
                        </Form>
                    </div>

                    {username?.length < 5 && (
                        <div className="errorbox red">5 characters look better as username 🖐</div>
                    )}

                    {!authdata.loading && authdata.isExist && username?.length >= 5 && (
                        <div className="errorbox red">Username already exist</div>
                    )}
                </div>
                <Button onClick={() => changeStepToQuestion('AboutUs','')} className="btnback">
                    Back
                </Button>
            </div>
        </div>
    )
}

export default ClaimUserNameComponent;