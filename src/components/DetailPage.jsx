import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Handlers, Container, Title, AuthorAndTimeString, Author, Video, Content } from 'styles/DetailPageStyles';
import ModifyHandler from './ModifyHandler';
import DeleteHandler from './DeleteHandler';

const DetailPage = () => {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const id = useLocation().state.id;

  return (
    <>
      <Handlers>
        <ModifyHandler />
        <DeleteHandler />
      </Handlers>
      {boardItems
        .filter((element) => id === element.id)
        .map((element) => {
          return (
            <Container key={element.id}>
              <Title key={element.id + 'title'}>{element.title}</Title>
              <AuthorAndTimeString>
                <Author key={element.id + 'author'}>by. {element.author}</Author>
                <timeString key={element.id + 'timeString'}>{element.timeString}</timeString>
              </AuthorAndTimeString>
              <Video>
                <iframe
                  id="player"
                  type="text/html"
                  width="1131"
                  height="640"
                  src={`http://www.youtube.com/embed/${element.videoId}`}
                  frameborder="0"
                />
              </Video>
              <Content key={element.id + 'content'}>{element.content}</Content>
            </Container>
          );
        })}
    </>
  );
};

export default DetailPage;
