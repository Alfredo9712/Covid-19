import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
const Information = ({ information }) => {
  let totalCases = 0;
  let totalDeaths = 0;
  information.map((info) => {
    totalCases = info.Confirmed;
    totalDeaths = info.Deaths;
  });
  return (
    <div className='row'>
      <Card
        className='col-md-4 text-center'
        style={{ width: '12rem', display: 'inline-block' }}
      >
        <Card.Body>
          <Card.Title>Total Cases</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {totalCases.toLocaleString()}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card
        className='col-md-4 text-center'
        style={{ width: '12rem', display: 'inline-block' }}
      >
        <Card.Body>
          <Card.Title>Total deaths</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {totalDeaths.toLocaleString()}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Information;
