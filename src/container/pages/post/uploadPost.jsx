/* eslint-disable react/prop-types */
import { Button, Image, Radio, Dropdown } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PollBar from './poll';
import Event from './event';
// import EditorConvertToHTML from './editorConvertToHtml';
import { postUpload, extractMetaFromUrl } from '../../../redux/post/actionCreator';
import { postobj } from '../../../utility/postobj';
import PickEmoji from '../../../components/emojiPicker';
import TextInput from '../../../components/text-editor/TextInputs';
import FindUser from '../chatting/findUser';
// import { GetSearchUser } from '../../../redux/SearchUsers/actionCreator';


// const { TextArea } = Input;
const UploadPost = (props) => {

    const { parentid, closeModel, placeholder,type } = props
    const dispatch = useDispatch();
    const { metaData, post, userprofile } = useSelector((state) => ({
        metaData: state?.Post?.metaData,
        post: state?.Post,
        userprofile: state?.auth.userprofile
    }));

    const [imgPrev, setimgPrev] = useState([]);
    const [videoPrev, setvideoPrev] = useState([]);
    const [postdata, setPostData] = useState(postobj);
    const [filestate, setFilesstate] = useState([])
    const [WhoCanReply, setWhoCanReply] = useState("1")
    const [showEmojiSelection, setshowEmojiSelection] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [ShowPoll, setShowPoll] = useState(false);
    const [ShowEvent, setShowEvent] = useState(false);
    const [PollValues, setPollValues] = useState(null);
    const [EventValues, setEventValues] = useState(null);

    const [controller, setController] = useState(null);
    const [clearText, setclearText] = useState(false);


    const videoRef = useRef(null);
    const [isTagModalOpen, setIsTagModalOpen] = useState(false);
    const [TagUser, setTagUser] = useState([]);
    const handleCloseTagModel = () => {
        setIsTagModalOpen(false);
    }

    console.log("TagUser",TagUser);
    const isVideoUrl = (name) => {
        const videoFormat = [".mp4", ".avi", ".mov", ".wmv", ".flv", ".mkv", ".webm", ".mpeg", ".mpg", ".3gp"]
        // Check if the name ends with any video format extension
        const hasVideoExtension = videoFormat.some(format => name.toLowerCase().endsWith(format));
        return hasVideoExtension;
    }

    const isImgUrl = (name) => {
        const videoFormat = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".bmp", ".tiff", ".webp"]
        // Check if the name ends with any video format extension
        const hasVideoExtension = videoFormat.some(format => name.toLowerCase().endsWith(format));
        return hasVideoExtension;
    }

    useEffect(() => {

        // eslint-disable-next-line array-callback-return
        const imgPrev = filestate.map(x => {
            if (isImgUrl(x.filedata?.name)) {
                return window.URL.createObjectURL(new Blob([x.filedata]))
            }
        })

        // eslint-disable-next-line array-callback-return
        const videoPrev = filestate.map(x => {
            if (isVideoUrl(x.filedata?.name)) {
                setSelectedVideo(URL.createObjectURL(x.filedata));
                return window.URL.createObjectURL(new Blob([x.filedata]))
            }
        })
        setimgPrev(imgPrev)
        setvideoPrev(videoPrev);

    }, [filestate])



    const clearStates = () => {
        setFilesstate([])
        setPostData(postobj)
    }

    function extractURLs(text) {
        const regex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
        const urls = text?.match(regex);
        return urls ? urls[0] : "";
    }

    const handlePostTextChange = (htmlContent, rawContent, mentions) => {
        if (rawContent) {
            const url = extractURLs(rawContent);
            if (url?.length > 0) {
                dispatch(extractMetaFromUrl(url));
            }
            setPostData({
                ...postdata,
                mentions,
                textMsg: htmlContent,
                url
            })

            setclearText(false);
        }

    }

    function handlePostUpload() {
        const newController = new AbortController();
        setController(newController);

        const obj = {
            ...postdata,
            tagUser:TagUser,
            whoCanReply: parseInt(WhoCanReply),
            poll: PollValues ? JSON.stringify(PollValues) : null,
            type: type || "post",
            parentId: parentid || 0,
        }

        const filearr = filestate.map(x => x.filedata)
        dispatch(postUpload(filearr, obj, clearStates))
        setclearText(true);
        setShowPoll(false);
        if (closeModel) {
            closeModel();
        }
        setTagUser([]);
        return () => {
            if (controller) {
                controller.abort();
            }
        };
    }

    const handleBinaryChange = (e) => {
        const arr = Array.from(e.target.files).map((x, i) => {
            return {
                id: i,
                filedata: x
            }
        })
        setFilesstate(arr)
    };

    const cancelPostingRequest = () => {
        if (controller) {
            controller.abort();
        }
    };

    const handleBinaryDelete = () => {
        setFilesstate([])
    }

    const handleRemoveImage = (index) => {
        const updatedFileState = [...filestate];
        updatedFileState.splice(index, 1);
        setFilesstate(updatedFileState);
    };

    const openExternalUrl = (url) => {
        window.open(url, '_blank');
    }

    // eslint-disable-next-line react/prop-types
    const MetaDataRenderer = () => {
        if (postdata.url) {
            const ogSiteName = metaData?.find(item => item.property === 'og:site_name')?.content;
            const ogImage = metaData?.find(item => item.property === 'og:image')?.content;
            const description = metaData?.find(item => item.name === 'description' || item.name === 'og:description')?.content;

            return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div onClick={() => openExternalUrl(postdata.url)}>
                    {ogSiteName && <h2>{ogSiteName}</h2>}
                    {ogImage && <img src={ogImage} width={400} alt='' />}
                    {description && <p>{description}</p>}
                    {/* {postdata.url && <a href={postdata.url}>{postdata.url}</a>} */}
                </div>
            );
        }
    };

    const handleWhoCanReply = (e) => {
        setWhoCanReply(e.target.value);
    }

    const handleEmojiClick = (emojidata) => {
        let newText = postdata.textMsg;
        newText = `${newText} ${emojidata.emoji}`
        setPostData({
            ...postdata,
            textMsg: newText,
        })
    }

    const setPollVal = (d) => {
        setPollValues(d);
    }

    const setEventVal = (d) => {
        setEventValues(d);
    }
    console.log("EventValues",EventValues);

    const whocanreplyMenu = (
        <div className='accessAppllybox'>
            <Radio.Group onChange={(e) => handleWhoCanReply(e)} value={WhoCanReply}>
                <Radio key="1" value='1'>Everyone can reply</Radio>
                <Radio key="2" value='2'>Only my connections</Radio>
            </Radio.Group>
        </div>
    );



    const firstUser = TagUser[0];

    // const handleRemoveThreads = (id)=> {
    //     const newThreads = TagUser.filter(user => user.id !== id);
    //     setTagUser(newThreads);
    // }
    
    return (
        <>
            <div className='uploadbox'>
                <div className='innerSearchbox'>
                    <div className='avtarbox'>
                        {userprofile?.profileImg?.length ?
                            <img src={userprofile.profileImg} alt='' /> :
                            <img src={require('../../../static/images/img_userpic.jpg')} alt='' />}
                    </div>
                    <div className='posttextbox'>
                        {/* <EditorConvertToHTML handlePostTextChange={(htmlContent,rawContent)=>handlePostTextChange(htmlContent,rawContent)}
                        placeholder={type === "comment"? `Reply to @${replyTo}` : "Share your spiritual journey!"}/> */}
                        <TextInput
                        handleEditorTextChange={(htmlContent, rawContent, mentions) => handlePostTextChange(htmlContent, rawContent, mentions)}
                        clearText={clearText}
                        // textMsg={postdata.textMsg}
                        placeholder={placeholder} />
                      
                        
                        {/* <TextArea
                            value={postdata.textMsg}
                            
                            
                            autoSize={ postdata?.textMsg?.length > 0 && { minRows: 3}}
                        /> */}

                        {postdata.url?.length > 0 && (
                            // eslint-disable-next-line jsx-a11y/control-has-associated-label
                            <div tabIndex={0} style={{ cursor: 'pointer' }}
                                role="link">
                                <MetaDataRenderer metaData={metaData} />
                            </div>
                        )
                        }
                        {imgPrev?.length > 0 &&
                            <ul>
                                {imgPrev?.length > 0 &&
                                    imgPrev?.map((item, i) => {

                                        return (
                                            item &&
                                            <li className='imgpreviewbox'>
                                                <Button className="btnimgclose" onClick={() => handleRemoveImage(i)}>
                                                    <CloseOutlined />
                                                </Button>
                                                <Image src={item} />
                                            </li>
                                        )
                                    })
                                }
                                {videoPrev?.length > 0 &&
                                    videoPrev?.map((item, i) => {
                                        return (
                                            item &&
                                            <li className='imgpreviewbox'>
                                                <Button className="btnimgclose" onClick={() => handleBinaryDelete(i)}>
                                                    <CloseOutlined />
                                                </Button>
                                                <video ref={videoRef} autoPlay muted controls controlsList="nodownload" className='videobox'>
                                                    <source src={selectedVideo} type="video/mp4" />
                                                    <source src={selectedVideo} type="video/webm" />
                                                    {/* Add more <source> elements for additional video formats */}
                                                    Your browser does not support the video tag.
                                                </video>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                        {
                            imgPrev?.length > 0 &&
                            <>
                                <h6><Link to="#" onClick={() => setIsTagModalOpen(true)}><UserOutlined /> Tag people</Link></h6>
                                {TagUser && <h5> 
                                    <Link to="#" onClick={() => setIsTagModalOpen(true)} >
                                    <span>{firstUser?.firstName}{" "}{firstUser?.lastName}{"  "}</span>
                                    {TagUser?.length > 1 ? (
                                        <>
                                            <span> and {TagUser.length - 1} more</span>
                                        </>
                                    ) : null}
                                    </Link></h5>}
                                {isTagModalOpen &&
                                    <FindUser onClose={handleCloseTagModel} setTagUser={(user) => setTagUser(user)} TagUser={TagUser} IsTag />
                                }
                            </>

                        }

                        <div>
                            {
                                ShowPoll &&
                                <PollBar setPollVal={(e) => setPollVal(e)}
                                    setShowPoll={setShowPoll} />
                            }

                        </div>
                        <div>
                            {
                                ShowEvent &&
                                <Event setEventVal={(e) => setEventVal(e)}
                                    setShowEvent={setShowEvent} />
                            }

                        </div>
                        {postdata?.textMsg?.length > 0 &&
                            <div className='btnreplyBox'>
                                <Dropdown overlay={whocanreplyMenu} placement='topRight' trigger={['click']}  >
                                    <Button className='btnreply'>
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z" /></g></svg>
                                        {WhoCanReply === "1" ? "Everyone can reply" : "Only connections can reply"}
                                    </Button>
                                </Dropdown>
                            </div>
                        }
                        <div className='mainPostIconbox'>
                            <div className='posticonsbtn'>
                                <div className='iconsbtnbox'>
                                    {
                                        post.loading && <div id="progressBar">
                                            <div id="progressBarFill" />
                                            <p>Progress: {post?.progress}</p><Link to="#" onClick={cancelPostingRequest}>cancel posting</Link>
                                        </div>
                                    }
                                    <Button className='btnfileupload'>
                                        <input type="file" id="fileInput" multiple onChange={handleBinaryChange} />
                                        <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" /> </g></svg>
                                    </Button>
                                    {/* <Button>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" /></g></svg>
                                    </Button> */}
                                    <Button onClick={() => setShowPoll(true)} >
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z" /></g></svg>
                                    </Button>
                                    <Button onClick={() => setshowEmojiSelection(true)}>
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z" /> </g></svg>
                                    </Button>
                                    <Button onClick={() => setShowEvent(true)} >
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z" /></g></svg>
                                    </Button>
                                    {/* <Button>
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z" /> </g></svg>
                                    </Button>
                                    <Button>
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" /> </g></svg>
                                    </Button> */}
                                </div>

                                {
                                    postdata?.textMsg.length > 0 || filestate.length > 0 ?
                                        <Button className='btnbluepost' onClick={handlePostUpload}>Post</Button> :
                                        <Button className='btnbluepost' disabled>Post</Button>
                                }

                            </div>
                            {
                                showEmojiSelection &&
                                <OutsideClickHandler
                                    onOutsideClick={() => setshowEmojiSelection(false)}
                                    className="emojiOuter"
                                >
                                    <PickEmoji onSelect={handleEmojiClick} />
                                </OutsideClickHandler>

                            }
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}

export default UploadPost;