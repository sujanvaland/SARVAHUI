/* eslint-disable react/prop-types */
import { Button, Dropdown, Menu, Radio } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { PushpinOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import { blockUnBlockPost, changeWhoCanReply, deletePost, pinUnpinPost, } from "../../../redux/post/actionCreator";
import { blockUser, connection } from "../../../redux/connection/actionCreator";
import { Modal } from '../../../components/modals/antd-modals';

const MenuComponent = (props) => {
    const profile = JSON.parse(localStorage.getItem("profile"))
    // eslint-disable-next-line react/prop-types
    const { post, setisNotIntreseted } = props
    const [value, setValue] = useState(1);
    const [showwhyAreWeAsking, setshowwhyAreWeAsking] = useState(false);
    const [deletePostModal, setdeletePostModal] = useState(false);
    const [pinProfileModal, setpinProfileModal] = useState(false);
    const [blockPostModal, setblockPostModal] = useState(false);
    const [reportPostModal, setreportPostModal] = useState(false);
    const dispatch = useDispatch();
    const handleDeletePost = () => {
        dispatch(deletePost(post.mainpostId))
        setdeletePostModal(false)
    }

    const handleConnection = (userid) => {
        dispatch(connection(userid))

        post.isFollowing = !post.isFollowing
    }

    const handleBlockUsers = (userid, type) => {
        dispatch(blockUser(userid, type))
    }

    const handleWhoCanReply = () => {
        if (post.whoCanReply === 2) {
            dispatch(changeWhoCanReply(post.mainpostId, 1))
        } else {
            dispatch(changeWhoCanReply(post.mainpostId, 2))
        }

    }

    const handleBlockPost = () => {
        setisNotIntreseted(true);
        dispatch(blockUnBlockPost(post.mainpostId))
    }

    const handlePinPost = () => {
        dispatch(pinUnpinPost(post.mainpostId))
    }





    const menu =
        (
            <Menu className='postSidemenu'>


                {
                    profile?.userName?.toString() !== post?.userName ?
                        <>
                            <Menu.Item key="1" onClick={handleBlockPost}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" /></g></svg>
                                Non interested in this post</Menu.Item>

                            {!post?.isFollowing ?
                                <Menu.Item key="2" onClick={() => handleConnection(post.userId)}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z" /></g></svg>
                                    Follow  @{post.userName}</Menu.Item> :

                                <Menu.Item key="3" onClick={() => handleConnection(post.userId)}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z" /></g></svg>
                                    Unfollow  @{post.userName}</Menu.Item>}

                            {/*                            
                            <Menu.Item key="5" onClick={() => handleBlockUsers(post.userId, "mute")}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z" /></g></svg>
                                Mute {post.userName}</Menu.Item> */}

                            <Menu.Item key="6" onClick={() => setblockPostModal(true)}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" /></g></svg>
                                Block @{post.userName}</Menu.Item>

                            {/* <Menu.Item key="7"><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" /> </g></svg>
                                View post engagements</Menu.Item>
                            <Menu.Item key="8"><svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z" /></g></svg>
                                Embaded post</Menu.Item> */}
                            <Menu.Item key="9" onClick={() => setreportPostModal(true)}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z" /></g></svg>
                                Report post</Menu.Item>
                        </> :
                        <>
                            <Menu.Item key="1" onClick={() => handlePinPost()}><PushpinOutlined />{post?.isPinPost === 1 ? "Unpin from Profile" : "Pin to Profile"}</Menu.Item>
                            <Menu.Item key="2" onClick={() => setdeletePostModal(true)}><DeleteOutlined /> Delete post</Menu.Item>
                            <Menu.Item key="3" onClick={handleWhoCanReply}><ReloadOutlined />{post.whoCanReply === 1 ? "Everyone can reply" : "Only connections can reply"}</Menu.Item>
                        </>}
            </Menu>
        )


    const dropdownClassName = 'reportdropdown';

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    console.log(post?.isPinPost);

    return (
        <>
            {
                reportPostModal &&
                <Modal
                    type="primary"
                    title="Gathering info"
                    visible
                    footer={[
                        <Button>Submit</Button>
                    ]}
                    width={600}
                    top={20}
                    onCancel={() => setreportPostModal(false)}
                    className="reportPost">
                    <div className="project-modal scroll">
                        <h2>What type of issue are you reporting?
                            <Link to="" onClick={() => setshowwhyAreWeAsking(true)}>Why are we asking this?</Link>
                        </h2>

                        <Radio.Group onChange={onChange} value={value}>
                            <h3><Radio value={1}>Inappropriate Spiritual Content</Radio></h3>
                            <ul>
                                <li><p>Content that violates the spiritual guidelines of K4M2A. Blasphemy, sacrilege, inappropriate spiritual practices.</p></li>
                            </ul>

                            <h3><Radio value={2}>Abuse of Spiritual Values </Radio></h3>
                            <ul>
                                <li><p>Disrespectful behavior towards spiritual beliefs and practices. Mocking rituals, insulting sacred texts, offensive commentary on spiritual figures.</p></li>
                            </ul>
                            <h3><Radio value={3}>False Spiritual Information </Radio></h3>
                            <ul>
                                <li><p>Spread of misinformation or false teachings within the spiritual context. Misleading spiritual guidance, false prophecies, misinformation about spiritual practices.</p></li>
                            </ul>
                            <h3><Radio value={4}>Unauthorized Use of Copyrighted Content </Radio></h3>
                            <ul>
                                <li><p>Instances where users are sharing or using copyrighted spiritual content without proper authorization. Posting copyrighted texts, images, or videos without permission, unauthorized distribution of spiritual teachings or materials.</p></li>
                            </ul>
                            <h3> <Radio value={5}>Spiritual Harassment</Radio></h3>
                            <ul>
                                <li><p>Targeted harassment or bullying based on spiritual beliefs. Personal attacks related to one&apos;s spiritual journey, continuous harassment on spiritual forums.</p></li>
                            </ul>
                            <h3><Radio value={6}>Disruptive Spiritual Debates</Radio></h3>
                            <ul>
                                <li><p>Excessively disruptive or inappropriate debates within spiritual discussions. Provocative language, trolling in spiritual discussions, intentional disruption of peaceful conversations.</p></li>
                            </ul>
                            <h3> <Radio value={7}>Misuse of Spiritual Symbols </Radio></h3>
                            <ul>
                                <li><p>Inappropriate use or manipulation of sacred symbols and icons. Offensive use of spiritual symbols, distortion of sacred imagery.</p></li>
                            </ul>
                            <h3><Radio value={8}>Privacy Concerns </Radio></h3>
                            <ul>
                                <li><p>Sharing of private spiritual experiences without consent. Sharing personal spiritual revelations, exposing private spiritual practices without permission.</p></li>
                            </ul>
                            <h3> <Radio value={9}>Unwanted Spiritual Solicitation</Radio></h3>
                            <ul>
                                <li><p>Unsolicited messages or requests related to spiritual matters. Unwanted spiritual advice, persistent proselytizing.</p></li>
                            </ul>
                            <h3> <Radio value={10}>Disruptive Spiritual Events</Radio></h3>
                            <ul>
                                <li><p>Reporting events or gatherings that disrupt the peace and harmony of spiritual communities. Organizing disruptive protests, spreading negativity during spiritual events.</p></li>
                            </ul>
                            <h3> <Radio value={10}>Impersonation of Spiritual Figures</Radio></h3>
                            <ul>
                                <li><p>Reporting accounts impersonating recognized spiritual figures. Fake profiles of spiritual leaders, non-compliant parody accounts mocking revered personalities.</p></li>
                            </ul>
                        </Radio.Group>
                    </div>
                </Modal>
            }

            {
                deletePostModal &&
                <Modal
                    type="primary"
                    title="Delete post?"
                    visible
                    footer={[
                        <Button onClick={() => handleDeletePost(true)} className="btnRed">Delete</Button>,
                        <Button onClick={() => setdeletePostModal(false)} className="btnDefault">Cancel</Button>
                    ]}
                    width={400}
                    top={200}
                    onCancel={() => setdeletePostModal(false)}
                    className="reportPost deletePostModal">
                    <div className="project-modal scroll">
                        <p>
                            This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results.
                        </p>
                    </div>
                </Modal>
            }
            {
                blockPostModal &&
                <Modal
                    type="primary"
                    visible
                    footer={[
                        <Button onClick={() => handleBlockUsers(post.userId, "block")}  className="btnRed">Block</Button>,
                        <Button onClick={() => setblockPostModal(false)}>Cancel</Button>
                    ]}
                    width={400}
                    top={20}
                    onCancel={() => setblockPostModal(false)}
                    className="reportPost deletePostModal">
                    <div className="project-modal scroll">
                        <h1><p>Block @{post.userName}?</p></h1>
                        <p>
                            They will not be able to follow you or view your posts, and you will not see posts or notifications from @{post.userName}.
                        </p>
                    </div>
                </Modal>
            }
            {
                pinProfileModal &&
                <Modal
                    type="primary"
                    title="Highlight your best content instead"
                    visible
                    footer={[
                        <Button>Highlight</Button>,
                        <Button onClick={() => handlePinPost()}>{post?.isPinPost === 1 ? "Unpin" : "Pin"}</Button>,
                        <Button onClick={() => setpinProfileModal(false)}>Cancel</Button>
                    ]}
                    width={600}
                    top={20}
                    onCancel={() => setpinProfileModal(false)}
                    className="reportPost">
                    <div className="project-modal scroll">
                        <p>
                            With Highlights, you can curate all your best posts on your profile.
                        </p>
                    </div>
                </Modal>
            }

            {
                showwhyAreWeAsking &&
                <Modal
                    type="primary"
                    visible
                    footer={[
                        <Button onClick={() => setshowwhyAreWeAsking(false)}>Got it</Button>
                    ]}
                    width={600}
                    top={20}
                    onCancel={() => setreportPostModal(false)}
                    className="reportPost"
                >
                    <div className="project-modal scroll">
                        <p>
                            Rather than having you figure out what rule someone violated, we want to know what you’re
                            experiencing or seeing. This helps us figure out what’s
                            going on here and resolve the issue more quickly and accurately.
                        </p>
                    </div>
                </Modal>
            }

            <Dropdown overlay={menu} trigger={['click']}
                overlayClassName={dropdownClassName}
                placement="bottomRight" width={100}>
                <Button className="ant-dropdown-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></g></svg>
                </Button>
            </Dropdown>
        </>
    )
}

export default MenuComponent;