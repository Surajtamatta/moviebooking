import styled from "styled-components"
import {Image} from 'antd'

export const Container=styled.div`
display:grid ;
justify-content: center;
align-items: center;
grid-template-columns: 1fr;
grid-template-rows:40px 1fr;
flex-direction: column;
width: 100%;
height: 100%;
gap: 5px;
@media (max-width:950px) {
    min-height: 500px;
}
`
export const List=styled.div`
display:flex ;
justify-content: flex-start;
align-items: stretch;
flex-direction: column;
border-radius: 16px;
width: 100%;
height: 100%;
overflow-y: scroll;
   position: absolute;
  gap: 8px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 50%;
    height: 4px;
    right: 3px;
    &-thumb {
      background: #000000a0;
    }
  }

`


export const WrapperContent=styled.div`
display:flex ;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
width: 100%;
height: 100%;
border-radius: 16px;
position: relative;

`
export const Header=styled.div`
display: flex;
align-items:center;
width: 100%;
justify-content: flex-start;


`
export const Wrapper=styled.div`
display: grid;
grid-template-columns:auto  1fr 1fr;
justify-content: space-between;
align-items:flex-start;
flex-direction: row;
width: 100%;
height: 100%;
min-width: 450px;
border-radius: 12px;
background: rgb(255, 255, 255);
padding: 10px;
gap: 10px;

`
export const Content=styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;

`
export const Images=styled(Image)`
border-radius:8px;
width: 100%;
max-width: 150px;
`