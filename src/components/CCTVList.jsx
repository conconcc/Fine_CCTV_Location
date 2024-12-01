import React from 'react';
import styled from 'styled-components';

const CCTVList = ({ locations, selectedId, onSelect }) => {

  return (
    <ListContainer>
      {locations.map((location) => (
        <ListItem
          key={location.id}
          onClick={() => onSelect(location)}
          $selected={selectedId === location.id}
        >
          <CCTVName>{location.cctvName}</CCTVName>
          <Address>{location.roadAddress}</Address>
          <Agency>{location.managementAgency}</Agency>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default CCTVList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid ${props => props.$selected ? '#3b82f6' : 'transparent'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CCTVName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Address = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const Agency = styled.p`
  font-size: 0.8rem;
  color: #888;
`;