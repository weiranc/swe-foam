import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reactor = (props) => {
  const [status, setStatus] = useState(props.reactor.isFoaming);

  useEffect(() => {
    if (status) {
      updateStatus();
    }
  }, [status]);

  const selectFoamingStatus = (e) => {
    if (e.target.value !== '----Select----') {
      setStatus(e.target.value);
    }
  };

  const updateStatus = () => {
    let id = props.reactor._id;
    console.log(id);
    console.log(status);
    axios
      .put(`http://localhost:3001/reactor/${id}`, { status: status })
      .then((response) => console.log('Status updated'))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ display: 'inline-block', margin: '1%' }}>
      <img
        src={props.reactor.url}
        alt='reactor'
        style={{ width: '300px', margin: '2%' }}
      ></img>
      <div>
        <span style={{ margin: '3%' }}>
          Current Status: <b>{status}</b>
        </span>
        <div>
          <select id='isFoaming' onChange={selectFoamingStatus}>
            <option>----Select----</option>
            <option>Unclassified</option>
            <option>Foaming</option>
            <option>Non-Foaming</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Reactor;
