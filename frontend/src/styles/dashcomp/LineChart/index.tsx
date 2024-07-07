import styled from "styled-components";

export const LineChartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction:column;
  width: 100%;
  height: 100%;
  /* max-width: 600px;
  max-height:400px; */

  gap: 10px;
  background: white;
  border-radius: 12px;
  padding: 10px;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
`;

export const LineChart = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 250px;
  justify-content: flex-start;
  align-items:flex-start;
`;

export const TypographyContent = styled.div`
  display: flex;
  // width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  // gap: 10px;
`;
