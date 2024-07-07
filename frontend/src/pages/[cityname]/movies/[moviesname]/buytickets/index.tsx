import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Space,Typography, Divider, List, Avatar, Skeleton } from 'antd';
import DatePickers from '@/components/DatePicker';
import CardComponent from '@/components/Cards';
import { SelectButton } from '@/styles/pages/buytickets';


const BuyTickets = () => {
    const pathname = usePathname()
    const data = {
        name: 'Jawan',
        // screen: '4Dx',
        date: new Date(),
        language: 'Hindi',
        type: 'Action/Thriller',
        screens: [
            {
                name: 'Screen 1',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 2',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 3',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            }
        ]
    }

  return (
    <CardComponent styles={{body:{padding:0}}} >
    
    <Space direction='vertical'>
    <Space>
        <Typography.Title level={4} style={{margin:0}}>{data.name}</Typography.Title>
        <Typography.Title level={4} style={{margin:0}}>-</Typography.Title>
        <Typography.Title  level={4} style={{margin:0}}>({data.language})</Typography.Title>
    </Space>
    <Space>
        <Typography>{data.type}</Typography>
    </Space>
    </Space>
    <Divider style={{margin:10}}/>
      <DatePickers />
      <CardComponent>
                 <List
                itemLayout="horizontal"
                dataSource={data.screens}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    // avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={
                    <a href="https://ant.design">{item.name}</a>
                    }
                    description={item.location}
                    />
                    <Link href={`${pathname}/${item?.name}`}>
                    <SelectButton >Select</SelectButton>
                    </Link>
                </List.Item>
                )}
            />
 

      </CardComponent>

    </CardComponent>
  )
}

export default BuyTickets