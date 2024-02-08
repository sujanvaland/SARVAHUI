/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../../../static/css/settingstyle.scss';

import { Form, Select, Radio, Input, Checkbox, InputNumber, Button } from 'antd';

const JobPreference = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangeNumber = (value) => {
    console.log('changed', value);
  };

  const onCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setChecked(!checked);
  };

  const onChangeButton = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const radioButton = [
    {
      id: 'remote_only',
      title: 'Remote Only',
    },
    {
      id: 'in-office',
      title: 'In-office',
    },
    {
      id: 'hybrid',
      title: 'Hybrid (remote + office)',
    },
  ];
  const radioArray = [
    {
      id: 'yes',
      title: 'Yes',
    },
    {
      id: 'no',
      title: 'No',
    },
  ];
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
  return (
    <div className="settings-container">
      <div className="checkbox-container">
        <Checkbox onChange={onCheck} className="check-box">
          <p>I am OPEN for new opportunities.</p>
          <span>We don’t show your job status/preferences anywhere on your profile yet.</span>
        </Checkbox>
      </div>

      <div className="inner-content job-preference">
        <h2>Job Preferences</h2>
        <div className="form-container account-container">
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">What are your preferred roles?</p>
            </div>
            <div className="right-content">
              <Form.Item>
                <span>
                  <label htmlFor="Personal pronouns ">Select role(s) </label>
                </span>
                <Select optionFilterProp="children" onChange={onChange} options={selectOptions} />
              </Form.Item>
            </div>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">What type of job you’relooking for?</p>
            </div>
            <div className="right-content">
              <Form.Item>
                <span>
                  <label htmlFor="Personal pronouns ">Select job type(s) </label>
                </span>
                <Select optionFilterProp="children" onChange={onChange} options={selectOptions} />
              </Form.Item>
            </div>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">What are your location preferences?</p>
            </div>
            <div className="right-content">
              <Radio.Group onChange={onChangeButton} value={value}>
                {radioButton.map((item) => (
                  <div className="radio-class" key={item.id}>
                    <Radio value={item.id} />
                    <div>
                      <p className="title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">Are you holding any offer from other company?</p>
            </div>
            <div className="right-content offer">
              <Radio.Group onChange={onChangeButton} value={value}>
                {radioArray.map((item) => (
                  <div className="radio-class" key={item.id}>
                    <Radio value={item.id} />
                    <div>
                      <p className="title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">When can you join after accepting an offer?</p>
              <p className="info">What is your notice period?</p>
            </div>
            <div className="right-content">
              <Form.Item>
                <span>
                  <label htmlFor="Website">In days</label>
                </span>
                <InputNumber disabled={!!checked} min={1} max={10} defaultValue={1} onChange={onChangeNumber} />
              </Form.Item>
              <Checkbox onChange={onCheck} className="check-box">
                Remote
              </Checkbox>
            </div>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">What is your current and expected annual salary?</p>
              <p className="info">
                We understand this is a confidential information. We DO NOT show/share it with anyone. It helps us to
                filter out jobs which dont match with your expected salary.
              </p>
            </div>
            <div className="right-content">
              <Form.Item className="form-select-large">
                <span>
                  <label htmlFor="Personal pronouns ">Select role(s) </label>
                </span>
                <Select optionFilterProp="children" onChange={onChange} options={selectOptions} />
              </Form.Item>
              <div className="flex">
                <div>
                  <span className="input-label">Current salary (CTC)</span>
                  <Form.Item>
                    <span>
                      <label htmlFor="Website">Salary</label>
                    </span>
                    <Input autoFocus type="text" size="middle" />
                  </Form.Item>
                </div>
                <div>
                  <span className="input-label">Expected salary (CTC)</span>
                  <Form.Item>
                    <span>
                      <label htmlFor="Website">Salary</label>
                    </span>
                    <Input autoFocus type="text" size="middle" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className="btn-save btn-pref">Save</Button>
      </div>
      <div className="inner-content job-preference">
        <h2>Company Preferences</h2>
        <div className="form-container account-container">
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">Company profile tags</p>
              <p className="info">Profile tags consists of markets, investors, etc.</p>
            </div>
            <div className="right-content">
              <Form.Item>
                <span>
                  <label htmlFor="Personal pronouns ">Profile tags </label>
                </span>
                <Select optionFilterProp="children" onChange={onChange} options={selectOptions} />
              </Form.Item>
            </div>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">What is your preferred company size?</p>
            </div>
            <div className="right-content">
              <Form.Item>
                <span>
                  <label htmlFor="Personal pronouns ">Select company size </label>
                </span>
                <Select optionFilterProp="children" onChange={onChange} options={selectOptions} />
              </Form.Item>
            </div>
          </div>
        </div>
        <Button className="btn-save btn-pref">Save</Button>
      </div>
      <div className="inner-content job-preference">
        <h2>Identity (Optional)</h2>

        <div className="form-container account-container">
          <div className="info-container">
            <p>Self-identifying is optional, and we promise to handle your information with highest care.</p>
            <p>
              At Peerlist, we are committed to acting in favor of equal opportunity, regardless of ethnicity, age,
              gender, beliefs, religion, or sexual orientation. We want to help companies hire more inclusively. Part of
              that includes asking candidates to share demographic information so we can help recruiters to understand
              and build their hiring pipeline.
            </p>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">Gender identity</p>
            </div>
            <div className="right-content">
              <Form.Item>
                <span>
                  <label htmlFor="Personal pronouns ">Select gender </label>
                </span>
                <Select optionFilterProp="children" onChange={onChange} options={selectOptions} />
              </Form.Item>
            </div>
          </div>
          <div className="form-group-container">
            <div className="left-content">
              <p className="title">Date of birth</p>
            </div>
            <div className="right-content">
              <Form.Item>
                <span>
                  <label htmlFor="Personal pronouns ">Select DOB</label>
                </span>
                <Select optionFilterProp="children" onChange={onChange} options={selectOptions} />
              </Form.Item>
              <p className="info">Dont worry, we wont send birthday notifications to your network.</p>
            </div>
          </div>
        </div>
        <Button className="btn-save btn-pref">Save</Button>
      </div>
    </div>
  );
};

export default JobPreference;
