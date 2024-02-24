import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledImage, StyledItem, StyledItems, StyledSmallContainer } from 'styles/CreateStyle';

function VideoList() {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const navigate = useNavigate();

  const detailViewer = (event) =>
    navigate("/detail", {
      state: { id: event.target.id },
    });

  const newVideo = () => {
    navigate('/write');
  };

  return (
    <StyledSmallContainer>
      <StyledItems>
        {boardItems.map((element) => {
          return (
            <StyledItem id={element.id} onClick={detailViewer}>
              <StyledImage id={element.id} onClick={detailViewer} src={`https://img.youtube.com/vi/${element.videoId}/maxresdefault.jpg`} alt="Thumbnail" />
              <h3 id={element.id} onClick={detailViewer}>{element.title}</h3>
              <p id={element.id} onClick={detailViewer}>by. {element.author}</p>
            </StyledItem>
          );
        })}
      </StyledItems>
      <StyledButton onClick={newVideo}>New Video</StyledButton>
    </StyledSmallContainer>
  );
}

export default VideoList;
