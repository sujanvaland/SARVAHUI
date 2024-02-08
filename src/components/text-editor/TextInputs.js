/* eslint-disable react/prop-types */
import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "draft-js-plugins-editor";
import createMentionPlugin from "draft-js-mention-plugin";
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
import draftToHtml from 'draftjs-to-html';
import { connect } from "react-redux";
import editorStyles from "./editorStyles.module.css";
import "draft-js-mention-plugin/lib/plugin.css";
import { getConnectionsMentions, mentionSearchUser } from "../../redux/SearchUsers/actionCreator";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        editorState: EditorState.createEmpty()
    };
    this.textareaRef = React.createRef();
    this.mentionPlugin = createMentionPlugin();
    this.inlineToolbarPlugin = createInlineToolbarPlugin();
  }

  componentDidMount(){
    const { getConnectionsMentions,loginUser } = this.props;
    getConnectionsMentions(loginUser.id);
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.setRef) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.setRef(this);
    }
  }

  componentDidUpdate(prevProps) {
    const { clearText } = this.props;
  
    // Check if the clearText prop has changed
    if (clearText !== prevProps.clearText && clearText) {
      this.clearText();
    }
   
  }
  
  clearText = ()=>{
    this.setState({editorState: EditorState.createEmpty() });
  }

  onChange = editorState => {
    this.setState({ editorState },()=>{
        const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        const rawContent = convertToRaw(editorState.getCurrentContent()).blocks[0].text;
        const { handleEditorTextChange } = this.props;
        const mentions = this.getMentions();
        handleEditorTextChange(htmlContent,rawContent,mentions);
    });
    
  };

  onSearchChange = ({ value }) => {
    const { mentionSearchUser } = this.props;
    if(value?.length > 2){
      mentionSearchUser(value);
    }
  };

  getMentions = () => {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const mentionedUsers = [];
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in raw.entityMap) {
      const ent = raw.entityMap[key];
      if (ent.type === "mention") {
        mentionedUsers.push(ent.data.mention);
      }
    }
    return mentionedUsers;
  };

  render() {
    const { MentionSuggestions } = this.mentionPlugin;
    const { InlineToolbar } = this.inlineToolbarPlugin;
    const plugins = [this.mentionPlugin,this.inlineToolbarPlugin];
    const { editorState } = this.state;
    const { mentionConnections,mentionSearchUserdata,placeholder } = this.props;
    
    return (
      <>
        <div>
          <div className={editorStyles.editor}>
            <Editor
              placeholder={placeholder}
              ref={this.textareaRef}
              spellCheck
              editorState={editorState}
              onChange={this.onChange}
              plugins={plugins}
            />
            <InlineToolbar />
            <MentionSuggestions
              onSearchChange={this.onSearchChange}
              suggestions={mentionSearchUserdata?.length > 0 ? mentionSearchUserdata : mentionConnections}
            />
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
    return {
        loading: state.loading,
        SearchUser: state.getUser.getSearchUser,
        mentionConnections: state.getUser.mentionConnections,
        mentionSearchUserdata: state.getUser.mentionSearchUser,
        loginUser : state.auth.userprofile,
    };
  }
  function mapDispatchToProps(dispatch) {
      return {
        mentionSearchUser: (searchText) => dispatch(mentionSearchUser({ name: searchText, pageNo:1, records: 10 })),
        getConnectionsMentions: (userId) => dispatch(getConnectionsMentions(userId)),
      };
  }
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(TextInput);
 
