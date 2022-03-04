import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reactor from './Reactor';

const ReactorList = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAllData = () => {
    axios
      .get('/reactor')
      .then((response) => {
        setAllData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {allData.map((reactor) => {
        return <Reactor key={reactor._id} reactor={reactor} />;
      })}
    </div>
  );
};

export default ReactorList;
