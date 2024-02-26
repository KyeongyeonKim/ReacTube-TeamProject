import React, { useState, useEffect } from 'react';
import client from 'api/supabase';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

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
      setComments(formattedComments);
    }
  };

  return (
    <div>
      <h2>댓글 목록</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.nickname}</strong>: {comment.comment} (작성일: {comment.created_at})
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
