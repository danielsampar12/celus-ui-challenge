import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const ScrollDiv = styled.div`
  height: calc(50vh - 80px);
  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow: hidden;
  overflow-y: scroll;
`;
