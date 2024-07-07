
import React,{useState} from 'react'
import { Typography,Select } from 'antd'
import {Chart as ChartJS, LineController, LineElement, PointElement, LinearScale,CategoryScale} from 'chart.js/auto'
//import 'chartjs-adapter-date-fns';
import {Line } from 'react-chartjs-2'
import {
  LineChartContainer,
  Title,
  TypographyContent,
  LineChart
} from "@/styles/dashcomp/LineChart";
import {mockLineData} from '../RecentList/mockData';
import { ChartOptions } from 'chart.js';

ChartJS.register(
  LineElement,
  LineController,
  PointElement,
  LinearScale,
  CategoryScale
)

const LineCharts = () => {
 // const [filter,setFilter] = useState([])
  const handleChange = (value: string) => {
   
      console.log(value)
  };

 // const labels = mockLineData.map(data=>data.data.map(item=>item.x));
  const data = {
    labels:mockLineData.map((data) => data.year),
    datasets: [{
      label: 'My First Dataset',
      data: mockLineData.map(data=>data.userGain),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100000,
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          font: {
            size: 12,
            weight: 'bold',
          },
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
          stepSize: 1, // Adjust as needed
          font: {
            size: 12,
            weight: 'bold',
          },
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
        display: true,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };


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
           <Line  data={data}  options={options} />      
      </LineChart> 
    </LineChartContainer>
  );
}

export default LineCharts

