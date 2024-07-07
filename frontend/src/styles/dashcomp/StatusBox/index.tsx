import styled from "styled-components";
import { Progress } from "antd";
export const StatusBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 12px;
  //max-width: 340px;
 // max-height: 140px;
  gap: 5px;
  flex-direction: column;
  background-color: #ffffffb1;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProgressCirle = styled(Progress)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  font-size: 20px;
  .ant-progress-text {
    font-size: 20px;
  }
`;