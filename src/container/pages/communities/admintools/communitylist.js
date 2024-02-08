import React, { useState } from "react";
import { Button, Checkbox, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";

const CommunityList = () => {

    const [showCreateListModal, setshowCreateListModal] = useState(false);

    const handleCreateListModal = () => {
        setshowCreateListModal(true);
    };

    const handleCreateListModalClose = () => {
        setshowCreateListModal(false);
    }


    return (
        <>
            <div>
                <div>
                    <div>
                        <p><h3>
                            Community List
                        </h3></p>
                    </div>
                    <div>
                        <p><h3>
                            Add a list to your Community
                        </h3></p>
                        <span><p>Adding a list to your Community populates the feed with relevant content curated by you.</p>
                            <p>Choose one from your lists below:</p></span>
                    </div>
                    <div>
                        <p><h3>
                            Your Lists
                        </h3></p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <p><h3>
                                Don’t have a relevant list
                            </h3></p>
                            <span>Create a new list featuring accounts on K4M2A that post content relevant to your Community. Keep your list public so it remains visible to the Community.</span>
                        </div>
                    </div>
                    <div>
                        <Button onClick={handleCreateListModal}>Create a list</Button>
                    </div>
                </div>
            </div>
            <Modal title="Create a new list" visible={showCreateListModal} onCancel={handleCreateListModalClose}>
                <Button>Next</Button>
                <Input type="file" />
                <Input type="text" placeholder="Name" />
                <TextArea type="text" placeholder="Description" />
                <p><h4>Make private</h4></p>
                <span>When you make a List private, only you can see it.</span>
                <Checkbox />
            </Modal>
        </>
    )
};

export default CommunityList;