/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { PageHeader, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Main } from './styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GetAllCandidate } from '../../../redux/postJob/actionCreator';
import { Button } from '../../../components/buttons/buttons';
import { SetDMUser } from '../../../redux/chatting/actionCreator';
// import { SelectWrapperStyle } from '../../ui-elements/ui-elements-styled';

function AdminCandidate() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(GetAllCandidate());
  }, []);

  const { payments } = useSelector((state) => ({
    payments: state.postJob?.getAllCandidate,
  }));

  // const handleSearch = () => {};

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
            {totalJobsApplied > 0 && <Button
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
      title: 'Sr No',
      dataIndex: 'srno',
      key: 'srno',
    },
    {
      title: 'firstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'lastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'userName',
      dataIndex: 'userName',
      key: 'userName',
    }, {
      title: 'skills',
      dataIndex: 'skills',
      key: 'skills',
    }, {
      title: 'totalExperience',
      dataIndex: 'totalExperience',
      key: 'totalExperience',
    },
    {
      title: 'specialization',
      dataIndex: 'specialization',
      key: 'specialization',
    },
    {
      title: 'tags',
      dataIndex: 'tags',
      key: 'tags',
    },
    {
      title: 'phoneNumber',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'totalJobsApplied',
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

export default AdminCandidate;
