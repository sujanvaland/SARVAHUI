/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "antd";
import Link from "antd/lib/typography/Link";
import { Modal } from '../../../components/modals/antd-modals';


const ReportGroupModal = (props) => {

    const { setShowReportGroupModal, UserDetails, setUserDetails } = props;
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(UserDetails);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const onCancel =()=>{
        setUserDetails([]);
        setShowReportGroupModal(false)
    }

    return (
        <>
            <Modal
                type="primary"
                title={
                    <>
                        <h2><Link to="#" className="btnBacklink">
                            <img src={require('../../../static/images/icon_back.png')} alt="" />
                        </Link> Report an issue</h2>
                    </>
                }
                visible
                onCancel={() =>onCancel()}
                footer={" "}
                width={600}
                top={20}
                className="imgPreviewModal addMessageBox editgroupModal">
                <div className="reportSpamBox">
                    {(selectedOption !== "spam" && selectedOption !== "abusive" && selectedOption !== "Report") &&
                        (
                            <h2>Help us understand the issue. What’s the problem with this conversation?</h2>
                        )}
                    {(selectedOption !== "spam" && selectedOption !== "abusive" && selectedOption !== "Report") && (
                        <ul>
                            <Link to="#" onClick={() => handleOptionSelect("spam")}><li>It’s spam</li></Link>
                            <Link to="#" onClick={() => handleOptionSelect("abusive")}><li>It’s abusive or harmful</li></Link>
                            <li>
                                <p>
                                    <Link to="#">Learn more</Link> about reporting violations of our rules
                                </p>
                            </li>
                        </ul>
                    )}
                    {selectedOption === "spam" && (
                        <div className="sendReportButton">
                            <h1><p>
                                Are you sure you would like to report @{UserDetails?.firstName} ?
                            </p></h1>
                            <p>
                                The conversation will be deleted from your inbox. @{UserDetails?.firstName} cannot message you again until you message them first.
                            </p>
                            <Button onClick={() => handleOptionSelect("Report")}>Send Report to K4M2A</Button>
                        </div>
                    )}
                    {selectedOption === "Report" &&
                        <>
                            <div>
                                <h2>Thanks for letting us know.</h2>
                                <p>
                                    Thanks, your feedback helps us make K4M2A better for everyone.
                                    While we may not review your report manually, we’ll use it to improve the platform.
                                </p>
                                <p>
                                    In the meantime, here are some ways to
                                    <Link to="#"> improve your experience</Link> on K4M2A:
                                </p>
                                <div>
                                    <Button>Block @{UserDetails?.firstName}</Button>
                                </div>
                            </div>

                            <div>
                                <p>
                                    Block @{UserDetails?.firstName} from following you, viewing your posts, or messaging you.
                                    By blocking them, you also won’t see any posts or notifications from them.
                                </p>
                                <div>
                                    <Button>Mute @{UserDetails?.firstName}</Button>
                                </div>
                                <p>
                                    Remove @{UserDetails?.firstName}’s posts from your timeline without unfollowing or blocking them.
                                </p>
                            </div>
                        </>
                    }
                    {selectedOption === "abusive" && (
                        <div>
                            <h1><p>
                                Are you sure you would like to report @{UserDetails?.firstName} ?
                            </p></h1>
                            <p>
                                The conversation will be deleted from your inbox. @{UserDetails?.firstName} cannot message you again until you message them first.
                            </p>
                            <Button onClick={() => handleOptionSelect("Report")}>Send Report to K4M2A</Button>
                        </div>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default ReportGroupModal;