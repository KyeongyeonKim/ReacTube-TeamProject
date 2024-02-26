import React from 'react';
import { formatAgo } from 'util/date';
import { StyledVideoCard } from 'styles/SearchStyle';

function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <StyledVideoCard>
      <li
        onClick={() => {
          window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank');
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
