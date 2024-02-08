import React, { useState } from "react";
import { Button, Tabs } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import FindUser from "../../chatting/findUser";

const { TabPane } = Tabs;

const Members = () => {

    const [showAddMemberButton, setShowAddMemberButton] = useState(true);
    const [showAddMemberModal, setShowAddMemberModal] = useState(false);

    const handleTabChange = (key) => {
        setShowAddMemberButton(key === "1");
    };

    const handleAddMemberModalOpen = () => {
        setShowAddMemberModal(true);
    }
    const handleAddMemberModalClose = () => {
        setShowAddMemberModal(false);
    }

    return (
        <>
            <div>
                <div>
                    <h3>Members</h3>
                    {showAddMemberButton &&
                        <Button onClick={handleAddMemberModalOpen}><UserAddOutlined /></Button>
                    }
                </div>
                <div>
                    <Tabs defaultActiveKey="1" onChange={handleTabChange}>
                        <TabPane tab="All" key="1">
                            <p>All</p>
                        </TabPane>
                        <TabPane tab="Moderators" key="2">
                            <p>Moderators</p>
                        </TabPane>
                    </Tabs>
                </div>
                {showAddMemberModal &&
                <FindUser onClose={() => handleAddMemberModalClose()} IsInvite/>

                }
            </div>

        </>
    )
};

export default Members;