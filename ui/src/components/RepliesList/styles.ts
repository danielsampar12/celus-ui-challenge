import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const ScrollDiv = styled.div`
  height: calc(50vh - 160px);
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;

  gap: 16px;

  overflow: hidden;
  overflow-y: scroll;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;

  align-items: center;
`;
