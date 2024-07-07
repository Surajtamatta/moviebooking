import React, { useRef } from "react";
import { Carousel,} from "antd";
import {
  Wrapper,
  SliderContainer,
  NextArrow,
  PrevArrow,
  ImageCarousel
} from "@/styles/components/Slider";
import { CarouselRef } from "antd/es/carousel";



export interface CarouselProps {
  // effect?: CarouselEffect;
  effect?:'scrollx' | 'fade';
  style?: React.CSSProperties;
  children?: React.ReactNode;
  dots?: boolean | { className?: string };
  autoplay?: boolean;
  slidesToShow?:number ;
  slidesToScroll?:number;
  draggable?:boolean;
  easing?:string;
  autoplaySpeed?:number,
  initialSlide?:number;
  infinite?: boolean,

}

const SliderBanner: React.FC<CarouselProps> = ({ 
  effect,
  children,
  dots,
  autoplay=true,
  slidesToShow=1 ,
  slidesToScroll=1,
  draggable,
  easing='linear',
  autoplaySpeed=3000,
  initialSlide=1,
  infinite=false,

}) => {
  const carouselRef = useRef<CarouselRef>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const sliderOptions = {
    autoplay: autoplay,
    dots: dots,
    slidesToShow: slidesToShow ,
    slidesToScroll: slidesToScroll,
    draggable:draggable,
    effect:effect,
    easing:easing,
    autoplaySpeed:autoplaySpeed,
    initialSlide:initialSlide,
    infinite:infinite,

  };

  return (
    <SliderContainer>
      <PrevArrow onClick={handlePrev} />
      <Wrapper>
      <ImageCarousel ref={carouselRef} {...sliderOptions} style={{gap:'10px'}}>
        {children}
      </ImageCarousel>
      </Wrapper>
      <NextArrow onClick={handleNext} />
    </SliderContainer>
  );
};

export default SliderBanner;
