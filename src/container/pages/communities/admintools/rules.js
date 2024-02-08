import React, { useState } from "react";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "antd";
import AddRules from "./addRules";

const Rules = () => {

    const [addRulesModalVisible, setAddRulesModalVisible] = useState(false);

    const handleAddRulesClick = () => {
        setAddRulesModalVisible(true);
    };

    const handleAddRulesClose = () => {
        setAddRulesModalVisible(false);
    };

    return (
        <>

        
            <div>
                <div>
                    <p><h2>Rules</h2></p>
                    <Button onClick={handleAddRulesClick}><PlusOutlined /></Button>
                </div>
                <div>
                    <p>
                        Your Community can have up to 10 rules.
                        Clear rules can encourage respectful participation and help keep conversations on track.
                    </p>
                </div>
                <div>
                    <ol>
                        <li>
                            <Link to="#">Be kind and respectful.<RightOutlined /></Link>
                        </li>
                        <li>
                            <Link to="#">Keep posts on topic.<RightOutlined /></Link>
                        </li>
                        <li>
                            <Link to="#">Explore and share.<RightOutlined /></Link>
                        </li>
                    </ol>
                </div>
                <AddRules visible={addRulesModalVisible} onClose={handleAddRulesClose} />
            </div>
        </>
    )
};

export default Rules;