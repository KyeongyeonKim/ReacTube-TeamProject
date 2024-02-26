import React, { useState, useEffect } from 'react';
import client from 'api/supabase';
import { Hr } from 'styles/DetailPageStyles';
import { StDiv, StP, StButton } from 'styles/CommentsListStyle';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [comments]);

  const fetchComments = async () => {
    const { data, error } = await client.from('comments').select('*').eq('videoId', `${videoId}`);

    if (error) {
      console.error('Error fetching comments:', error.message);
    } else {
      const formattedComments = data.map((comment) => {
        const createdAt = new Date(comment.created_at);
        const formattedDate = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}`;
        return { ...comment, created_at: formattedDate };
      });
      const reversedComments = formattedComments.reverse();
      setComments(reversedComments);
    }
  };

  const handleDelete = async (id) => {
    try {
      await client.from('comments').delete().eq('id', id);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error.message);
    }
  };

  return (
    <div>
      <Hr />
      {comments.map((comment) => (
        <>
          <StDiv key={comment.id}>
            <StP>
              {comment.nickname} / {comment.created_at}
            </StP>
            <StP>{comment.comment}</StP>
            <StButton onClick={() => handleDelete(comment.id)}>삭제</StButton>
          </StDiv>
        </>
      ))}
    </div>
  );
};

export default CommentList;
