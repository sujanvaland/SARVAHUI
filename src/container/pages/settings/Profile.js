/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../../../static/css/settingstyle.scss';
import FeatherIcon from 'feather-icons-react';
import { Input, Form, Select, Checkbox, Space } from 'antd';

const Profile = () => {
  const [checked, setChecked] = useState(false);
  const { Option } = Select;
  const selectOptions = [
    {
      value: 'India',
      label: 'India',
    },
    {
      value: 'Canada',
      label: 'Canada',
    },
    {
      value: 'Italy',
      label: 'Italy',
    },
  ];

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const onCheck = () => {
    setChecked(!checked);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className="settings-container">
      <div className="inner-content">
        <h3>
          <span>
            <FeatherIcon icon="user" size={14} className="icon" />
            BASIC PROFILE
          </span>
        </h3>
        <div className="profile-container">
          <div className="user-image">
            <img src={require('../../../static/img/avatar/profileImage.png')} alt="profile" />
          </div>
          <div className="user-name">
            <p className='upload'>Upload new</p>
            <p className='size'>Recommended size: 400x400px</p>
          </div>
        </div>
        <div className="form-container account-container">
          <div className="form-group-container">
            <Form.Item>
              <span>
                <label htmlFor="First name">First name *</label>
              </span>
              <Input autoFocus type="text" size="middle" required />
            </Form.Item>
            <Form.Item>
              <span>
                <label htmlFor="Last name">Last name *</label>
              </span>
              <Input autoFocus type="text" size="middle" required />
            </Form.Item>
          </div>
          <div className="form-group-container text-area-container">
            <Form.Item>
              <span>
                <label htmlFor="Brief bio">Brief bio *</label>
              </span>
              <Input.TextArea autoFocus type="text" size="middle" maxLength={100} showCount required />
            </Form.Item>
          </div>
          <span className="info-input">This is the very first thing peers read about you after your name.</span>
          <div className="form-group-container selection-container">
            <Form.Item className="form-select-small">
              <span>
                <label htmlFor="Country">Country</label>
              </span>
              <Select
                disabled={!!checked}
                showSearch
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={selectOptions}
              />
            </Form.Item>
            <Form.Item className="form-select-small">
              <span>
                <label htmlFor="City">City</label>
              </span>
              <Select
                disabled={!!checked}
                showSearch
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={selectOptions}
              />
            </Form.Item>
            <Form.Item className="form-select-large">
              <span>
                <label htmlFor="Personal pronouns ">Personal pronouns </label>
              </span>
              <Select
                showSearch
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={selectOptions}
              />
            </Form.Item>
          </div>
          <Checkbox onChange={onCheck} className="check-box">
            Remote
          </Checkbox>
          <div className="form-group-container">
            <Form.Item>
              <span>
                <label htmlFor="Website">Website</label>
              </span>
              <Input autoFocus type="text" size="middle" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="inner-content">
        <h3>
          <span>
            <FeatherIcon icon="tag" size={14} className="icon" />
            PROFILE TAGS
          </span>
        </h3>
        <Select
          mode="multiple"
          style={{
            width: '100%',
          }}
          placeholder="select one country"
          defaultValue={['china']}
          onChange={handleChange}
          optionLabelProp="label"
        >
          <Option value="china" label="China">
            <Space>
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </Space>
          </Option>
          <Option value="usa" label="USA">
            <Space>
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </Space>
          </Option>
          <Option value="japan" label="Japan">
            <Space>
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </Space>
          </Option>
          <Option value="korea" label="Korea">
            <Space>
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </Space>
          </Option>
        </Select>
      </div>
      <div className="inner-content">
        <h3>
          <span>
            <FeatherIcon icon="link" size={14} className="icon" />
            SOCIAL LINKS
          </span>
        </h3>
        <span className="info-social-input">
          Note: You only need to add your <strong>username</strong>.
        </span>
        <div className="form-container account-container social-container ">
          <div className="form-group-container">
            <Form.Item>
              <Input addonBefore={<FeatherIcon icon="twitter" size={14} className="icon" />} prefix="twitter.com/" />
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore={<FeatherIcon icon="linkedin" size={14} className="icon" />}
                prefix="linkedin.com/in/"
              />
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore={<FeatherIcon icon="instagram" size={14} className="icon" />}
                prefix="instagram.com/"
              />
            </Form.Item>
            <Form.Item>
              <Input addonBefore={<FeatherIcon icon="figma" size={14} className="icon" />} prefix="figma.com/@" />
            </Form.Item>
            <Form.Item>
              <Input addonBefore={<FeatherIcon icon="user" size={14} className="icon" />} prefix="producthunt.com/@" />
            </Form.Item>
            <Form.Item>
              <Input addonBefore={<FeatherIcon icon="user" size={14} className="icon" />} prefix="wellfound.com/u/" />
            </Form.Item>
            <Form.Item>
              <Input addonBefore={<FeatherIcon icon="user" size={14} className="icon" />} prefix="behance.net/" />
            </Form.Item>
            <Form.Item>
              <Input addonBefore={<FeatherIcon icon="user" size={14} className="icon" />} prefix="tiktok.com/@" />
            </Form.Item>
            <Form.Item>
              <Input addonBefore={<FeatherIcon icon="youtube" size={14} className="icon" />} prefix="youtube.com/" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="inner-content">
        <h3>
          <span>
            <FeatherIcon icon="mail" size={14} className="icon" />
            CONTACT INFO
          </span>
        </h3>
        <div className="form-container account-container">
          <div className="form-group-container">
            <Form.Item>
              <span>
                <label htmlFor="Account email">Account email *</label>
              </span>
              <Input autoFocus type="text" size="middle" required />
            </Form.Item>
            <Form.Item>
              <span>
                <label htmlFor="Mobile">Mobile *</label>
              </span>
              <Input autoFocus type="text" size="middle" required />
            </Form.Item>
          </div>
          <div className="form-group-container">
            <Form.Item>
              <span>
                <label htmlFor="Secondary email">Secondary email </label>
              </span>
              <Input autoFocus type="text" size="middle" />
            </Form.Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
