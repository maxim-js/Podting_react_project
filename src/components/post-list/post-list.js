import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

import './post-list.css'


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className='List-group-item'>
            <PostListItem {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLiked={() => onToggleLiked(id)}
            // label={item.label}        // Можно исп-ть такой код, или ч/з spread
            // important={item.important}
            />
            </li>
        )
    });

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;