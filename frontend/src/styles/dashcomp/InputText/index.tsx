import styled from "styled-components"
import { Input,Typography } from 'antd';

export const Container=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  flex: 1;
`
export const Label = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`
export const Errors = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  color: rgb(255, 0, 0);
`

export const Required= styled.div`
  color: rgba(255, 0, 0, 0.82);
  font-size: 15px;
  &::after{
    content: "*";
  }
`

export const SelectContainer=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
