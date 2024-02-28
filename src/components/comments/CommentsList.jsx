import React, { useState, useEffect } from 'react';
import client from 'api/supabase';
import { Hr } from 'styles/pageStyles/DetailPageStyles';
import { StDiv, StP, StButton } from 'styles/commentStyles/CommentsListStyle';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const auth = await client.auth.getUser();
        if (auth.data.user) {
          setUserId(auth.data.user.id);
          setEmail(auth.data.user.email);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
  }, []);

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

  const handleDelete = async (commentId) => {
    const userConfirmed = window.confirm('댓글을 삭제하시겠습니까?');
    if (userConfirmed) {
      try {
        await client.from('comments').delete().eq('id', commentId);

        setSelectedCommentId(commentId);

        setComments(comments.filter((comment) => comment.id !== commentId));
      } catch (error) {
        console.log('Error deleting comment:', error.message);
      }
    } else {
      return;
    }
  };

  return (
    <div>
      <Hr />
      {comments.map((comment) => (
        <StDiv key={comment.id}>
          <StP>
            {comment.nickname} / {comment.created_at}
          </StP>
          <StP>{comment.comment}</StP>
          {comment.userId === userId && (
            <StButton
              onClick={() => {
                handleDelete(comment.id);
              }}
            >
              삭제
            </StButton>
          )}
        </StDiv>
      ))}
    </div>
  );
};

export default CommentList;
