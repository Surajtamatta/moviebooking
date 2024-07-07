import styled from "styled-components";



export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;

export const TypographyContent = styled.div`
  display: flex;
  // width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  // gap: 10px;
`;

export const Wrapper = styled.div`
  display:grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 10px;
`;
export const ChartWrapper = styled.div`
  display:grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 10px;
`;
export const Content = styled.div`
  display: flex;
 width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
