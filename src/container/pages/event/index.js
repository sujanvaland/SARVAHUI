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
  const [isFilter, setIsFilter] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [PageNo, setPageNo] = useState(1);

  const { jobDetails, totalCount, totalSize } = useSelector((state) => ({
    jobDetails: state?.postJob?.jobDetails,
    totalCount: state?.postJob?.totalCount,
    totalSize: state?.postJob?.totalSize,
    isLoader: state?.Post.loading,
  }));
  const User = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    const totalPages = Math.ceil(totalCount / totalSize);
    if (PageNo >= totalPages || !totalPages) {
      setIsMore(false);
    }else{
      setIsMore(true);
    }
  }, [jobDetails]);

  const scrollRef = useRef(null);
  const [filter, setFilter] = useState({
    searchText: '',
    skills: null,
    minSalary: 0,
    maxSalary: 0,
    timePeriod: 0,
    pageNo: 1,
    userType: "job",
  });

  const handleToggleBookmark = (data) => {
    dispatch(toggleBookmark(data));
  };

  useEffect(() => {
    dispatch(getAllJobs(filter));
  }, [filter]);

  const handleSalaryFilter = (e) => {
    setPageNo(1);
    // Accessing e.item.props.type, but e.item.props may be undefined
    console.log(e.item.props.type);
    const minSalary = e.item.props.type.split('-')[0];
    const maxSalary = e.item.props.type.split('-')[1];
    setFilter({
      ...filter,
      salary: e.key,
      minSalary,
      maxSalary,
      pageNo: 1,
    });
  };

  const handlePostedOnFilter = (e) => {
    setPageNo(1);
    const selectedDateRange = e.item.props.type;
    setFilter({
      ...filter,
      pageNo: 1,
      postedOn: e.key,
      selectedDateRange,
    });
  };


  const handleFilter = () => {
    setIsFilter(!isFilter);
  };

  const handleJobSearch = (e) => {
    setPageNo(1);
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectedSkills = (selected) => {
    setPageNo(1);
    setFilter({
      ...filter,
      skills: selected,
      pageNo: 1,
    });
  };

  const handleResetFilter = () => {
    setPageNo(1);

    setFilter({
      searchText: '',
      skills: null,
      // postedOn: 'Posted On',
      // salary: 'Salary',
      // skills: [],
      minSalary: 0,
      maxSalary: 0,
      timePeriod: 0,
      pageNo: 1,
    });

  }
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
  };

  const handlePageNo = () => {
    setPageNo(PageNo + 1);
    dispatch(getAllJobs({ ...filter, pageNo: PageNo + 1 }));
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
            <Button className="btntab active">{User.loginType === "jobSeeker" ? <> All Jobs </> : <> My Jobs </>}</Button>

            <Button className="btntabsetting" onClick={() => handleFilter()}>
              <FilterOutlined />
            </Button>
          </div>
          <div className="wdth100 mdt-50" ref={scrollRef}>
            <DiscoverCommunities className="communitiesBoxDetails eventDetails">
              {isFilter && (
                <div className="eventSearch">
                  <Input name="searchText" maxLength={100} value={filter.searchText} placeholder="Search Jobs" onChange={handleJobSearch} />
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
                      <Link to="" className="resetLink" onClick={() => handleResetFilter()}>
                        Reset Filter
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {jobDetails?.map((item) => (
                <>
                  <LinkDiv className="disCommunities" onClick={() => handleJobDetails({ jobId: item.id })}>
                    <div className="rightBox">
                      <div className="CommunitiesDetails">
                        <div className="countMembers">{item.dateOfApplication}</div>
                        <h4>{item.jobTitle}</h4>
                        <div className="countMembers"> {item.jobDescription} </div>
                      </div>
                      <div className="eventBottom">
                        <div className="countMembers">{item.applicationReceived} Application Received</div>
                        <div className="eventRight">
                          <Link to="#" onClick={() => handleToggleBookmark({ PostId: item.id })}>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <g>
                                {item.isBookmarked === 1 ? (
                                  <path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z" />
                                ) : (
                                  <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                                )}
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
              {isMore &&
                <LinkDiv onClick={() => handlePageNo()}>
                  Load More
                </LinkDiv>
              }
            </DiscoverCommunities>
          </div>
        </div>
        {jobData && <EventDetailsComponent />}
      </div>
    </>
  );
}

export default EventTimeline;
