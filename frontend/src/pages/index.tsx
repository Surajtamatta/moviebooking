import SliderBanner from '@/components/Carousel';
import { Container } from '@/styles/Home/Main';
import { moviedata } from '@/MOCK_DATA';
import { Wrapper, Img } from '@/styles/components/Slider';
import MoviesCarousal from '@/components/MoviesCarousel';
import { useAdminAuth } from '@/utils/context/AdminAuth';

import DashboardMain from './admin';

export default function Home() {
  const { isAdminAuth } = useAdminAuth();

  return (
    <Container>
      {isAdminAuth ? (
        <DashboardMain />
      ) : (
        <>
          <SliderBanner>
            {moviedata.map((item, index) => (
              <Wrapper key={index}>
                <Img srcs={item.imageUrl || 'fallback-image-url'} />
              </Wrapper>
            ))}
          </SliderBanner>
          <MoviesCarousal data={moviedata} title={"Recommended Movies"} />
        </>
      )}
    </Container>
  );
}