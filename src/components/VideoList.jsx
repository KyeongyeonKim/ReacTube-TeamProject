import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ButtonArea, AddVideoButton, Container, Videos, StyledVideoCard } from 'styles/VideoListStyle.js';
import { formatAgo } from 'util/date';
import { loadBoardItems } from '../redux/modules/boardSlice';
import { LazyLoadedImage } from './LazyLoadedImage';

function VideoList() {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibleIndices, setVisibleIndices] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    dispatch(loadBoardItems());
  }, [dispatch]);

  const detailViewer = (id) =>
    navigate(`/detail/${id}`, {
      state: { id }
    });

  const newVideo = () => {
    navigate('/write');
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = imageRefs.current.indexOf(entry.target);
          setVisibleIndices((prevVisibleIndices) => [...prevVisibleIndices, index]);
        }
      });
    });

    imageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [boardItems]);

  return (
    <>
      <ButtonArea>
        <AddVideoButton onClick={newVideo}>+ 새 동영상</AddVideoButton>
      </ButtonArea>
      <Container>
        <Videos>
          {boardItems.map((element, index) => {
            const src = element.videoId ? `https://img.youtube.com/vi/${element.videoId}/maxresdefault.jpg` : '';
            return (
              <StyledVideoCard
                key={element.id}
                id={element.id}
                onClick={() => detailViewer(element.id)}
                ref={(e) => (imageRefs.current[index] = e)}
              >
                {visibleIndices.includes(index) && <LazyLoadedImage src={src} alt={`${element.title} 썸네일`} />}
                <div>
                  <p className="title" id={element.id} onClick={() => detailViewer(element.id)}>
                    {element.title}
                  </p>
                  <p className="author" id={element.id} onClick={() => detailViewer(element.id)}>
                    by. {element.author}
                  </p>
                  <p className="timeString">{formatAgo(element.timeString, 'ko')}</p>
                </div>
              </StyledVideoCard>
            );
          })}
        </Videos>
      </Container>
    </>
  );
}

export default VideoList;
