import React from 'react';
import { StyledVideoCard } from 'styles/VideoListStyle';
import { formatAgo } from 'util/date';

function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const videoIdMatch = thumbnails.medium.url.match(/\/vi\/([^/]+)\//);
  const videoId = videoIdMatch && videoIdMatch[1];

  return (
    <StyledVideoCard>
      <li
        onClick={() => {
          window.open(`https://www.youtube.com/watch?v=${videoId}`);
        }}
      >
        <img src={thumbnails.medium.url} alt={title} />
        <div>
          <p className="title">{title}</p>
          <p className="channelTitle">{channelTitle}</p>
          <p className="publishedAt">{formatAgo(publishedAt, 'ko')}</p>
        </div>
      </li>
    </StyledVideoCard>
  );
}

export default VideoCard;
