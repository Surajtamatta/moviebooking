/* eslint-disable react/jsx-no-undef */
import React, { useRef } from 'react'
import { CelebrityCardType } from '@/MOCK_DATA';
import { useRouter } from 'next/navigation';
import CardComponent from '../Cards';
import { Rating,Content,Container, MetaData} from '@/styles/components/MoviesCards';
import { Row, Typography } from 'antd';
import Image from 'next/image';


const MoviesCards = (data:CelebrityCardType) => {

    const router = useRouter()
    const city = 'mumbai'
    const { _id, name, rating, imageUrl, types} = data;
    const imagesrc:string = data.imageUrl as string;
  return (
    
    <Row 
    style={{marginRight:30}}
    >
        <CardComponent
            cover={
                <Content>
                    <Image
                    alt="example" 
                    src={imagesrc} 
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius:10,
                    }} 
                    />
                    <Rating>
                        {rating}
                    </Rating>
                </Content>
            }
            styles={{body:{padding:0}}}
            onClick ={()=>{
                router.push(`/${city}/movies/${name}`)
            }}>
            <MetaData>
            <Typography.Title level={5}>{name}</Typography.Title>
            <Typography.Text>{name}</Typography.Text>
            </MetaData>
        </CardComponent>
        
    </Row>

  )
}

export default MoviesCards