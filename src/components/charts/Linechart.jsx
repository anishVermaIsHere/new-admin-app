import {useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  legend:{
    display:false
  },
  plugins: {
    legend: {
      position: 'top',
      display:false
    },
    title: {
      display: false,
      text: '',
    },
  },
  scales:{
    x: {
      time: {
        unit: 'date'
      },
      grid: {
        display: false
      },
      ticks: {
        maxTicksLimit: 7
      }
    },
    y: {
      ticks: {
        min: 0,
        max: 40000,
        maxTicksLimit: 5
      },
      grid: {
        color: "rgba(0, 0, 0, .125)",
      }
    },
  },
  maintainAspectRatio:false
};

const labels = ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"];

const data = {
  labels,
  label:'Dataset 2',
  fill:true,
  datasets: [{
        fill:true,
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
  }],
  // borderColor: 'rgb(53, 162, 235)',
  // backgroundColor: 'rgba(53, 162, 235, 0.5)'
  
};

const Linechart=()=>{
  const [chartData, setChartData]=useState(data);
  return <Line options={options} data={chartData} />;
}
export default Linechart