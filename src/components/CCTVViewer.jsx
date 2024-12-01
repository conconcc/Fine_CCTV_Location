import React from 'react';
import styled from 'styled-components';

const CCTVViewer = ({ location }) => {
  if (!location) return null;

  return (
    <ViewerContainer>
      <VideoContainer>
        {location.streamUrl ? (
          <Video src={location.streamUrl} controls autoPlay />
        ) : (
          <div style={{ 
            color: 'white', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            불러오는 중...
          </div>
        )}
      </VideoContainer>
      <InfoContainer>
        <Title>{location.cctvName}</Title>
        <Details>
          <p>{location.roadAddress}</p>
          <p style={{ marginTop: '0.25rem', fontSize: '0.8rem' }}>
            {location.managementAgency}
          </p>
        </Details>
      </InfoContainer>
    </ViewerContainer>
  );
};

export default CCTVViewer;


const ViewerContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #1f2937;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Details = styled.div`
  font-size: 0.9rem;
  color: #666;
`;
