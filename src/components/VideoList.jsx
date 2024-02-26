import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ButtonArea, AddVideoButton, Container, Videos, VideoCard } from 'styles/VideoListStyle.js';
import { formatAgo } from 'util/date';
import { loadBoardItems } from '../redux/modules/boardSlice';

function VideoList() {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadBoardItems());
  }, [dispatch]);

  const detailViewer = (event) =>
    navigate(`/detail/${event.target.id}`, {
      state: { id: event.target.id }
    });

  const newVideo = () => {
    navigate('/write');
  };

  return (
    <>
      <ButtonArea>
        <AddVideoButton onClick={newVideo}>+ 새 동영상</AddVideoButton>
      </ButtonArea>
      <Container>
        <Videos>
          {boardItems.map((element) => {
            return (
              <VideoCard key={element.id} id={element.id} onClick={detailViewer}>
                <img
                  id={element.id}
                  onClick={detailViewer}
                  src={`https://img.youtube.com/vi/${element.videoId}/maxresdefault.jpg`}
                  alt="Thumbnail"
                />
                <div>
                  <p className="title" id={element.id} onClick={detailViewer}>
                    {element.title}
                  </p>
                  <p className="author" id={element.id} onClick={detailViewer}>
                    by. {element.author}
                  </p>
                  <p className="timeString">{formatAgo(element.timeString, 'ko')}</p>
                </div>
              </VideoCard>
            );
          })}
        </Videos>
      </Container>
    </>
  );
}

export default VideoList;
