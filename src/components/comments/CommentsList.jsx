import React, { useState, useEffect } from 'react';
import client from 'api/supabase';
import { Hr } from 'styles/pageStyles/DetailPageStyles';
import { StDiv, StP, StButton } from 'styles/commentStyles/CommentsListStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, fetchComments } from '../../redux/modules/commentSlice';

const CommentList = ({ videoId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const auth = await client.auth.getUser();
        if (auth.data.user) {
          setUserId(auth.data.user.id);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
  }, []);

  useEffect(() => {
    dispatch(fetchComments(videoId));
  }, [dispatch, videoId]);

  const handleDelete = async (commentId) => {
    const userConfirmed = window.confirm('댓글을 삭제하시겠습니까?');
    if (userConfirmed) {
      try {
        dispatch(deleteComment(commentId));
      } catch (error) {
        console.log('Error deleting comment:', error.message);
      }
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
