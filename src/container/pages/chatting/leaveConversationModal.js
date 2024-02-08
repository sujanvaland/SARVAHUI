/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { Modal } from '../../../components/modals/antd-modals';
import { LeaveGroupConversation } from "../../../redux/chatting/actionCreator";


const LeaveConversationModal = (props)=>{

    const dispatch = useDispatch();

    const { handleLeaveConfirm, CloseLeaveConfirmation, GroupId,  } = props;

    const HandleLeaveGroup = ()=>{
        dispatch(LeaveGroupConversation(GroupId));
        handleLeaveConfirm();
    }

    const onCancel =() =>{
        CloseLeaveConfirmation();
    }

    return(
        <>
            <Modal
            type="primary"
            visible
            title="Leave Conversation?"
            onCancel={()=>onCancel()}
            footer={[
                <Button className="btnRed" onClick={()=>HandleLeaveGroup()}>Leave</Button>,
                <Button onClick={() => onCancel()} className="btnDefault">Cancel</Button>
            ]}
            width={400}
            top={20}
            className="reportPost deletePostModal">
               <p>This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it. </p>
        </Modal>
       
        </>
    )
}

export default LeaveConversationModal