import CardComponent from '@/components/Cards';
import SliderBanner from '@/components/Carousel';
import { BookButton, Container, Image, RateButton, StarIcon, Title, Wrapper, WrapperLanguage, WrapperReview, Wrapperbackground, DotIcon, WrapperShare, WrapperContainer, ShareIcon, Profile } from '@/styles/pages/[moviesname]'
import { Divider, Space,Typography } from 'antd';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react'
import MoviesCarousal from '@/components/MoviesCarousel';
import { moviedata } from '@/MOCK_DATA';
import MoviesCrews from '@/components/MoviesCrews';


const MoviesPage = () => {
  const pathname = usePathname()


    const data= {
        wideposter: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kalki-2898-ad-et00352941-1718275859.jpg",
        portraitImgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg",
        _id: "65101a2acc5b257e6f2816a5",
        title: "Kalki 2898 AD",
        rating: 8,
        halls: ["2D", "3D"],
        language: ["hindi", "English"],
        genre: ["Action", "Thriller"],
        releasedate: "Sep 3, 2023",
        cast: [
          {
            _id: 1132,
            name: "Shah Rukh Khan",
            role: "Actor",
            imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
          },
          {
            _id: 1132,
            name: "Shah Rukh Khan",
            role: "Actor",
            imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
          },
          {
            _id: 1132,
            name: "Shah Rukh Khan",
            role: "Actor",
            imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
          },
        ],
        crew: [
            {
              _id: 1132,
              name: "Nag Ashwin",
              role: "Director ",
              imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/nag-ashwin-1052409-09-03-2017-04-25-08.jpg",
            },
            {
              _id: 1132,
              name: "Nag Ashwin",
              role: "Director ",
              imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/nag-ashwin-1052409-09-03-2017-04-25-08.jpg",
            },
            {
              _id: 1132,
              name: "Nag Ashwin",
              role: "Director ",
              imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/nag-ashwin-1052409-09-03-2017-04-25-08.jpg",
            },
          ],
        description: "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.",
        duration: 130,
      };
    
  return (
    <Container>
    <WrapperContainer>
    <CardComponent styles={{body:{display:'flex',justifyContent:'center'}}}
    >
    <Wrapperbackground  src = {data.wideposter}>
       <Wrapper>
        <WrapperShare>
            <ShareIcon/>
            Share
        </WrapperShare>
       <Space>
            <Image alt={'portraiturl'} src={`${data.portraitImgUrl}`}/>
        </Space>
        <Space direction="vertical">
          <Title  >{data.title}</Title>
          <WrapperReview>
            <Space>
            <StarIcon/>
            <Typography style={{ color: "white" }}> {data.rating} / 10</Typography>
            </Space>
            <RateButton>Rate</RateButton>
          </WrapperReview>
          <WrapperLanguage>
            {data?.halls?.map((items, index) => (
                <React.Fragment key={index}>
                <Typography.Text >{items}</Typography.Text>
                {index < data.halls.length - 1 && ", "}
                </React.Fragment>
            ))}
            </WrapperLanguage>
            <WrapperLanguage>
            {data?.language?.map((items, index) => (
                <React.Fragment key={index}>
                <Typography.Text>{items} </Typography.Text>
                {index < data.language.length - 1 && ", "}
                </React.Fragment>
            ))}
            </WrapperLanguage>
          <Typography.Text style={{ color: "white" }}>
            {data.duration} 
            <DotIcon/>
            {data?.genre?.map((items, index) => (
                <React.Fragment key={index}>
                <Typography.Text style={{ color: "white" }}>{items}</Typography.Text>
                {index < data.language.length - 1 && ", "}
                </React.Fragment>
            ))} 
            <DotIcon/>
            {data.releasedate}
        </Typography.Text>

          <Link href={`${pathname}/buytickets`}>
          <BookButton>Book tickets</BookButton></Link>
        </Space>

       </Wrapper>
    </Wrapperbackground>
    </CardComponent>
    <CardComponent >

            <Space direction="vertical"  >
            <Space direction="vertical" style={{maxWidth:500}}>
            <Typography.Title level={4}  >About the Movie</Typography.Title>
            
            <Typography.Text>{data.description}</Typography.Text>
            </Space>
            <MoviesCrews data={data}/>
           {/* <Space style={{maxWidth:1000}}>
           <CardComponent 
                title='Recommendation'
                >
                <SliderBanner  
                slidesToShow={5} 
                autoplay={false}
                initialSlide={5}
                draggable={true}
                >
                    { data.cast.map((data)=>(
                    <CardComponent
                    cover={<Profile src={data?.imageUrl}></Profile>}
                    >
                        
                        <Space direction="vertical" style={{gap:0,width:'100%'}}>
                        <Typography.Title level={5}  style={{margin:0,textAlign:'center'}}>{data.name}</Typography.Title>
                        <Typography style={{textAlign:'center'}}>as {data.role}</Typography>
                        </Space>
                        
                    </CardComponent>

                ))
                }
                    
                </SliderBanner>
             </CardComponent>
           </Space> */}

            <Divider />
            </Space>
    </CardComponent>
     <MoviesCarousal data={moviedata} title={'Recommended Movies'}/>
    </WrapperContainer>
    </Container>
    
  )
}

export default MoviesPage