import {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Blue', 'Red','Yellow', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
      borderColor:  ['#007bff', '#dc3545', '#ffc107', '#28a745'],
      borderWidth: 1,
    },
  ],
};


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display:true
    },
    title: {
      display: false,
      text: '',
    },
  },
  maintainAspectRatio:false
};

const Piechart=()=>{
  const [chartData, setChartData]=useState(data);
  return <Pie data={chartData} options={options} />;
}

export default Piechart