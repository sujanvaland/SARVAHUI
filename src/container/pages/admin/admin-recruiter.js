/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Input, Table  } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
// import { Main } from './styled';
// import { Cards } from '../../../components/cards/frame/cards-frame';
import { GetAllRecuiter } from '../../../redux/postJob/actionCreator';
import { Button } from '../../../components/buttons/buttons';
import { SetDMUser } from '../../../redux/chatting/actionCreator';
import { formatDateOnly } from '../../../utility/ConvertToMonthYear';
// import { SelectWrapperStyle } from '../../ui-elements/ui-elements-styled';

function AdminRecuiter() {

  const dispatch = useDispatch();
  const history = useHistory();
  // const { Option } = Select;

  useEffect(() => {
    dispatch(GetAllRecuiter());
  }, []);

  const [payments, setPayments] = useState([]);
 
  const { payment } = useSelector((state) => ({
    payment: state.postJob?.getAllRecuiter,
  }));

  useEffect(() => {
    setPayments(payment);
  }, [payment]);

  const [filter, setFilter] = useState({
    searchText: '',
    skills: [],
  });

  useEffect(() => {
    const filteredUsers = payment?.filter(user =>
      (user?.firstName?.toLowerCase().includes(filter?.searchText?.toLowerCase())) ||
      (user?.lastName?.toLowerCase().includes(filter?.searchText?.toLowerCase())) ||
      (user?.userName?.toLowerCase().includes(filter?.searchText?.toLowerCase())) ||
      (user?.specialization?.toLowerCase().includes(filter?.searchText?.toLowerCase())) || 
      (user?.phoneNumber?.toLowerCase().includes(filter?.searchText?.toLowerCase()))
  );
  setPayments(filteredUsers);
  }, [filter]);

  const handleJobSearch = (e) => {
    setFilter({
      ...filter,
      searchText: e.target.value,
    });
  };

  // const handleSelectedSkills = (selected) => {
  //   setFilter({
  //     ...filter,
  //     skills: selected,
  //     pageNo: 1,
  //   });
  // };

  const handleResetFilter = () => {
    setPayments(payment);
    setFilter({
      searchText: '',
      skills: [],
    });
  }

  // const handleSearch = () => {};

  const handleViewProfile = (userName) => {
    history.push(`/profile/${userName}`);
  };

  const handleViewJob = (id, userName) => {
    history.push(`/recuiterJob/${id}/job/${userName}`);
  };

  const handleDMuser = (id) => {
    dispatch(SetDMUser({ id }))
    history.push('/message');
  };

  const DepositTableData = [];

  payments?.map((l, srno) => {
    const { id, firstName, lastName, email, userName, skills, profileImg, totalExperience, specialization,
      tags, phoneNumber, totalJobsPost, createdDate } = l;

    srno += 1;
    return DepositTableData?.push({
      id,
      srno,
      firstName,
      lastName,
      name:<>{firstName}  {lastName}</>,
      email,
      userName,
      skills,
      profileImg,
      totalExperience,
      specialization,
      tags,
      phoneNumber,
      totalJobsPost,
      Date: formatDateOnly(createdDate),
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
            <Button
              className="btn-icon complete"
              type="primary"
              shape="circle"
              onClick={() => handleViewJob(id, userName)}
            >
              View Jobs
            </Button>{' '}
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
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'No Jobs Posted',
      dataIndex: 'totalJobsPost',
      key: 'totalJobsPost',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, 
    {
      title: 'Registered Date',
      dataIndex: 'Date',
      key: 'Date',
    }, 
    // {
    //   title: 'Skills',
    //   dataIndex: 'skills',
    //   key: 'skills',
    // }, {
    //   title: 'Total Experience',
    //   dataIndex: 'totalExperience',
    //   key: 'totalExperience',
    // },
    // {
    //   title: 'Specialization',
    //   dataIndex: 'specialization',
    //   key: 'specialization',
    // },
    // {
    //   title: 'Tags',
    //   dataIndex: 'tags',
    //   key: 'tags',
    // },
    // {
    //   title: 'Phone Number',
    //   dataIndex: 'phoneNumber',
    //   key: 'phoneNumber',
    // },
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
                <h2> recruiter List</h2>                 
              </div> 
                <div className="eventSearch">                
                  <ul>
                    <li><Input name="searchText" maxLength={100} value={filter.searchText} placeholder="Search Jobs" onChange={handleJobSearch} /></li>
                    {/* <li>
                      <Form.Item >
                        <Select
                          mode="tags"
                          placeholder="Select Skills"
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
                    </li> */}
                    
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

export default AdminRecuiter;
