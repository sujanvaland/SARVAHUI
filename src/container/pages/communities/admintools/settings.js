import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Radio } from "antd";

const Settings = () => {
    const [communityName, setCommunityName] = useState(false);
    const [purpose, setPurpose] = useState(false);
    const [approvalQuestion, setApprovalQuestion] = useState(false);
    const [pinnedHashtags, setPinnedHashtags] = useState(false);
    const [membershipType, setMembershipType] = useState(false);


    const changeStep = (step) => {
        setCommunityName(false);
        setPurpose(false);
        setApprovalQuestion(false);
        setPinnedHashtags(false);
        setMembershipType(false);
        switch (step) {
            case 'communityName':
                setCommunityName(true);
                break;
            case 'purpose':
                setPurpose(true);
                break;
            case 'approvalQuestion':
                setApprovalQuestion(true);
                break;
            case 'pinnedHashtags':
                setPinnedHashtags(true);
                break;
            case 'membershipType':
                setMembershipType(true);
                break;
            default:
                break;
        }
    };


    return (
        <>
                        {!communityName && !purpose && !approvalQuestion && !pinnedHashtags && !membershipType &&
                            <>
                                <div>
                                    <p><h3>Settings</h3></p>
                                </div>
                                <div>
                                    <Input type="file" />
                                </div>
                                <div>
                                    <div>
                                        <p><h3>Community information</h3></p>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#" onClick={() => changeStep('communityName')}>Name<RightOutlined /></Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={() => changeStep('purpose')}>Purpose<RightOutlined /></Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={() => changeStep('approvalQuestion')}>Approval question<RightOutlined /></Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={() => changeStep('pinnedHashtags')}>Pinned hashtags<RightOutlined /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <p><h3>Membership</h3></p>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#" onClick={() => changeStep('membershipType')}>Membership type<RightOutlined /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <Link to="#">Delete Community</Link>
                                </div>
                            </>
                        }


                        {communityName &&
                            <div>
                                <div>
                                    <h3>Edit Community name</h3>
                                </div>
                                <div>
                                    <Input type="text" placeholder="Community Name" />
                                    <span><h5>
                                        Name must be between 3 and 30 characters and can’t include hashtags or @usernames
                                    </h5></span>
                                </div>
                                <div>
                                    <Button onClick={() => changeStep('')}>Save</Button>
                                </div>
                            </div>
                        }

                        {purpose &&
                            <div>
                                <div>
                                    <h3>Edit Purpose</h3>
                                </div>
                                <div>
                                    <Input type="text" placeholder="Community Purpose" />
                                    <span><h5>
                                        A strong purpose describes your Community and lets people know what to expect
                                    </h5></span>
                                </div>
                                <div>
                                    <Button onClick={() => changeStep('')}>Save</Button>
                                </div>
                            </div>
                        }

                        {approvalQuestion &&
                            <div>
                                <div>
                                    <h3>Edit question</h3>
                                </div>
                                <div>
                                    <Input type="text" placeholder="Approval question" />
                                    <span><h5>
                                        When users request to join, they can answer this question.
                                        Their response will be shown with their request.
                                        You may remove the question by leaving it blank.
                                    </h5></span>
                                </div>
                                <div>
                                    <Button onClick={() => changeStep('')}>Save</Button>
                                </div>
                            </div>
                        }

                        {pinnedHashtags &&
                            <div>
                                <div>
                                    <h3>Edit pinned hashtags</h3>
                                </div>
                                <div>
                                    <Input type="text" placeholder="Approval question" />
                                    <span><h5>
                                        Pin hashtags to organize your community’s posts on separate timelines
                                    </h5></span>
                                </div>
                                <div>
                                    <Button onClick={() => changeStep('')}>Save</Button>
                                </div>
                            </div>
                        }

                        {membershipType &&
                            <div>
                                <div>
                                    <h3>Membership</h3>
                                </div>
                                <span><h5>
                                    Control who can join your Community. Keep in mind all Communities are visible to everyone on X.
                                </h5></span>
                                <div>
                                    <Radio.Group>
                                        <Radio name="open"><p>Open</p>
                                            <span className="smallfnt"> Anyone can join and/or be invited to the Community.</span></Radio>
                                        <br />
                                        <Radio name="restricted"><p>Restricted</p>
                                            <span className="smallfnt">People must ask to join, and the mod team must approve those requests. People invited by the mod team are automatically approved.</span></Radio>
                                    </Radio.Group>
                                </div>
                                <div>
                                    <Checkbox>
                                        Allow members to issue invitations
                                        <span>People invited by existing members are automatically approved.</span>
                                    </Checkbox>
                                </div>
                                <div>
                                    <Button onClick={() => changeStep('')}>Save</Button>
                                </div>
                            </div>

                        }
        </>
    )
};

export default Settings;
