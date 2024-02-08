import EmojiPicker,{ Theme,EmojiStyle } from 'emoji-picker-react';


const PickEmoji = (props) => {
  const onEmojiClick = (emojiObject) => {
    // eslint-disable-next-line react/prop-types
    const { onSelect } = props;
    onSelect(emojiObject);
  };
  return (
    <div className='emojiBox'>
      <EmojiPicker onEmojiClick={onEmojiClick}  height={400} width={300}  Theme={Theme.LIGHT} EmojiStyle={EmojiStyle.TWITTER} emojiUrl="https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-32"/>
    </div>
  );
}

export default PickEmoji;