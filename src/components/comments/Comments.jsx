import React from 'react';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

function Comments({ videoId }) {
  return (
    <>
      <div>comments</div>

      <CommentForm videoId={videoId}></CommentForm>
      <CommentsList videoId={videoId}></CommentsList>
    </>
  );
}

export default Comments;
