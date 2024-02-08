import React, { useState } from 'react';
import '../../../static/css/settingstyle.scss';
import FeatherIcon from 'feather-icons-react';
import { Radio, Input,Button } from 'antd';

const Inbox = () => {
  const [value, setValue] = useState('everyone');

  const radioButton = [
    {
      id: 'everyone',
      title: 'Everyone',
      info: `Recommended. If you're not following them, the message will go into your Other inbox.`,
    },
    {
      id: 'peers_only',
      title: 'Peers only',
      info: `Only the people whom you follow back will be able to message you.`,
    },
    {
      id: 'No_one',
      title: 'No one',
      info: `That's ok. No one will be able to message you on Peerlist.`,
    },
  ];

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="settings-container">
      <div className="inner-content">
        <h3>
          <span>
            <FeatherIcon icon="user-plus" size={14} className="icon" />
            ALLOW MESSAGES FROM
          </span>
        </h3>
        <Radio.Group onChange={onChange} value={value}>
          {radioButton.map((item) => (
            <div className="toggle-container" key={item.id}>
              <div>
                <p className="title">{item.title}</p>
                <p className="info">{item.info}</p>
              </div>
              <Radio value={item.id} />
            </div>
          ))}
        </Radio.Group>
      </div>
      <div className="inner-content">
        <h3>
          <span>/ SHORTHANDS</span>
        </h3>
        <p>
          Use shorthands to quickly share the data while messaging. You can open the shorthand menu by entering / while
          writing message.
        </p>
        <div className="form-container">
          <Input autoFocus type="text" size="middle" style={{ width: '25%' }} />
          <Input autoFocus type="text" size="middle" style={{ width: '65%' }} />
          <div className="icon-container">
            <FeatherIcon icon="trash-2" size={14} className="icon" />
          </div>
        </div>
        <Button className="btn-new" >
         + New Shorthand
        </Button>
        <Button className="btn-save" >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Inbox;
