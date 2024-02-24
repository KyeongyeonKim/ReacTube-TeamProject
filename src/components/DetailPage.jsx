import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StyledImage, StyledSmallContainer } from 'styles/CreateStyle';
import ModifyHandler from './ModifyHandler';
import DeleteHandler from './DeleteHandler';

const DetailPage = () => {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const id = useLocation().state.id;

  return (
    <>
      {boardItems
        .filter((element) => id === element.id)
        .map((element) => {
          return (
            <StyledSmallContainer key={element.id}>
              <h3 key={element.id + "title"}>{element.title}</h3>
              <p key={element.id + "author"}>by. {element.author}</p>
              <p key={element.id + "timeString"}>{element.timeString}</p>
              <StyledImage src={`https://img.youtube.com/vi/${element.videoId}/maxresdefault.jpg`} alt="Thumbnail" />
              <p key={element.id + "content"}>{element.content}</p>
            </StyledSmallContainer>
          );
        })}
        <ModifyHandler />
        <DeleteHandler />
    </>
  );
};

export default DetailPage;
