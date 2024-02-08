/* eslint-disable react/prop-types, react/destructuring-assignment */
import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { savePollVote } from "../../../redux/post/actionCreator";
import { PolpostBox } from '../style';
import { DataService } from "../../../config/dataService/dataService";
import { pollTime } from "../../../utility/utility";

function ViewPoll(props) {

    const dispatch = useDispatch();
    const { pollId, id } = props.post;
    // const { polldetails } = useSelector((state) => ({
    //     polldetails: state?.Post?.polldetails,
    // }));
    const [polldetails, setpolldetails ] = useState({})
   
    const handlePoll = async () => {
        if (pollId > 0) {
            const res = await DataService.get(`Poll/GetPollDetails?PollId=${pollId}`)
            if (res.data.message === "Success") 
            {
              setpolldetails(res.data.result);
            }
        }
    };

    useEffect(() => {
        handlePoll();
    }, [pollId])

    const handlePollVote =async (e) => {
        const obj = {
            "pollId": pollId,
            "userId": 0,
            "choice": e.target.value
        }
       await dispatch(savePollVote(obj, id));
       handlePoll();
    }
   
    return (
        <>
            <PolpostBox>
                <div className="polPostbox">
                    {
                        polldetails && polldetails.isVoted === "" && polldetails.isValid &&
                        <div className="polradio">
                            <Radio.Group name={`poll${pollId}`} onChange={(e) => handlePollVote(e)} key={pollId}>
                                {polldetails?.choice1 &&
                                    <Radio value={polldetails?.choice1} name="choice1">{polldetails?.choice1}   </Radio>}
                                {polldetails?.choice2 &&
                                    <Radio value={polldetails?.choice2} name="choice2">{polldetails?.choice2}   </Radio>}
                                {polldetails?.choice3 &&
                                    <Radio value={polldetails?.choice3} name="choice3">{polldetails?.choice3}   </Radio>}
                                {polldetails?.choice4 &&
                                    <Radio value={polldetails?.choice4} name="choice4">{polldetails?.choice4}    </Radio>}

                            </Radio.Group>
                            <div className="totalPolCount">
                                <p>Total Vote : {polldetails?.totalVote}</p>
                                <p>{pollTime(polldetails?.validTill)}</p>
                            </div>
                        </div>
                    }
                    {
                        polldetails && (polldetails.isVoted !== "" || !polldetails.isValid) &&
                        <div className="polradio votted" disabled>
                            <Radio.Group value={polldetails.isVoted} key={pollId} disabled>
                                {polldetails?.choice1 &&
                                    <Radio value={polldetails?.choice1} name="choice1" ><span className="valueMain">{polldetails?.choice1}  <span> {polldetails?.choice1Per}%</span></span></Radio>}
                                {polldetails?.choice2 &&
                                    <Radio value={polldetails?.choice2} name="choice2" ><span className="valueMain">{polldetails?.choice2}   <span>{polldetails?.choice2Per}%</span></span></Radio>}
                                {polldetails?.choice3 &&
                                    <Radio value={polldetails?.choice3} name="choice3" ><span className="valueMain">{polldetails?.choice3}   <span>{polldetails?.choice3Per}%</span></span></Radio>}
                                {polldetails?.choice4 &&
                                    <Radio value={polldetails?.choice4} name="choice4" ><span className="valueMain">{polldetails?.choice4}    <span>{polldetails?.choice4Per}%</span></span></Radio>}

                            </Radio.Group>
                            <div className="totalPolCount">
                                <span><p>Total Vote : {polldetails?.totalVote}</p></span>
                                <span><p>· Final Result</p></span>
                            </div>
                        </div>
                    }
                </div>
            </PolpostBox>
        </>
    )
};

export default ViewPoll;