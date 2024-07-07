import CardComponent from '@/components/Cards';
import SliderBanner from '@/components/Carousel';
import {
  Container,
} from '@/styles/Home/Main';
import MoviesCards from '@/components/MoviesCards';
import useElementDimension from '@/utils/hooks/useElementDimension';
import {  useRef } from 'react';


const MoviesCarousal = ({data,title}:any) => {
  const cardComponentRef = useRef<HTMLDivElement>(null);
  const { width } = useElementDimension(cardComponentRef);

  const slidesToShow =(width- 25 ) / 250


  return (
    <Container>  
        <div ref={cardComponentRef} >
        <CardComponent 
        title={title}
        >
        <SliderBanner  
        slidesToShow={slidesToShow} 
        autoplay={false}
        initialSlide={5}
        draggable={true}
        >
            {
              data.map((data:any, index:any) => (
                   <MoviesCards {...data} key={index} />
              ))
            }
        </SliderBanner>
        </CardComponent>
        </div>
      
    </Container>
  );
}

export default MoviesCarousal