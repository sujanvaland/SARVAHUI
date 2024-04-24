/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Input, Table, Form, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
// import { Main } from './styled';
// import { Cards } from '../../../components/cards/frame/cards-frame';
import { GetAllCandidate } from '../../../redux/postJob/actionCreator';
import { Button } from '../../../components/buttons/buttons';
import { SetDMUser } from '../../../redux/chatting/actionCreator';
// import { SelectWrapperStyle } from '../../ui-elements/ui-elements-styled';

function AdminCandidate() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { Option } = Select;
  const User = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(GetAllCandidate());
  }, []);

  const [payments, setPayments] = useState([]);

  const { payment } = useSelector((state) => ({
    payment: state.postJob?.getAllCandidate,
  }));

  useEffect(() => {
    setPayments(payment);
  }, [payment]);

  const [filter, setFilter] = useState({
    searchText: '',
    skills: [],
  });

  useEffect(() => {
    const filteredUsers = payment?.filter(user => {
      const userSkills = user.skills.split(',').map(skill => skill.trim().toLowerCase());
      const searchText = filter?.searchText.toLowerCase();
      const skillMatch = filter?.skills?.length === 0 || filter?.skills.some(selectedSkill => userSkills.includes(selectedSkill.toLowerCase()));
      return (
      ((user?.firstName?.toLowerCase().includes(searchText)) ||
        (user?.lastName?.toLowerCase().includes(searchText)) ||
        (user?.userName?.toLowerCase().includes(searchText)) ||
        (user?.specialization?.toLowerCase().includes(searchText)) ||
        (user?.email?.toLowerCase().includes(searchText)) ||
        (user?.phoneNumber?.toLowerCase().includes(searchText))) &&
        skillMatch
      );
    });
    setPayments(filteredUsers);
  }, [filter]);

  const handleJobSearch = (e) => {
    setFilter({
      ...filter,
      searchText: e.target.value,
    });
  };

  const handleSelectedSkills = (selected) => {
    setFilter({
      ...filter,
      skills: selected,
      pageNo: 1,
    });
  };

  const handleResetFilter = () => {
    setPayments(payment);
    setFilter({
      searchText: '',
      skills: [],
    });
  }

  const handleViewProfile = (userName) => {
    history.push(`/profile/${userName}`);
  };

  const handleViewJob = (id, userName) => {
    history.push(`/candidateApplied/${id}/applied/${userName}`);
  };

  const handleDMuser = (id) => {
    dispatch(SetDMUser({ id }))
    history.push('/message');
  };

  const DepositTableData = [];

  payments?.map((l, srno) => {
    const { id, firstName, lastName, email, userName, skills, profileImg, totalExperience, specialization,
      tags, phoneNumber, totalJobsApplied, resumeUrl } = l;

    srno += 1;
    return DepositTableData?.push({
      id,
      srno,
      firstName,
      lastName,
      name: <>{firstName}  {lastName}</>,
      email,
      userName,
      skills,
      profileImg,
      totalExperience,
      specialization,
      tags,
      resumeUrl,
      phoneNumber,
      totalJobsApplied,
      action: (
        <div className="table-actions">
          <>
            <Button
              className="btn-icon complete"
              type="primary"
              shape="circle"
              onClick={() => handleViewProfile(userName)}
            >
              View Profile
            </Button>{' '}
            {(totalJobsApplied > 0 && User?.loginType === "admin") && <Button
              className="btn-icon complete"
              type="primary"
              shape="circle"
              onClick={() => handleViewJob(id, userName)}
            >
              View Applied Job
            </Button>}{' '}
            <Button
              className="btn-icon complete"
              type="primary"
              shape="circle"
              onClick={() => handleDMuser(id)}
            >
              Send Message
            </Button>
          </>
        </div>
      ),
    });
  });

  const DepositTableColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Candidate Name',
      dataIndex: 'name',
      key: 'name',
    },
    // {
    //   title: 'lastName',
    //   dataIndex: 'lastName',
    //   key: 'lastName',
    // },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    //  {
    //   title: 'userName',
    //   dataIndex: 'userName',
    //   key: 'userName',
    // },
    //  {
    //   title: 'skills',
    //   dataIndex: 'skills',
    //   key: 'skills',
    // }, {
    //   title: 'totalExperience',
    //   dataIndex: 'totalExperience',
    //   key: 'totalExperience',
    // },
    // {
    //   title: 'specialization',
    //   dataIndex: 'specialization',
    //   key: 'specialization',
    // },
    // {
    //   title: 'tags',
    //   dataIndex: 'tags',
    //   key: 'tags',
    // },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Jobs Applied',
      dataIndex: 'totalJobsApplied',
      key: 'totalJobsApplied',
    },
    // {
    //   title: 'Deposit Date',
    //   dataIndex: 'transactionDate',
    //   key: 'transactionDate',
    // },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    // },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '70px',
    },
  ];

  return (
    <>
      <div className="cntpagecomponent userprofilepage recruiterpage">
        <div className="centersidebarcontent flexcolumn mt56">
          <div className='userNamedetails headerBox msgheader'>
            <h2> Candidate List</h2>
          </div>
          <div className="eventSearch">

            <ul>
              <li><Input name="searchText" maxLength={100} value={filter.searchText} placeholder="Search Jobs" onChange={handleJobSearch} /></li>
              <li>
                <Form.Item >
                  <Select
                    mode="tags"
                    placeholder="Select Skills"
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={handleSelectedSkills}
                    value={filter?.skills}
                  >
                    <Option value="AutoCad"> AutoCad</Option>
                    <Option value="Maya">Maya </Option>
                    <Option value="Houdini"> Houdini</Option>
                  </Select>
                </Form.Item>
              </li>

              <li>
                <Link to="#" className="resetLink" onClick={() => handleResetFilter()}>
                  Reset Filter
                </Link>
              </li>
            </ul>
          </div>
          <div className='responsivetable'>
            <Table
              className="table-responsive"
              dataSource={DepositTableData}
              columns={DepositTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: DepositTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCandidate;
