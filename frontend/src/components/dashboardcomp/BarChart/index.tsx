
import React,{useState} from 'react'
import { Typography,Select } from 'antd'
import {Chart as ChartJS, LineController, LineElement, PointElement, LinearScale,CategoryScale, BarController,
  BarElement} from 'chart.js/auto'

import {Bar } from 'react-chartjs-2'
import {
  LineChartContainer,
  Title,
  TypographyContent,
  LineChart
} from "@/styles/dashcomp/LineChart";
import {mockLineData} from '../RecentList/mockData';

ChartJS.register(
  LineElement,
  LineController,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement
)

const BarCharts = () => {
 // const [filter,setFilter] = useState([])
  const handleChange = (value: string) => {
   
      console.log(value)
  };

 // const labels = mockLineData.map(data=>data.data.map(item=>item.x));
  const data = {
    labels:mockLineData.map((data) => data.year),
    datasets: [{
    //  label: 'My First Dataset',
      data: mockLineData.map(data=>data.userGain),
      fill: false,
      backgroundColor: [
        'rgb(255, 99, 133)',
        'rgb(255, 160, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderColor: [
        'rgb(156, 50, 80)',
        'rgb(150, 93, 36)',
        'rgb(142, 113, 47)',
        'rgb(44, 107, 107)',
        'rgb(23, 74, 111)',
        'rgb(78, 52, 131)',
        'rgb(59, 67, 85)'
      ],
      borderWidth: 4,
      tension: 0.1
    }]
  };
const options={
  maintainAspectRatio: false,
  scales: {
    y: {
      min:0,
      max:100000,
      beginAtZero: true,
      ticks: {
        stepSize: 100, 
      },
      title: {
        display: true,
        text: 'Revenue in USD',
        font: {
          size: 12,
          weight: 'bold',
        },
      },
    },
    x: {
      ticks: {
        stepSize: 100, 
      },
      title: {
        display: true,
        text: 'Month',
        font: {
          size: 12,
          weight: 'bold',
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  
  }



  return (
    <LineChartContainer>
       <Title>
        <TypographyContent>
          <Typography.Paragraph style={{ margin: 0 }}>
            Patents
          </Typography.Paragraph>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: 700 }}>
            3,405,365
          </Typography.Title>
        </TypographyContent>
        <Select
          defaultValue="year"
          style={{ width: 100,height:30 }}
          onChange={handleChange}
          options={[
            { value: 'year', label: 'year' },
            { value: 'month', label: 'month' }   
          ]}
          />
      </Title> 
       <LineChart>
           <Bar  data={data}  options={options} />      
      </LineChart> 
    </LineChartContainer>
  );
}

export default BarCharts

