import React from 'react';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

function Comments() {
  const handleSubmitComment = async (commentData) => {
    // 여기서 댓글 처리 로직을 구현합니다.
    //   const { data, error } = await client
    //   .from('comments')
    // .insert([{ nickname: '', comment: '', password: '' }])
    // .select();

    console.log('새로운 댓글:', commentData);
    // 예를 들어, 서버로 데이터를 전송하거나 상태를 업데이트할 수 있습니다.
  };
  return (
    <>
      <div>comments</div>
      <CommentForm></CommentForm>
      <CommentsList></CommentsList>
    </>
  );
}

export default Comments;
