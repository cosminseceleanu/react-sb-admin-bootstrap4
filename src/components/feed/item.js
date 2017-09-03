import React from 'react';
import Comment from "./comment";
import ItemActions from "./item-actions";

import {
    Card,
    CardImg,
    CardBody,
    CardFooter,
    CardTitle,
    CardText
} from 'ahoy-reactstrap';

const Item = ({item}) => {
    return (
        <Card className="mb-3">
            <CardImg top width="100%" src={item.photo}/>
            <CardBody>
                <CardTitle><a href="/">{item.user}</a></CardTitle>
                <CardText className="small">
                    {item.description}
                    {renderHashTags(item.tags)}
                </CardText>
            </CardBody>
            <hr className="my-0"/>
            <ItemActions/>
            <hr className="my-0"/>
            <CardBody className="small bg-faded">
                {renderComments(item.comments)}
            </CardBody>
            <CardFooter className="small text-muted">{item.date}</CardFooter>
        </Card>
    )
};

const renderHashTags = tags => {
    return tags.map((tag, index) => {
        return (
            <a key={index} href="/"> {tag}</a>
        )
    })
};

const renderComments = comments => {
    return comments.map((comment, index) => {
        const reply = comment.reply ? renderComment(comment.reply, null) : null;

        return renderComment(comment, reply, index);
    })
};

const renderComment = (comment, reply = null, index) => {

    return (
        <Comment key={reply !== null ? `reply-${index}` : index} {...comment}>{reply}</Comment>
    )
};

export default Item;