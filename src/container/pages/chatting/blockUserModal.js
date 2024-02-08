/* eslint-disable react/prop-types */
import React from "react"; 
import { Button} from "antd";
import { useDispatch } from "react-redux";
import { Modal } from '../../../components/modals/antd-modals';
import { GetChatUserProfile } from "../../../redux/chatting/actionCreator";
import { blockUser } from "../../../redux/connection/actionCreator";


const BlockUserModal = (props)=>{
    const dispatch = useDispatch();
    const { setShowBlockUserModal, setUserDetails, UserDetails } = props;

    const handleCancel =() =>{
        setShowBlockUserModal()
        setUserDetails([])
    }

    const handleBlockUsers = (data) => {
        dispatch(blockUser(data?.userId,  "block"))
        dispatch(GetChatUserProfile());
        setShowBlockUserModal()
        setUserDetails([])
    }

    return(
        <>
                    <Modal
                    type="primary"
                    title=""
                    visible
                    footer={[
                        <Button  className="btnRed" onClick={()=>handleBlockUsers(UserDetails)}>Yes</Button>,
                        <Button onClick={() => handleCancel()} className="btnDefault">Cancel</Button>
                    ]}
                    width={320}
                    top={200}
                    onCancel={()=>handleCancel()}
                    className="reportPost deletePostModal blockUserModal">
                    <div className="project-modal scroll">
                        <p>
                        Block @{UserDetails?.firstName}, @{UserDetails?.firstName} will no longer be able to follow or message you, and you will not see notifications from @{UserDetails?.firstName} 
                        </p>
                    </div>
                </Modal>
            
       
        </>
    )
}

export default BlockUserModal