/* eslint-disable react/prop-types */
import React, {  useEffect, useState } from "react";
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../../components/modals/antd-modals';
import { FileUploading } from "../../../redux/UploadFile/actionCreator";
import { GetChatUserProfile, UpdateGroupDetails } from "../../../redux/chatting/actionCreator";


const EditGroupInfoModal = (props)=>{

    const dispatch = useDispatch();
    const { setShowEditGroupModal, GroupId } = props;

    const { GroupUmgUrl, chatProfile } = useSelector((state) => {
        return {
            GroupUmgUrl: state.uploadFile.GroupImg,
            chatProfile: state.Chatting.chats.userProfile,
        };
      });

    const [GroupDetails,setGroupDetails] = useState({
        GroupName: chatProfile?.name,
        GroupImg: chatProfile?.profileImg,
    });

    useEffect(() => {
        setGroupDetails({
            ...GroupDetails,
            GroupImg : GroupUmgUrl ? GroupUmgUrl?.data?.result[0]?.actualUrl : chatProfile?.profileImg});
    }, [GroupUmgUrl])

    const handleChange = (e)=>{
        setGroupDetails({
            ...GroupDetails,
            GroupName : e.target.value});
    }

    const handleBinaryChange = async (e, imgType) => {
        await dispatch(FileUploading(e.target.files[0], 'images/groupImg/',imgType));
        await dispatch(GetChatUserProfile());
    };

    const HandleSaveGroupDetails = async ()=> {
        
        const obj = {
            groupId: GroupId,
            groupName: GroupDetails?.GroupName,
            profileImgUrl: GroupDetails?.GroupImg
        }
        await dispatch(UpdateGroupDetails(obj));
        setShowEditGroupModal(false);
    }

    return(
        <>
            <Modal
            type="primary"
            title={
                <div className="modalHeader">
                     Edit Group 
                    <Button className="btnnextheader btnBlack" onClick={()=>HandleSaveGroupDetails()}>
                        Save
                    </Button>
                </div>
            }
            visible
            onCancel={()=>setShowEditGroupModal(false)}
            footer={" "}
            width={600}
            top={20}
            className="imgPreviewModal addMessageBox editgroupModal">
            <div className="groupModalbox">
               <div className="uploadPhoto">
               {GroupDetails?.GroupImg?.length > 5 ?
                <img src={GroupDetails?.GroupImg} alt="" /> :
                <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}

                {/* <img src={require('../../../static/images/usermainpic.png')} alt=""/> */}
                <Button className="btnUploadimg">
                    <input type="file" id="fileInput"  onChange={(e) => handleBinaryChange(e, 'groupImg')}/>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" ><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z" /><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z" /></svg>
                </Button>
               </div>
               <div className="groupNameBox">
                <span className="groupnameText">Group Name</span>
               <Input
                    onChange={(e)=>handleChange(e)} value={GroupDetails?.GroupName}
                    type="text"
                />
                </div>
                </div>
        </Modal>
       
        </>
    )
}

export default EditGroupInfoModal