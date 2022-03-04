import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reactor from './Reactor';

const ReactorList = () => {
  const [allData, setAllData] = useState([]);
  const [isFoaming, setFilter] = useState('');

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get('http://localhost:3001/reactor')
      .then((response) => {
        setAllData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const filterStatus = () => {
    axios
      .get(`http://localhost:3001/reactor/${isFoaming}`)
      .then((response) => {
        setAllData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const filteredData = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={filteredData}>
          <option>Foaming</option>
          <option>Non-Foaming</option>
          <option>Unclassified</option>
        </select>
      </div>
      {allData.map((reactor) => {
        return <Reactor key={reactor._id} reactor={reactor} />;
      })}
    </div>
  );
};

export default ReactorList;
