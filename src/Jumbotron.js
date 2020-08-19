import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
const Jumbo = () => {
  return (
    <div>
      <Jumbotron fluid className='text-center'>
        <Container>
          <h1>Covid-19</h1>
          <p>View how Covid-19 for specific countries</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
