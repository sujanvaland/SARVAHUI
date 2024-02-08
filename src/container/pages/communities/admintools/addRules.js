import React from "react";
import { Button, Input, Modal } from "antd";

const AddRules = (props) => {

    // eslint-disable-next-line react/prop-types
    const {visible, onClose} = props;
    
    const handleModalClose = () => {
        onClose();
    };
    
    return (
        <>
            <Modal title="Add rule" visible={visible} onCancel={handleModalClose} footer={null}>
                <Button>Done</Button>
                <div>
                    <Input type="text" placeholder="Rule" />
                    <span><h5>Rule names must be between 3 and 60 characters.</h5></span>
                </div>
                <div>
                    <Input type="text" placeholder="Description (optional)" />
                    <span><h5>Descriptions can be up to 160 characters.</h5></span>
                </div>
            </Modal>
        </>
    );
};

export default AddRules;
