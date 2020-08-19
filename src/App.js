import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Charts from './Card';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Information from './Information';
import Search from './Search';
import axios from 'axios';
import './App.css';

function App() {
  const [covidData, setData] = useState([]);
  const [country, setCountry] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.covid19api.com/total/dayone/country/${country}`
      );
      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, [country]);

  return (
    <Container fluid>
      <Navbar />
      <Jumbotron />
      <Search
        getCountry={(q) => {
          setCountry(q);
        }}
      />
      <Charts active={covidData} />
      <Information information={covidData} />
    </Container>
  );
}

export default App;
