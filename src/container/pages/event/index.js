import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, Menu, Input, Form, Select } from 'antd';
import {
  DownOutlined,
  FilterOutlined,
  ShareAltOutlined,
  LinkOutlined,
  UploadOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import EventDetailsComponent from './eventDetails';
import { DiscoverCommunities, LinkDiv } from '../style';
import { getAllJobs, toggleBookmark, getJobDetails } from '../../../redux/postJob/actionCreator';

function EventTimeline() {
  const dispatch = useDispatch();

  const { Option } = Select;

  const { jobDetails } = useSelector((state) => ({
    jobDetails: state?.postJob?.jobDetails,
    isLoader: state?.Post.loading,
    
  }));


console.log("All Jobs: ", jobDetails);
  const scrollRef = useRef(null);
  const [type, setType] = useState('comingEvent');
  const [filter, setFilter] = useState({
    searchText: '',
    skills: null,
    // postedOn: 'Posted On',
    // salary: 'Salary',
    // skills: [],
    minSalary: 0,
    maxSalary: 0,
    timePeriod: 0,
  });

  const handleToggleBookmark = (data) => {
    dispatch(toggleBookmark(data));
  }

  useEffect(() => {
    dispatch(getAllJobs(filter));
  }, [filter]);

  const showTimeLine = (currenttype) => {
    setType(currenttype);
  };

  const handleSalaryFilter = (e) => {
    // Accessing e.item.props.type, but e.item.props may be undefined
    console.log(e.item.props.type);
    const minSalary = e.item.props.type.split('-')[0];
    const maxSalary = e.item.props.type.split('-')[1];
    setFilter({
      ...filter,
      salary: e.key,
      minSalary,
      maxSalary,
    });
  };

  const handlePostedOnFilter = (e) => {
    const selectedDateRange = e.item.props.type;
    setFilter({
      ...filter,
      postedOn: e.key,
      selectedDateRange,
    });
  };

  const [isFilter, setIsFilter] = useState(false);

  const handleFilter = () => {
    setIsFilter(!isFilter);
  };

  const handleJobSearch = () => {
    console.log('Search the job');
  };

  const handleSelectedSkills = (selected) => {
    setFilter({
      ...filter,
      skills: selected,
    });
  };

  const salaryMenu = (
    <Menu onClick={handleSalaryFilter}>
      <Menu.Item key="1lac - 3lac" type="100000-300000">
        1lac - 3lac
      </Menu.Item>
      <Menu.Item key="3lac - 6lac" type="300000-600000">
        3lac - 6lac
      </Menu.Item>
      <Menu.Item key="6lac - 10lac" type="600000-1000000">
        6lac - 10lac
      </Menu.Item>
    </Menu>
  );

  const postedOnMenu = (
    <Menu onClick={handlePostedOnFilter}>
      <Menu.Item key="Today" type="1">
        Today
      </Menu.Item>
      <Menu.Item key="This Week" type="2">
        This Week
      </Menu.Item>
      <Menu.Item key="This Month" type="3">
        This Month
      </Menu.Item>
    </Menu>
  );

  const [jobData, SetJobData] = useState(false);

  const handleJobDetails = (data) => {
    SetJobData(true);
    dispatch(getJobDetails(data));
  }

  const shareMenu = (
    <Menu>
      <Menu.Item>
        <LinkOutlined /> Copy Link
      </Menu.Item>
      <Menu.Item>
        <UploadOutlined /> Share post via...
      </Menu.Item>
      <Menu.Item>
        <MailOutlined /> Send via Direct Message
      </Menu.Item>
    </Menu>
  );

  const dropdownClassName = 'reportdropdown';

  console.log(filter);
  return (
    <>
      <div className="cntpagecomponent">
        <div className="centersidebarcontent flexcolumn mt56">
          <div className="tabbox">
            <Button
              onClick={() => showTimeLine('comingEvent')}
              className={type === 'comingEvent' ? 'btntab active' : 'btntab'}
            >
              {' '}
              Explore Jobs
            </Button>
            <Button onClick={() => showTimeLine('myEvent')} className={type === 'myEvent' ? 'btntab active' : 'btntab'}>
              {' '}
              Matched Jobs{' '}
            </Button>
            <Button className="btntabsetting" onClick={() => handleFilter()}>
              <FilterOutlined />
            </Button>
          </div>
          <div className="wdth100 mdt-50" ref={scrollRef}>
            <DiscoverCommunities className="communitiesBoxDetails eventDetails">
              {isFilter && (
                <div className="eventSearch">
                  <Input name="Search" maxLength={1000} placeholder="Search Jobs" onChange={handleJobSearch} />
                  <ul>
                    <li>
                      <Form.Item label="Skills">
                        <Select
                          mode="tags"
                          showSearch
                          filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          onChange={handleSelectedSkills}
                        >
                          <Option value="AutoCad"> AutoCad</Option>
                          <Option value="Maya">Maya </Option>
                          <Option value="Houdini"> Houdini</Option>
                        </Select>
                      </Form.Item>
                    </li>
                    <li>
                      <Dropdown overlay={postedOnMenu} trigger={['click']}>
                        <a href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                          {filter.postedOn} <DownOutlined />
                        </a>
                      </Dropdown>
                    </li>
                    <li>
                      <Dropdown overlay={salaryMenu} trigger={['click']}>
                        <a href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                          {filter.salary} <DownOutlined />
                        </a>
                      </Dropdown>
                    </li>
                    <li>
                      <Link to="" className="resetLink">
                        Reset Filter
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              <h3> All Jobs </h3>
              {jobDetails?.map((item) => (
                <>
                  <LinkDiv className="disCommunities" onClick={() => handleJobDetails({jobId:item.id})}>
                    <div className="rightBox">
                      <div className="CommunitiesDetails">
                        <div className="countMembers">{item.dateOfApplication}</div>
                        <h4>{item.jobTitle}</h4>
                        <div className="countMembers"> {item.jobDescription} </div>
                      </div>
                      <div className="eventBottom">
                        <div className="countMembers">{item.applicationReceived} Application Received</div>
                        <div className="eventRight">
                          <Link to="#" onClick={() => handleToggleBookmark({PostId :item.id})}>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <g>
                                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                              </g>
                            </svg>
                          </Link>
                          <Link to="#">
                            <Dropdown
                              overlay={shareMenu}
                              trigger={['click']}
                              overlayClassName={dropdownClassName}
                              placement="bottomRight"
                              width={100}
                            >
                              <ShareAltOutlined />
                            </Dropdown>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </LinkDiv>
                </>
              ))}
            </DiscoverCommunities>
          </div>
        </div>
        {jobData && <EventDetailsComponent />}
      </div>
    </>
  );
}

export default EventTimeline;
