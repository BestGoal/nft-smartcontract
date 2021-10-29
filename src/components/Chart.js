import React from 'react'
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'sales',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
function Chart() {
    return (
        <>
        <div className="chart">
            <div className="container">

            
    <div className='header'>
      <h1 className='title'>Sales this Year</h1>
      <div className='links'>
        {/* <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
        >
          Github Source
        </a> */}
      </div>
    </div>
    <Bar data={data} options={options} />
    </div>
        </div>
  </>
    )
}

export default Chart
