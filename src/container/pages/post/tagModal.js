import React, { useEffect } from "react";
import Modal from "antd/lib/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import { MessageMainBox, MessageMainBoxInner } from "../style";
import { connection } from "../../../redux/connection/actionCreator";
import { GetMentionList } from "../../../redux/post/actionCreator";

const TagModal = (props) => {

    const dispatch = useDispatch();
    // eslint-disable-next-line react/prop-types
    const { data, IsMention, onClose } = props

    const UserProfile = JSON.parse(localStorage.getItem('profile'));

    const { details, Loading  } = useSelector((state) => ({
        details: state?.Post?.getMentionList,
        Loading: state?.Post?.IsMentionLoading,
    }));

    const handleMention = async () => {
        if (IsMention) {
          await dispatch(GetMentionList(data));
        }
    };

    useEffect(() => {
        handleMention();
    }, [])

    const handleConnection = async (id) => {
        await dispatch(connection(id));
        handleMention();
    };

    return (
        <>
            <Modal
                type="primary"
                title={
                    <div className="modalHeader">
                        In this Photo
                    </div>
                }
                visible
                footer={" "}
                onCancel={onClose}
                className="imgPreviewModal addMessageBox" >

                {Loading &&
                (
                    <Col xs={24}>
                      <div className="spin scroll">
                        <Spin indicator={
                          <LoadingOutlined
                            style={{
                              fontSize: 24,
                            }}
                            spin
                          />
                        } />
                      </div>
                    </Col>
                  )
                }

                {!Loading &&
                    <MessageMainBox className="messagaBoxUsers">
                    {details && details?.length > 0 ? (
                        details?.map((User) => (
                            <MessageMainBoxInner className="Msgboxuser">
                                <div className="userPic" >
                                    {User?.profileImgUrl?.length > 5 ?
                                        <img src={User.profileImgUrl} alt="" /> :
                                        <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                                </div>
                                <div className="nameMsgBox">
                                    <div className="namedtls">
                                        <div>
                                            <span className="uname">{User.fullName}</span>
                                            <span className="accountname">@{User.userName}</span>
                                            <div className="flex row flextart aligncenter">
                                                <span className="uname">{User.about}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {UserProfile?.id === User.id ?
                                   ""
                                    :
                                    <>
                                        {User.isfollowing === 1 ?
                                            <Button className="btnBlack btnRound" onClick={() => handleConnection(User.id)}>
                                                UnFollow
                                            </Button> :
                                            <Button className="btnBlack btnRound" onClick={() => handleConnection(User.id)}>
                                                Follow
                                            </Button>} </>}
                            </MessageMainBoxInner>
                        ))
                    ) : (
                       ""
                    )}
                </MessageMainBox>}

            </Modal>
        </>
    )

}

export default TagModal;