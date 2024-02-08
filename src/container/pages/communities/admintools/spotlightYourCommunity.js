import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import { Button, Checkbox } from "antd";
import { RightOutlined } from "@ant-design/icons";

const SpotlightYourCommunity = (props) => {
    // eslint-disable-next-line react/prop-types
    const { visible, onClose } = props;
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setChecked(e.target.checked);
    };

    const handleModalClose = () => {
        setChecked(false);
        onClose();
    };

    return (
        <>
            <Modal visible={visible} onCancel={handleModalClose}>
                {!isChecked &&
                    <>
                        <h2>Profile Spotlight</h2>
                        <h5>Location</h5>
                        <span>Show business location, driving directions, hours, and/or contact information.</span>
                        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                    </>
                }

                {isChecked &&
                    <>
                        <div>
                            <div>
                                <Button>Website<RightOutlined /></Button>
                            </div>
                            <div>
                                <Button>Address<RightOutlined /></Button>
                            </div>
                            <div>
                                <Button>Hours<RightOutlined /></Button>
                            </div>
                            <div>
                                <Button>Email<RightOutlined /></Button>
                            </div>
                            <div>
                                <Button>Phone<RightOutlined /></Button>
                            </div>
                        </div>
                    </>

                }
            </Modal>


        </>
    );
};

export default SpotlightYourCommunity;
