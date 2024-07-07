import styled from "styled-components";
import { Button } from "antd";
import { IoMdStar } from "react-icons/io";
import { FaCircleDot } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
export const Container = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
`;

export const Wrapperbackground = styled.div<{src:string}>`
  background-image: linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${props => props.src});
  background-position:center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.5s ease-in-out;
  min-height: 480px;
-webkit-box-align: center;
background-repeat: no-repeat;
background-color: rgb(26, 26, 26);

`;


export const Image = styled.img`
  border-radius: 10px; 
  height: 100%;
  min-height: 350px;


`;


export const Title = styled.h1`
    color: rgb(255, 255, 255);
    font-family: Roboto;
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
`
export const Wrapper=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    height: 100%;
    max-width: 1000px;
    gap: 24px;
    
    
`
export const WrapperContainer=styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    display: block;
    justify-self: center;
    align-items: center;
    position: relative;
    transition: transform 0.5s ease-in-out;
    -webkit-box-align: center;

    
`

export const WrapperReview=styled.div`
    width: fit-content;    
    border-radius: 8px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    padding: 12px 24px;
    margin: 16px 0px 0px;
    max-width: 446px;
    
    cursor: pointer;
    gap: 10px;
    background-color: rgb(51, 51, 51);
`

export const WrapperLanguage = styled.div`
display: flex;
width: fit-content;
flex-wrap: wrap;
background-color: rgb(229, 229, 229);
color: rgb(0, 0, 0);
padding: 2px 8px;
border-radius: 2px;
align-self: flex-start;
margin-top: 8px;
`

export const BookButton = styled(Button)`
    letter-spacing: 0.2px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    white-space: nowrap;
    padding: 20px;
    border: 1px solid rgb(248, 68, 100);
    color: rgb(255, 255, 255);
    background-color: rgb(248, 68, 100);
    border-radius: 8px;
    width: 100%;
    max-width: fit-content;
    position: relative;
    cursor: pointer;

`
export const RateButton = styled(Button)`
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;

    margin-left: 4px;
    padding: 8px 15px;
    border: none;
    color: rgb(26, 26, 26);
`

export const StarIcon = styled(IoMdStar)`
    width: 30px;
    height: 30px;
    color: rgb(182, 60, 60);
`


export const DotIcon = styled(FaCircleDot)`
    width: 8px;
    height: 8px;
    position: relative;
    margin: 0 8px;
    color: rgb(255, 255, 255);
`
export const ShareIcon = styled(FaShareAlt)`
    width: 20px;
    height:20px;
    position: relative;
    margin: 0 8px;

`

export const WrapperShare=styled(BookButton)`
    width: fit-content;    
    border-radius: 8px;
    -webkit-box-pack: justify;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 20px;
    right:20px ;
    padding: 20px 15px;
    cursor: pointer;
    gap: 10px;
    background-color: rgba(51, 51, 51, 0.614);
`

export const Profile = styled.img`
   width: 100%;
   height: 100%;
   min-width: 100px;
   max-width: 150px;
   border-radius: 50%;

`