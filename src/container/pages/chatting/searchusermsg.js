import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { GetSearchUser } from '../../../redux/SearchUsers/actionCreator';
import { SearchBox } from '../style';

function SearchUserBox(props) {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { handleSelectedIds, handleUserThreads } = props;
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
      setSearchUserdata(SearchUser);
  }, [SearchUser]);

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...State,
      SearchUserName: e.target.value,
      showboxlist: true,
    });
  };

  useEffect(()=>{
    if (State.SearchUserName?.length > 3) {
        setState({
          ...State,
          showboxlist: true,
        });
        dispatch(GetSearchUser({ name: State.SearchUserName, pageNo:page, records: 20 }));
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

  const handleSearchResultClick = (User) => {
      handleSelectedIds(parseInt(User.id));
      handleUserThreads(User);
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


  return (
    <>
        <SearchBox>
          <div className="messgsearcharea">
            <div className="searchIconbox">
              <SearchOutlined />
            </div>
            <Input
              className="form-control"
              placeholder="Search"
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
        </SearchBox>
       
        {State.showboxlist &&
        <div className="rightsidebarcntbox show searchuserBox">
          <div className="rightsidecntbox searchlist">
            <div className="analyticsBox">
              <ul className="listItemsbox">
                {SearchUserdata && SearchUserdata.length > 0 ? (
                  SearchUserdata?.map((User) => (
                    <li>
                      <>
                        <Link to="#" onClick={()=>handleSearchResultClick(User)}>
                          <div className="headbpx">
                            <div className="imgmaindiv">
                              <div className="imgDesc">
                                <div className="imgdiv">
                                  {User?.profileImg?.length > 5 ?
                                  <img src={User.profileImg} alt="" /> :
                                  <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                                </div>
                                <div className="namedetails">
                                  <h6 className="profilename">
                                    {User.firstName} {User.lastName}
                                    {User.online &&
                                    <span className="greentickicon">
                                      <img src={require('../../../static/images/icon_check.png')} alt="" />
                                    </span>}
                                    <span>@{User.userName}</span>
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
        </div>}
    </>
  );
}

export default SearchUserBox;
