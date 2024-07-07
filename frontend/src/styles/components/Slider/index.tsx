
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { styled } from "styled-components";
import{Carousel} from 'antd'

export const SliderContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    svg {
      color: rgb(255, 255, 255);
      background-color: #b5e8e8d9;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: block;
  justify-self: flex-start;
  align-items: center;
  position: relative;
  transition: transform 0.5s ease-in-out;

`;
export const Img = styled.div<{srcs:string}>`
  background-image: url(${props => props.srcs}) ;
  background-size: cover;
  border-radius: 10px; 
  height: 100%;
  min-height: 350px;


`;

export const NextArrow = styled(GoTriangleRight)`
  width: 100%;
  height: 100%;
  max-width: 20px;
  position: absolute;
  max-height: 35px;
  right:2px;
  border-radius: 8px 0 0 8px;
   z-index: 2;
  cursor: pointer;
  color: transparent;
  &:hover {
    color: rgb(7, 7, 7);
    background-color: #eff2f2cd;
  }
`;
export const PrevArrow = styled(GoTriangleLeft)`
  width: 100%;
  height: 100%;
  max-width: 20px;
  position: absolute;
  max-height: 35px;
  left: 2px;
  cursor: pointer;
  border-radius: 0 8px 8px 0;
  z-index: 2;
  color: transparent;
  &:hover {
    color: rgb(0, 0, 0);
    background-color: #eff2f2cd;
  }
`;




export const ImageCarousel = styled(Carousel)`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .slick-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .slick-prev {
    left: 2px;
    right: auto;
    height: 100%;
    max-height: 35px;
  }
  .slick-next {
    right: 2px;
    left: auto;
    height: 100%;
    max-height: 35px;
  }
  .slick-prev:hover, .slick-next:hover {
    color: rgb(7, 7, 7);
    background-color: #d5e6e6cd;
  }
`;
