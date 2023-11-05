import {useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const data = {
  labels:['January', 'February', 'March', 'April', 'May', 'June'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
      {
        label: '',
        data: [4215,5312,6251,7841,9821,14984],
        // you can set indiviual colors for each bar
        backgroundColor: [
          '#0275d8',
          '#0275d8',
          '#0275d8',
          '#0275d8',
          '#0275d8',
          '#0275d8'
        ],
        borderWidth: 1
      }
  ]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top',
      display:false
    },
    title: {
      display: false,  //true
      text: '',
    },
    label:{
      
    },
    datasets:{
      display:false
    }
    
  },
  scales: {
    x: {
      border: {
        display: false
      },
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      }
    },
    y: {
      border: {
        display: false
      },
      grid: {
       display:true
      },
      ticks:{
        min: 0,
        max: 15000,
        maxTicksLimit: 5
      }
    }
  },
  elements:{
    bar:{
      border:false,
      borderSkipped:'bottom'
    }
  },
  maintainAspectRatio:false
};


const Barchart = () => {
  const [chartData, setChartData]=useState(data);
  return (
    <Bar options={options} data={chartData}/>
  )
}

export default Barchart