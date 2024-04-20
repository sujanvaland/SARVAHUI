/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { PageHeader, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Main } from './styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GetAllRecuiter } from '../../../redux/postJob/actionCreator';
import { Button } from '../../../components/buttons/buttons';
import { SetDMUser } from '../../../redux/chatting/actionCreator';
// import { SelectWrapperStyle } from '../../ui-elements/ui-elements-styled';

function AdminRecuiter() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(GetAllRecuiter());
  }, []);

  const { payments } = useSelector((state) => ({
    payments: state.postJob?.getAllRecuiter,
  }));

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
      tags, phoneNumber, totalJobsPost } = l;

    srno += 1;
    return DepositTableData?.push({
      id,
      srno,
      firstName,
      lastName,
      email,
      userName,
      skills,
      profileImg,
      totalExperience,
      specialization,
      tags,
      phoneNumber,
      totalJobsPost,
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
      title: 'Sr No',
      dataIndex: 'srno',
      key: 'srno',
    },
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'UserName',
      dataIndex: 'userName',
      key: 'userName',
    }, {
      title: 'Skills',
      dataIndex: 'skills',
      key: 'skills',
    }, {
      title: 'Total Experience',
      dataIndex: 'totalExperience',
      key: 'totalExperience',
    },
    {
      title: 'Specialization',
      dataIndex: 'specialization',
      key: 'specialization',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Total Job',
      dataIndex: 'totalJobsPost',
      key: 'totalJobsPost',
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
      <PageHeader ghost title=" Recuiter List" />
      <Main>
        <Cards headless>
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
        </Cards>
      </Main>
    </>
  );
}

export default AdminRecuiter;
