import React, { useState, useEffect } from 'react';
import client from 'api/supabase';
import { Hr } from 'styles/DetailPageStyles';
import { StDiv, StP } from 'styles/CommentsListStyle';

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
          </StDiv>
        </>
      ))}
    </div>
  );
};

export default CommentList;
