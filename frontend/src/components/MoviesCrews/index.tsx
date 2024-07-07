import CardComponent from '@/components/Cards';
import useElementDimension from '@/utils/hooks/useElementDimension';
import {  useRef } from 'react';
import { Divider, Space, Typography } from 'antd';
import { Profile } from '@/styles/pages/[moviesname]';



const MoviesCrews = ({data}:any) => {
  const cardComponentRef = useRef<HTMLDivElement>(null);
  const { width } = useElementDimension(cardComponentRef);

  const slidesToShow =(width- 25 ) / 150


  return (
        <CardComponent>
            <Divider />
            <Space style={{gap:20}}>
                { data.cast.map((data:any)=>(
                    <Space direction="vertical" >
                        <Profile src={data?.imageUrl}></Profile>
                        <Space direction="vertical" style={{gap:0,width:'100%'}}>
                        <Typography.Title level={5}  style={{margin:0,textAlign:'center'}}>{data.name}</Typography.Title>
                        <Typography style={{textAlign:'center'}}>as {data.role}</Typography>
                        </Space>
                        
                    </Space>

                ))
                }
            </Space>
        
            
            <Divider/>
            <Space style={{gap:20}}>
                { data.crew.map((data:any)=>(
                    <Space direction="vertical" >
                        <Profile src={data?.imageUrl}></Profile>
                        <Space direction="vertical" style={{gap:0,width:'100%'}}>
                        <Typography.Title level={5}  style={{margin:0,textAlign:'center'}}>{data.name}</Typography.Title>
                        <Typography style={{textAlign:'center'}}>as {data.role}</Typography>
                        </Space>
                        
                    </Space>

                ))
                }
            </Space>
        </CardComponent>
        // <div ref={cardComponentRef} >
        // <CardComponent >
        // <SliderBanner  
        // slidesToShow={slidesToShow} 
        // autoplay={false}
        // initialSlide={1}
        // draggable={true}

        // >
        //     {
        //       data.map((data:any, index:any) => (
        //            <MoviesCards {...data} key={index} />
        //       ))
        //     }
             
        // </SliderBanner>
        // </CardComponent>
        // </div>
      

  );
}

export default MoviesCrews