import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
// import { Main } from './styled';
import { PricingCard, Badge } from '../style';
import Heading from '../../../components/heading/heading';
// import { PageHeader } from '../../../components/page-headers/page-headers';
// import { Cards } from '../../../components/cards/frame/cards-frame';
// import { H2 } from '../../../components/heading/style';
import { GetAllStats } from '../../../redux/postJob/actionCreator';


function AdminDashBoard() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllStats());
    }, [dispatch]);

    const profile = JSON.parse(localStorage.getItem('profile'));
    console.log(profile)
    const { stats } = useSelector((state) => {
        return {
            stats: state.postJob?.getStats
        };
    });

    console.log(stats);
    return (
        <>
            <div className="cntpagecomponent userprofilepage recruiterpage">
                <div className="centersidebarcontent flexcolumn mt56">
                    <div className='userNamedetails headerBox msgheader'>
                        <h2> Admin Dashboard</h2>
                    </div>
                    <br/>
        <br/>
        <br/>
        <br/>
                   
                        <Row gutter={25} justify="center">
                            <Col xxl={8} lg={8} sm={12} xs={24}>
                                <PricingCard style={{ marginBottom: 30 }}>
                                    <Badge className="pricing-badge badgestarter" type="dark">
                                        Total Jobs
                                    </Badge>
                                    <Heading className="price-amount" as="h3">
                                        {stats?.totalJobs}
                                    </Heading>
                                </PricingCard>
                            </Col>

                            <Col xxl={8} lg={8} sm={12} xs={24}>
                                <PricingCard style={{ marginBottom: 30 }}>
                                    <Badge className="pricing-badge" type="primary">
                                        Today Jobs
                                    </Badge>
                                    <Heading className="price-amount" as="h3">
                                        {stats?.todayJobs}
                                    </Heading>
                                </PricingCard>
                            </Col>

                            <Col xxl={8} lg={8} sm={12} xs={24}>
                                <PricingCard style={{ marginBottom: 30 }}>
                                    <Badge className="pricing-badge" type="secondary">
                                        This Week Jobs
                                    </Badge>
                                    <Heading className="price-amount" as="h3">
                                        {stats?.thisWeekJobs}
                                    </Heading>
                                </PricingCard>
                            </Col>

                            <Col xxl={8} lg={8} sm={12} xs={24}>
                                <PricingCard style={{ marginBottom: 30 }}>
                                    <Badge className="pricing-badge" type="success">
                                        Total Candidates
                                    </Badge>
                                    <Heading className="price-amount" as="h3">
                                        {stats?.totalCandidates}
                                    </Heading>
                                </PricingCard>
                            </Col>
                            <Col xxl={8} lg={8} sm={12} xs={24}>
                                <PricingCard style={{ marginBottom: 30 }}>
                                    <Badge className="pricing-badge" type="info">
                                        Total Recuiter
                                    </Badge>
                                    <Heading className="price-amount" as="h3">
                                        {stats?.totalRecuiter}
                                    </Heading>
                                </PricingCard>
                            </Col>
                            {/* 
          <Col xxl={8} lg={8} sm={12} xs={24}>
            <PricingCard style={{ marginBottom: 30 }}>
              <Badge className="pricing-badge" type="info">
              Active Plan
              </Badge>
              <Heading className="price-amount" as="h3">
                0
              </Heading>
            </PricingCard>
          </Col>

          <Col xxl={8} lg={8} sm={12} xs={24}>
            <PricingCard style={{ marginBottom: 30 }}>
              <Badge className="pricing-badge" type="info">
              Total Users
              </Badge>
              <Heading className="price-amount" as="h3">
                0
              </Heading>
            </PricingCard>
          </Col> */}

                        </Row>

                </div>
            </div>
        </>
    );
}

export default AdminDashBoard;
