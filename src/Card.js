import * as React from 'react';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Title,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
const Charts = ({ active }) => {
  let data = [];
  let title;
  active.map((info, index) => {
    data.push({
      argument: index,
      value: info.Confirmed,
    });
    title = info.Country;
  });

  return (
    //<h1>Hello</h1>
    <div className='card mb-3'>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <Title text={title} />
        <LineSeries valueField='value' argumentField='argument' />
      </Chart>
    </div>
  );
};

export default Charts;
