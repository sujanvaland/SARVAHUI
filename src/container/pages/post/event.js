import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select, TimePicker } from 'antd';
import { useSelector } from 'react-redux';
// import moment from 'moment';

function Event(props) {

    // eslint-disable-next-line react/prop-types
    const { setShowEvent, setEventVal } = props;
    const { userprofile } = useSelector((state) => ({
        userprofile: state?.auth.userprofile
    }));
    const { Option } = Select;
    const [form] = Form.useForm();
    const dateFormat = 'YYYY/MM/DD';
    const format = 'HH:mm';

    const [EventValues, setEventValues] = useState({
        "id": 0,
        "createdBy": userprofile.id,
        "modifiedBy": 0,
        "createdDate": new Date(),
        "modifiedDate": new Date(),
        "isDeleted": true,
        "pollTitle": "",
        "choice1": "",
        "choice2": "",
        "day": "0",
        "hour": "0",
        "minute": "0"
    });

    const handleEventValueChange = (e) => {
        setEventValues({
            ...EventValues,
            [e.target.name]: e.target.value
        })
        setEventVal({
            ...EventValues,
            [e.target.name]: e.target.value
        })

    }

    const handleRemoveEvent = () => {
        setShowEvent(false);
        setEventValues({})
    }

    const handleEventFormat = (selected) => {
        setEventValues({
            ...EventValues,
            gender: selected,
        });
    };

    const handleEventType = (selected) => {
        setEventValues({
            ...EventValues,
            gender: selected,
        });
    };


    const handleStartDate = (dateString) => {
        setEventValues({
            ...EventValues,
            dob: dateString,
        });
    };


    const handleEndDate = (dateString) => {
        setEventValues({
            ...EventValues,
            dob: dateString,
        });
    };

    return (
        <>

            <div className='polMainBox editprofileForm userprofilepage posteventpage'>
                <Form name="UpdateProfile" form={form} layout="vertical">
                    <div className='polTextBox'>
                        <div className='polcheckboxmain'>
                            <Row gutter={25}>
                                <Col lg={24} sm={24}>
                                    <div className="coverPic">
                                        {/* {EventValues?.backgroundImg && <img src={EventValues?.backgroundImg} alt="" />} */}
                                        <div className="uploadProfilePic">
                                            <img src={require('../../../static/images/icon_addphoto.png')} alt="" />
                                            <Input
                                                type="file"
                                                id="fileInputBackground"
                                                multiple={false}
                                            // onChange={(e) => handleBinaryChange(e, 'background')}
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={12} sm={12}>
                                    <div className='checkBox'>
                                        <Form.Item label="Select Event Format">
                                            <Select onChange={handleEventFormat} value=''>
                                                <Option value=""> Select Gender</Option>
                                                <Option value="male">Male </Option>
                                                <Option value="female"> Female</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={12} sm={12}>
                                    <div className='checkBox'>
                                        <Form.Item label="Select Event Type">
                                            <Select onChange={handleEventType} value=''>
                                                <Option value=""> Select Gender</Option>
                                                <Option value="male">Male </Option>
                                                <Option value="female"> Female</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <div className='checkBox'>
                                        <Form.Item label="Title">
                                            <Input
                                                type='text'
                                                name="title"
                                                value=''
                                                onChange={handleEventValueChange}
                                            />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={12} sm={12}>
                                    <div className='checkBox'>
                                        <Form.Item label="Start Date">
                                            <DatePicker
                                                onChange={handleStartDate}
                                                style={{ width: '100%' }}
                                                // defaultValue={EventValues?.dob ? moment(`${EventValues?.dob}`, dateFormat) : null}
                                                format={dateFormat}
                                                // disabledDate={disabledDate}
                                            />
                                        </Form.Item>
                                    </div></Col>
                                <Col lg={12} sm={12}>
                                    <div className='checkBox'>
                                        <Form.Item label="Start Time">
                                        <TimePicker  format={format} />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={12} sm={12}>
                                    <div className='checkBox'>
                                        <Form.Item label="End Date">
                                            <DatePicker
                                                onChange={handleEndDate}
                                                style={{ width: '100%' }}
                                                // defaultValue={EventValues?.dob ? moment(`${EventValues?.dob}`, dateFormat) : null}
                                                format={dateFormat}
                                                // disabledDate={disabledDate}
                                            />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={12} sm={12}>
                                    <div className='checkBox'>
                                        <Form.Item label="End Time">
                                        <TimePicker format={format} />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <div className='checkBox'>
                                        <Form.Item label="Description">
                                            <Input
                                                type='text'
                                                name="description"
                                                value=''
                                                onChange={handleEventValueChange}
                                            />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <div className='checkBox'>
                                        <Form.Item label="External Event Link">
                                            <Input
                                                type='text'
                                                name="eventLink"
                                                value=''
                                                onChange={handleEventValueChange}
                                            />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <div className='checkBox'>
                                        <Form.Item label="Address">
                                            <Input
                                                type='text'
                                                name="address"
                                                value=''
                                                onChange={handleEventValueChange}
                                            />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <div className='checkBox'>
                                        <Form.Item label="Speakers">
                                            <Input
                                                type='text'
                                                name="Speakers"
                                                value=''
                                                onChange={handleEventValueChange}
                                            />
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </Form>
                <div className='polbuttonBox'>
                    <Button onClick={handleRemoveEvent}>Remove Event</Button>
                </div>
            </div>
        </>
    );
};

export default Event;
