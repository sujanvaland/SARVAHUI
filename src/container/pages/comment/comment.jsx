/* eslint-disable react/prop-types */
import React from "react";

const CommnetBox = (props) => {

    const {comment} = props
    // const {margin} = props
    // const [replyFlag, setReplyFlag] = useState(false)
    
    // const style = {
    //     "margin-left":margin
    // }

    // const toggleReplyFlag = () => {
    //     setReplyFlag(!replyFlag)
    // }

   
    
    return (
        <>
        <div className="card">

            <div className="card-body">

                <h5 className="card-title">
                    {`${comment?.firstName} ${comment?.lastName} @ ${comment?.userName}`}
                </h5>

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <div className="mb-3" onKeyDown={()=>{}} tabIndex="0" role="button">
                    <textarea className="form-control" id="comment" value={comment?.message} rows="3" cols="50" placeholder="Enter Comment" readOnly/>
                </div>

                {/* {replyFlag && <div>
                    <>
                    <input name="reply" value={reply} onChange={handleReplyChange} className="form-control" id="commnetreply" placeholder="Reply" />
                    <button type="button" onClick={replyOnComment}>Reply</button>
                    </>
                </div>} */}

            </div>
        </div>
        {
            // comment?.children && comment?.children.length &&
            // comment?.children?.map(child => {
            //     return (
            //         <CommnetBox margin={margin + 30} comment={child}/>
            //     )
            // })
        }
        </>
    )
}

export default CommnetBox;