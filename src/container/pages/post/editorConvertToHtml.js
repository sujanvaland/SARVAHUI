/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { GetSearchUser } from '../../../redux/SearchUsers/actionCreator';

class EditorConvertToHTML extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
        editorState : EditorState.createEmpty(),
        MentionUserList:[],
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    },()=>{ 
        const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        const rawContent = convertToRaw(editorState.getCurrentContent()).blocks[0].text;
        if(rawContent.includes("@")){
            // Find the index of "@" symbol
          const atIndex = rawContent.indexOf("@");

          // Check if "@" is not the last character in the string
          if (atIndex < rawContent.length - 1) {
              // Extract the text after "@" symbol
              const searchText = rawContent.substring(atIndex + 1);

              // Call the GetSearchUser method with the extracted text
              // eslint-disable-next-line react/destructuring-assignment
              this.props.GetSearchUser(searchText);
          }
          
        }
        // eslint-disable-next-line react/prop-types
        const { handlePostTextChange } = this.props;
        handlePostTextChange(htmlContent,rawContent)
    });
  };

  selectUser = (user) =>{
    // eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
    const newMentionUserList = this.state.MentionUserList;
    newMentionUserList.push(user.userName);
    this.setState({MentionUserList:newMentionUserList});
  }

  render() {
    const { editorState } = this.state;
    const { SearchUser } = this.props;
    return (
      <div>
        <Editor
          toolbarHidden
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={(editorState)=>this.onEditorStateChange(editorState)}
        />
        {
            SearchUser && SearchUser?.length > 0 &&
            <div className='rightsidebarcntbox show'>
              <div className="rightsidecntbox searchlist">
                <div className="analyticsBox ">
                  <ul className="listItemsbox">
                    {SearchUser && SearchUser.length > 0 ? (
                      SearchUser?.map((User) => (
                        <li>
                          <>
                            <Button onClick={(user)=>this.selectUser(user)}>
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
                            </Button>
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
        }
        <textarea
          hidden
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
      SearchUser: state.getUser.getSearchUser,
  };
}
function mapDispatchToProps(dispatch) {
    return {
      GetSearchUser: (searchText) => dispatch(GetSearchUser({ name: searchText, pageNo:1, records: 10 }))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorConvertToHTML);
