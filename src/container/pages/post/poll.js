import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

function PollBar(props) {

    // eslint-disable-next-line react/prop-types
    const { setShowPoll, setPollVal } = props;
    const { userprofile } = useSelector((state) => ({
        userprofile: state?.auth.userprofile
    }));
    const { Option } = Select;

    const [PollValues, setPollValues] = useState({
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

    const handleAddChoice = () => {
        const currentChoicesCount = Object.keys(PollValues).filter((key) => key.includes('choice')).length;

        if (currentChoicesCount < 4) {
            const newChoiceKey = `choice${currentChoicesCount + 1}`;
            setPollValues((prevValues) => ({
                ...prevValues,
                [newChoiceKey]: '',
            }));
        }
    };

    const handlePollValueChange = (e) => {
        setPollValues({
            ...PollValues,
            [e.target.name]: e.target.value
        })
        setPollVal({
            ...PollValues,
            [e.target.name]: e.target.value
        })

    }

    const handlePollDayChange = (d) => {
        setPollValues({
            ...PollValues,
            day: d
        })
        setPollVal({
            ...PollValues,
            day: d
        })
    }

    const handlePollHourChange = (h) => {
        setPollValues({
            ...PollValues,
            hour: h
        })
        setPollVal({
            ...PollValues,
            hour: h
        })
    }

    const handlePollMinuteChange = (m) => {
        setPollValues({
            ...PollValues,
            minute: m
        })
        setPollVal({
            ...PollValues,
            minute: m
        })
    }

    const handleRemovePoll = () => {
        setShowPoll(false);
        setPollValues({
            choice1: '',
            choice2: '',
            day: '1',
            hour: '0',
            minute: '0',
        })
    }

    const generateOptions = (start, end) => {
        const options = [];
        // eslint-disable-next-line no-plusplus
        for (let i = start; i <= end; i++) {
            options.push(
                <Option key={String(i)} value={String(i)}>
                    {i}
                </Option>
            );
        }
        return options;
    };

    const shouldShowMinutesOptions = PollValues.day > 0 || PollValues.hour > 0;

    return (
        <>
           
                <div className='polMainBox'>
                    <div className='polTextBox'>
                        <div className='polcheckboxmain'>
                            {Object.keys(PollValues).map((key, index) => {
                                if (key.includes('choice')) {
                                    const choiceNumber = key.replace('choice', '');
                                    return (
                                        <div key={index} className='checkBox'>
                                            <Input
                                                type='text'
                                                placeholder={`Choice ${choiceNumber}`}
                                                name={key}
                                                value={PollValues[key]}
                                                onChange={handlePollValueChange}
                                            />
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                        <div className='polqueAdd'>
                            {Object.keys(PollValues).filter((key) => key.includes('choice')).length < 4 && (
                                <Button onClick={handleAddChoice}><PlusOutlined /></Button>
                            )}
                        </div>
                    </div>
                    <div className='pollengthbox'>
                        <p> Poll length</p>
                        <ul>
                            <li><span>Days</span>
                                <Select placeholder='Days' name="day" value={PollValues.pollday} onChange={handlePollDayChange}>
                                    {generateOptions(0, 7)}
                                </Select>
                            </li>
                            <li><span>Hours</span>
                                <Select placeholder='Hours' name="hour" value={PollValues.pollhour} onChange={handlePollHourChange} disabled={PollValues.day === 7}>
                                    {generateOptions(0, 23)}
                                </Select>
                            </li>
                            <li><span>Minutes</span>
                                <Select placeholder='Minutes' name="minute" value={PollValues.pollminute} onChange={handlePollMinuteChange} disabled={PollValues.day === 7}>
                                    {shouldShowMinutesOptions ? generateOptions(0, 59) : generateOptions(5, 59)}
                                </Select>
                            </li>
                        </ul>
                    </div>
                    <div className='polbuttonBox'>
                        <Button onClick={handleRemovePoll}>Remove Poll</Button>
                    </div>
                </div>
        </>
    );
};

export default PollBar;
