import React, { useState } from 'react';
import styled from 'styled-components';
import CCTVList from '../components/CCTVList';


const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  // 임시 데이터 - 실제로는 API에서 가져올 데이터
  const mockLocations = [
    {
      id: '1',
      cctvName: '강남대로 교차로 CCTV',
      roadAddress: '서울시 강남구 강남대로 123',
      managementAgency: '서울시 교통관리과',
      streamUrl: 'B'
    },
    {
      id: '2',
      cctvName: '삼성동 사거리 CCTV',
      roadAddress: '서울시 강남구 삼성동 456',
      managementAgency: '강남구청',
      streamUrl: 'A'
    }
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Container>
      <ListPanel>
        <CCTVList
          locations={mockLocations}
          selectedId={selectedLocation?.id}
          onSelect={handleLocationSelect}
        />
      </ListPanel>
      <MapArea>
        {selectedLocation && (
          <ViewerContainer>
            <CCTVViewer location={selectedLocation} />
          </ViewerContainer>
        )}
      </MapArea>
    </Container>
  );
};

export default LocationMap;

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;
  background: #f3f4f6;
`;

const ListPanel = styled.div`
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  overflow-y: auto;
`;

const ListHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
`;

const MapArea = styled.div`
  padding: 2rem;
  position: relative;
`;

const ViewerContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: calc(100% - 4rem);
  max-width: 800px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;
