import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BookMarkSuggestion, GetSearchSuggestion } from '../../../redux/usersSuggestion/actionCreator';

function SearchSuggestion({ name, tab, onRefresh }) {
  const dispatch = useDispatch();


  const [State, setState] = useState({
    SearchSuggestion: '',
    focustext: false,
    showboxlist: false,
  });
  const [SearchSuggestiondata, setSearchSuggestiondata] = useState([]);
  const { Suggestiondata } = useSelector((state) => {
    return {
      Suggestiondata: state.getSuggest.getSearchSuggestion,
    };
  });

  useEffect(() => {
    setSearchSuggestiondata([]);
    setState({ showboxlist: false });
  }, [tab]);

  useEffect(() => {
    setSearchSuggestiondata(Suggestiondata);
  }, [Suggestiondata]);

  const handleChange = (e) => {
    e.preventDefault();
    const searchtextchar = e.target.value;
    if (searchtextchar.length > 3) {
      setState({
        ...State,
        SearchSuggestion: e.target.value,
        showboxlist: true,
      });
      dispatch(GetSearchSuggestion({ name: e.target.value, type: name }));
    } else {
      setState({ showboxlist: false });
    }
    setSearchSuggestiondata([]);
  };

  const hideSearch = () => {
    setState({
      ...State,
      SearchSuggestion: '',
      showboxlist: false,
    });
    setSearchSuggestiondata([]);
  };

  const handleBookMark = async (Id) => {
    await dispatch(BookMarkSuggestion({ id: Id, type: name }));
    await onRefresh();
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
          <div className="rightsearch focuseffect">

            <Input
              className="form-control"
              placeholder="Search"
              name="SearchSuggestion"
              onFocus={fnFocus}
              onBlur={fnFocusOut}
              onChange={handleChange}
              value={State?.SearchSuggestion}
            />
            <Button className={State.showboxlist ? 'btnClose show' : 'btnClose'} onClick={hideSearch}>
              <CloseOutlined />
            </Button>
          
          {State.showboxlist &&
          <div className="rightsidecntbox searchlist">
            <div className="analyticsBox">
              <ul className="listItemsbox">
                {SearchSuggestiondata && SearchSuggestiondata?.length > 0 ? (
                  SearchSuggestiondata?.map((Suggested) => (
                    <li>
                      <>
                        <Link to="/profile" onClick={() => handleBookMark(Suggested.id)}>
                          <div className="headbpx">
                            <div className="imgmaindiv">
                              <div className="imgDesc">
                                <div className="imgdiv">
                                  {Suggested?.img.length > 5 ?
                                  <img src={Suggested.img} alt="" /> :
                                  <img src={require('../../../static/images/avtar.png')} alt="" />}
                                </div>
                                <div className="namedetails">
                                  <h6 className="profilename">
                                    {Suggested.name}
                                    <span>{Suggested.author}</span>
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
                  <li>No {name} found</li>
                )}
              </ul>
            </div>
          </div>}

</div>
    </>
  );
}
SearchSuggestion.propTypes = {
    name: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired, 
    onRefresh: PropTypes.func.isRequired,
  };
export default SearchSuggestion;
