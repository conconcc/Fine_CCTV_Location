import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import CCTVList from '../components/CCTVList';
import CCTVViewer from '../components/CCTVViewer';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(''); // 입력값을 위한 상태 정의
  const [locations, setLocations] = useState([]); // CCTV 위치 목록을 위한 상태 정의
  const [selectedLocation, setSelectedLocation] = useState(null); // 선택된 위치 상태 정의
  const [isStreaming, setIsStreaming] = useState(false); // 스트리밍 상태 정의

  const search = (term) => {
    setSearchTerm(term); 
    console.log('검색어:', term);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setIsStreaming(true); 
  };

  return (
    <Container>
      <Hero>
        <Title>찾고 싶은 위치를 검색해주세요</Title>
        <SearchBar onSearch={search} />
      </Hero>
      <Content>
        <CCTVList
          locations={locations}
          selectedId={selectedLocation?.id}
          onSelect={selectLocation}
        />
        <CCTVViewer
          location={selectedLocation}
          isLoading={isStreaming}
        />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #1f2937, #111827);
`;

/*
 이미지 불러오기 안되고 있는 중
 */


const Hero = styled.header`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:7rem;
  padding: 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), ../assets/cctvlocation_image_Designer.jpg; 
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Content = styled.main`
  max-width: 1200px;
  margin: -4rem auto 0;
  padding: 0 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
@media (max-width:1024px) {
    grid-template-columns:1fr; 
    margin-top:2rem; 
}
`;
