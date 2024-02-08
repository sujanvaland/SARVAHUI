import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import OutsideClickHandler from 'react-outside-click-handler';
// import imageCompression from 'browser-image-compression';
// import Compressor from 'compressorjs';
import {  CloseOutlined } from '@ant-design/icons';
import { sendMessage } from "../../../redux/chatting/actionCreator";
import PickEmoji from '../../../components/emojiPicker';
import { FileUploading } from "../../../redux/UploadFile/actionCreator";


const { TextArea } = Input;

const MessageBox = (props) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState(null)
    const [showEmojiSelection, setshowEmojiSelection] = useState(false);
    const [cancelShareImg, setcancelShareImg] = useState(false);
    const [replyMessage, setreplyMessage] = useState({});
    const [ShowReplyModel, setShowReplyModel] = useState(false);

    const [ShareImg, SetShareImg] = useState('');
    const [PreviewImg, SetPreviewImg] = useState('');
    const trimmedMessage = (message || '').trim();
    const ref = useRef();
    const { imgAttachment } = useSelector((state) => {
        return {
            imgAttachment: state.uploadFile.shareImg?.data?.result[0],
        };
    });

    // eslint-disable-next-line react/prop-types
    const { senderId, receiverId, groupId, Reply, setReply } = props;

    useEffect(()=>{
        if(Object.keys(Reply).length > 0)
        {
            setreplyMessage(Reply);
            setShowReplyModel(true);
        }
    },[Reply])

    // const [setCompressedFile] = useState(null);
   
    const handleCloseReplyModel = () =>{
        setreplyMessage({});
        setReply({})
        setShowReplyModel(false);

    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleEmojiClick = (emojidata) => {
        let newText = message;
        newText = `${newText} ${emojidata.emoji}`
        setMessage(newText);
    }

    const handleCancelUpload = () => {
        setcancelShareImg(false);
        ref.current.value = "";
    }

    const handleShareImg = async () => {
        await dispatch(FileUploading(ShareImg, 'images/chat/', "chatting"));
        handleCancelUpload();
    }

    const handleMessageSubmit = async () => {
        const obj =
        {
            "isDeleted": false,
            "senderId": senderId,
            "receiverId": receiverId,
            "groupId": groupId,
            "replyId": replyMessage?.id || 0, 
            "message": message === null ? '' : message,
            "isDelivered": 0,
            "isRead": 0,
            "attachmentId": imgAttachment === null ? 0 : imgAttachment?.id ,
            "deleteForUserId1": 0,
            "deleteForUserId2": 0
        }
        if(message || imgAttachment?.id > 0){
            await dispatch(sendMessage(obj))
            ref.current.value = "";
            setMessage('');
        }
        setReply({});
        setreplyMessage({});
        setShowReplyModel(false);
    }

    useEffect(() => {
        handleMessageSubmit();
    }, [imgAttachment])
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && (trimmedMessage?.length > 0 || imgAttachment?.id > 0)) {
            e.preventDefault(); 
            handleMessageSubmit(); 
        }
    };

    const handleBinaryChange = async (e) => {
        const imageFile = e.target.files[0];
        SetShareImg(imageFile);
        // compression image code start with compressJS 
            // Compressor(imageFile, {
            //     quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
            //     success: (compressedResult) => {
            //         console.log('compressedResult', imageFile instanceof Blob); // true
            //       // compressedResult has the compressed file.
            //       // Use the compressed file to upload the images to your server.        
            //       setCompressedFile(compressedResult)
            //     },
            //   });
        // compression image code with compressJS end
       
        // check and reduce file size with comoress image with imageCompression plugin start
        // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
        // const options = {
        //     maxSizeMB: 1,
            // quality: 0.8,
            // maxWidthOrHeight: 1920,
            // useWebWorker: true,
        // }
        // try {
        //     const compressedFile = await imageCompression(imageFile, options);
        //     SetShareImg(compressedFile);
        //     console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        //     console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

        // } catch (error) {
        //     console.log(error);
        // }
        // check and reduce file size with comoress image with imageCompression plugin End

        SetPreviewImg(URL.createObjectURL(imageFile));
        setcancelShareImg(true);
        // await dispatch(FileUploading(e.target.files[0], 'images/profile/',"chatImg"));
    };
    
    return (
        <>
            <div className="chattboxFooter">
            { ShowReplyModel &&
                <div className="replyBottombox">
                    <h3>{replyMessage?.senderName}<span>{replyMessage?.message}</span></h3>
                    <Button className="btnReplyCross" onClick={()=>handleCloseReplyModel()}>
                        <CloseOutlined/>
                    </Button>
                </div>}
                <div className="writeChat">
                    <div className="leftbox">
                        <Button className="btnUploadimg">
                            <input type="file" ref={ref} id="fileInput" multiple onChange={(e) => handleBinaryChange(e)} />
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z" /><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z" /></svg>
                        </Button>
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,0H3A3,3,0,0,0,0,3V24H18.414L24,18.414V3A3,3,0,0,0,21,0ZM18,21.586V18h3.586ZM22,16H16v6H2V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1ZM12.75,5h3.263V6.25H14V7.388h1.864v1.25H14v2.387H12.75Zm-7.5,2V9.068A.742.742,0,0,0,6,9.819a.759.759,0,0,0,.75-.735V9H6V8H8V9.084a2,2,0,0,1-2,1.984H6A1.991,1.991,0,0,1,4,9.084v-2.1A1.991,1.991,0,0,1,6,5H6A2.013,2.013,0,0,1,8,7H6.75A.772.772,0,0,0,6,6.25.742.742,0,0,0,5.251,7Zm4.5-2H11v6.069H9.75Z" /></svg>
                        </Button>
                        <Button onClick={() => setshowEmojiSelection(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm5.666,13.746a1,1,0,0,0-1.33-1.494A7.508,7.508,0,0,1,12,16a7.509,7.509,0,0,1-4.334-1.746,1,1,0,0,0-1.332,1.492A9.454,9.454,0,0,0,12,18,9.454,9.454,0,0,0,17.666,15.746ZM6,10c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Zm8,0c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Z" /></svg>
                        </Button>
                    </div>
                    <div className="chatTextBox">
                        <TextArea
                            onChange={(e)=>handleMessageChange(e)} value={message}
                            onKeyPress={(e) => handleKeyPress(e)}
                            placeholder="Start a new message"
                            autoSize={{
                            minRows: 1,
                            }}
                        />
                        {/* <textarea name="message" value={message} onChange={handleMessageChange} rows={5} cols={30} /> */}
                    </div>
                    {trimmedMessage?.length > 0 ?
                        <Button onClick={()=>handleMessageSubmit()}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m21.916,8.727L3.965.282C2.951-.211,1.756-.041.917.713.076,1.47-.216,2.646.172,3.708c.017.043,4.411,8.296,4.411,8.296,0,0-4.313,8.251-4.328,8.293-.387,1.063-.092,2.237.749,2.993.521.467,1.179.708,1.841.708.409,0,.819-.092,1.201-.279l17.872-8.438c1.285-.603,2.083-1.859,2.082-3.278,0-1.42-.801-2.675-2.084-3.275ZM2.032,2.967c-.122-.415.138-.69.223-.768.089-.079.414-.324.838-.116.005.002,17.974,8.455,17.974,8.455.239.112.438.27.591.462H6.315L2.032,2.967Zm19.034,10.504L3.178,21.917c-.425.209-.749-.035-.838-.116-.086-.076-.346-.353-.223-.769l4.202-8.032h15.345c-.153.195-.355.357-.597.471Z" /></svg>
                        </Button> :
                        <Button disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m21.916,8.727L3.965.282C2.951-.211,1.756-.041.917.713.076,1.47-.216,2.646.172,3.708c.017.043,4.411,8.296,4.411,8.296,0,0-4.313,8.251-4.328,8.293-.387,1.063-.092,2.237.749,2.993.521.467,1.179.708,1.841.708.409,0,.819-.092,1.201-.279l17.872-8.438c1.285-.603,2.083-1.859,2.082-3.278,0-1.42-.801-2.675-2.084-3.275ZM2.032,2.967c-.122-.415.138-.69.223-.768.089-.079.414-.324.838-.116.005.002,17.974,8.455,17.974,8.455.239.112.438.27.591.462H6.315L2.032,2.967Zm19.034,10.504L3.178,21.917c-.425.209-.749-.035-.838-.116-.086-.076-.346-.353-.223-.769l4.202-8.032h15.345c-.153.195-.355.357-.597.471Z" /></svg>
                        </Button>
                    }
                    {
                        showEmojiSelection &&
                        <OutsideClickHandler
                            onOutsideClick={() => setshowEmojiSelection(false)}
                            className="emojiOuter"
                        >
                            <PickEmoji onSelect={handleEmojiClick} />
                        </OutsideClickHandler>

                    }
                    {
                        cancelShareImg &&
                        <Modal
                            type="primary"
                            title="Share post?" 
                            visible
                            footer={[
                                <Button onClick={() => handleShareImg()} className="btnBlack">Send</Button>,
                                <Button onClick={() => handleCancelUpload()}>Cancel</Button>
                            ]}
                            width={600}
                            top={20}
                            onCancel={() => setcancelShareImg(false)}
                            className="imgPreviewModal">
                            <div className="scroll imagePreview">
                                <img src={PreviewImg} alt="" />
                            </div>
                        </Modal>
                    }
                </div>
            </div>
        </>
    )
}

export default MessageBox;