import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import variables from '../App.scss';
import { MDBBtn } from 'mdbreact';
import NewWorkout from './NewWorkout';

function LineGraph() {
  let myStorage = window.localStorage;
  let jwt = myStorage.getItem('jwt');
  const axios = require('axios');

  let deleteSomething = function() {
    axios.delete('http://localhost:3000/user/stats', {
      headers: {
        Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
      }
    });
  };

  let addStat = function() {
    let time = new Date();
    axios
      .post(
        'http://localhost:3000/user/stats',
        {
          data: [
            {
              time: time,
              value: time.getMilliseconds()
            }
          ],
          type: 'merge'
        },
        {
          headers: {
            Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  let getData = function() {
    return {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: variables.primary,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataInSet
        }
      ]
    };
  };
  //   data['datasets']data[4] = 16;
  const [stats, setStats] = useState();
  const [labels, setLabels] = useState();
  const [dataInSet, setDataInSet] = useState();
  let xVals = [];
  let yVals = [];

  useEffect(() => {
    console.log('stats', stats);
    if (stats) {
      stats.forEach(stat => {
        xVals.push(stat.time);
        yVals.push(stat.value);
      });
      setDataInSet(yVals);
      setLabels(xVals);
    }
  }, [stats]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/user/stats', {
        headers: {
          Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
        }
      })
      .then(response => {
        console.log(response);
        // setStats(response)
        setStats(response.data.result);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <div className="center-div">
      {labels && dataInSet ? (
        <div>
          <Line className="line-graph" data={getData()} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <MDBBtn className="is-primary-button" onClick={addStat}>
        Add Today's Stats
      </MDBBtn>
      <MDBBtn className="is-primary-button" onClick={deleteSomething}>
        Delete (for debugging purposes, need to remove)
      </MDBBtn>
      <NewWorkout />
    </div>
  );
}

export default LineGraph;
