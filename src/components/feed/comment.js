import React from 'react';
import {
    Media
} from 'ahoy-reactstrap';

import CommentActions from './comment-actions';

const Comment = ({isReply, user, src, text, children}) => {
    return (
        <Media className={isReply ? "mt-3" : ""}>
            <Media object src={src} className={isReply ? "d-flex pr-3" : "d-flex mr-3"}/>
            <Media body>
                <h6 className="mt-0 mb-1">{user}</h6>
                {text}
                <CommentActions/>
                {children}
            </Media>
        </Media>
    )
};

export default Comment;