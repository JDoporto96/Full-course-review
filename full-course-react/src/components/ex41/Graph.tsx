import React from 'react';
import LineChart from './LineChart.tsx';
import PropTypes from 'prop-types';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

type Props={
  label: String,
  dotColor: String, 
  lineColor: String,
  dataPoints: Array<any>,
}

function ChartCanvas({label, dotColor, lineColor, dataPoints}:Props) {
  const data= {
        labels: dataPoints.map((data)=> data.x),
        datasets: [{
          label: `${label}`,
          data: dataPoints.map((data)=>data.y),
          borderColor: `${lineColor}`,
          backgroundColor: `${dotColor}`,
          tension: 0.1
        }]
      }

  return (
    <div id= "chart-canvas" style={{width: 900}}>
      <LineChart chartData={data}/> 
    </div>
  )
}

ChartCanvas.propTypes = {
 label: PropTypes.string.isRequired,
 lineColor:PropTypes.string,
 dotColor:PropTypes.string
}

export default ChartCanvas