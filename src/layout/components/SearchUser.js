import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { GetSearchUser } from '../../redux/SearchUsers/actionCreator';

function SearchUser() {

  const dispatch = useDispatch();
  const [State, setState] = useState({
    SearchUserName: '',
    focustext: false,
    showboxlist: false,
  });
  const [SearchUserdata, setSearchUserdata] = useState([]);
  const [page, setPage] = useState(1);

  const { SearchUser } = useSelector((state) => {
    return {
      SearchUser: state.getUser.getSearchUser,
    };
  });

  useEffect(() => {
    if(State.SearchUserName?.length > 3){
      setState({
        ...State,
        showboxlist: true
      });
    }
    setSearchUserdata(SearchUser);
  }, [SearchUser]);

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...State,
      SearchUserName: e.target.value
    });
  };

  useEffect(()=>{
    if (State.SearchUserName?.length > 3) {
      dispatch(GetSearchUser({ name: State.SearchUserName, pageNo:page, records: 20 }));
    } else {
      setState({ 
        ...State, 
        showboxlist: false 
       });
    }
  },[State.SearchUserName])

  const hideSearch = () => {
    setState({
      ...State,
      SearchUserName: '',
      showboxlist: false,
    });
    setSearchUserdata([]);
    setPage(1);
  };

  const fnFocus = () => {
    setState({
      ...State,
      focustext: true,
    });
  };

  const fnFocusOut = () => {
    setState({
      ...State,
      focustext: false,
    });
  };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     setPage((prevPage) => prevPage + 1);
  //     dispatch(GetSearchUser({ name: State.SearchUserName, pageNo:page, records: 20 }));
  //   }
  // };
  // console.log(page);
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="rightsidebar">
        <div className="innerheader">
          <div className={State.focustext ? 'rightsearch focuseffect' : 'rightsearch'}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />{' '}
              </g>
            </svg>
            <Input
              className="form-control"
              placeholder="Search 123"
              name="SearchUserName"
              onFocus={fnFocus}
              onBlur={fnFocusOut}
              onChange={handleChange}
              value={State?.SearchUserName}
            />
            <Button className={State.showboxlist ? 'btnClose show' : 'btnClose'} onClick={hideSearch}>
              <CloseOutlined />
            </Button>
          </div>
        </div>

        <div className={State.showboxlist ? 'rightsidebarcntbox show' : 'rightsidebarcntbox'}>
          <div className="rightsidecntbox searchlist">
            <div className="analyticsBox ">
              <ul className="listItemsbox">
                {SearchUserdata && SearchUserdata.length > 0 ? (
                  SearchUserdata?.map((User) => (
                    <li>
                      <>
                        <Link to={`/profile/${User.userName}`} onClick={hideSearch}>
                          <div className="headbpx">
                            <div className="imgmaindiv">
                              <div className="imgDesc">
                                <div className="imgdiv">
                                  {User?.profileImg?.length > 5 ?
                                  <img src={User.profileImg} alt="" /> :
                                  <img src={require('../../static/images/img_userpic.jpg')} alt="" />}
                                </div>
                                <div className="namedetails">
                                  <h6 className="profilename">
                                    {User.firstName} {User.lastName}
                                    {User.online &&
                                    <span className="greentickicon">
                                      <img src={require('../../static/images/icon_check.png')} alt="" />
                                    </span>}
                                    {User.userName ? <span>@{User.userName}</span> : <span>Invite</span> }
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    </li>
                  ))
                ) : (
                  <li>No user found</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchUser;
