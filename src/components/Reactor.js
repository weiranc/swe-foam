import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reactor = (props) => {
  const [status, setStatus] = useState('');

  const selectFoamingStatus = (e) => {
    setStatus(e.target.value);
  };

  const updateStatus = () => {
    let id = props.reactor._id;
    axios
      .put(`http://localhost:3001/reactor/${id}`, status)
      .then((response) => console.log('Status updated'))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <img
        src={props.reactor.url}
        alt='reactor'
        style={{ width: '300px', margin: '2%' }}
      ></img>
      {/* <div> */}
      <select id='isFoaming' onChange={selectFoamingStatus}>
        <option>Unclassified</option>
        <option>Foaming</option>
        <option>Non-Foaming</option>
      </select>
      {/* </div> */}
    </div>
  );
};

export default Reactor;
