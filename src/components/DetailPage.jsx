import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Handlers, Container, Title, AuthorAndTimeString, Author, Video, Content } from 'styles/DetailPageStyles';
import ModifyHandler from './ModifyHandler';
import DeleteHandler from './DeleteHandler';
import { fetchBoardItems } from '../redux/modules/boardSlice';
import { useEffect } from 'react';
import Comments from './Comments';

const DetailPage = () => {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const dispatch = useDispatch();
  const id = useLocation().state.id;

  useEffect(() => {
    dispatch(fetchBoardItems());
  }, [dispatch, id]);

  const videoData = boardItems.find((element) => id === element.id);

  return (
    <>
      <Handlers>
        <ModifyHandler />
        <DeleteHandler />
      </Handlers>
      {videoData && (
        <Container>
          <Title key={videoData.id + 'title'}>{videoData.title}</Title>
          <AuthorAndTimeString>
            <Author key={videoData.id + 'author'}>by. {videoData.author}</Author>
            <timeString key={videoData.id + 'timeString'}>{videoData.timeString}</timeString>
          </AuthorAndTimeString>
          <Video>
            <iframe
              id="player"
              type="text/html"
              width="1131"
              height="640"
              src={`http://www.youtube.com/embed/${videoData.videoId}`}
              frameBorder="0"
            />
          </Video>
          <Content key={videoData.id + 'content'}>{videoData.content}</Content>
          <Comments></Comments>
        </Container>
      )}
    </>
  );
};

export default DetailPage;
