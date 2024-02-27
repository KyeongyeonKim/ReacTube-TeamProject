import React, { useState, useEffect } from 'react';
import client from 'api/supabase';
import { Hr } from 'styles/DetailPageStyles';
import { StDiv, StP, StButton, StInput } from 'styles/CommentsListStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, fetchComments } from '../redux/modules/commentSlice';

const CommentList = ({ videoId }) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleDelete = async () => {
    try {
      const { data: commentData, error } = await client.from('comments').select('password').eq('id', selectedCommentId);
      if (error) {
        console.error('Error fetching comment:', error.message);
        return;
      }
      const storedPassword = commentData[0].password;

      if (password !== storedPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        setPassword('');
        return;
      }

      // 비밀번호가 일치하면 댓글 삭제
      await client.from('comments').delete().eq('id', selectedCommentId);
      setComments(comments.filter((comment) => comment.id !== selectedCommentId));
      setIsModalOpen(false);
      setPassword('');
    } catch (error) {
      console.log('Error deleting comment:', error.message);
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
          <StButton
            onClick={() => {
              setSelectedCommentId(comment.id);
              setIsModalOpen(true);
            }}
          >
            삭제
          </StButton>
        </StDiv>
      ))}

      {isModalOpen && (
        <div>
          <div>
            <h2>비밀번호 입력</h2>
            <StInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StButton onClick={handleDelete}>삭제</StButton>
            <StButton onClick={() => setIsModalOpen(false)}>취소</StButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentList;
