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

  let getData = function() {
    // let maxYval = Math.max(...weightData);
    return {
      labels: labels,
      options: {
        spanGaps: true,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0
                // suggestedMax: maxYval
              }
            }
          ]
        }
      },
      datasets: [
        {
          label: 'Deadlift',
          fill: false,
          borderColor: variables.primary,
          pointBackgroundColor: variables.primary,
          pointRadius: 3,
          data: deadliftData
        },
        {
          label: 'Squat',
          fill: false,
          borderColor: '#eb34d8',
          pointBackgroundColor: '#eb34d8',
          pointRadius: 3,
          data: squatData
        },
        {
          label: 'Bench',
          fill: false,
          borderColor: '#39d3fa',
          pointBackgroundColor: '#39d3fa',
          pointRadius: 3,
          data: benchData
        },
        {
          label: 'Running',
          fill: false,
          borderColor: variables.secondary,
          pointBackgroundColor: variables.secondary,
          pointHoverRadius: 5,
          pointRadius: 3,
          data: runningData
        }
      ]
    };
  };
  //   data['datasets']data[4] = 16;
  const [stats, setStats] = useState();
  const [benchData, setBenchData] = useState();
  const [squatData, setSquatData] = useState();
  const [deadliftData, setDeadliftData] = useState();
  const [runningData, setRunningData] = useState();
  const [labels, setLabels] = useState();
  useEffect(() => {
    console.log('stats', stats);
    let xVals = [];
    let yVals = [];
    if (stats) {
      let deadlifting = stats.deadlifting;
      let squatting = stats.squatting;
      let benching = stats.benching;
      let running = stats.running;
      let deadliftEntries = Object.entries(deadlifting);
      let squatEntries = Object.entries(squatting);
      let benchEntries = Object.entries(benching);
      setSquatData(getWeightValues(squatEntries));
      setBenchData(getWeightValues(benchEntries));
      setDeadliftData(getWeightValues(deadliftEntries));


      // let lVals = [];
      // lEntries.forEach(entry => {
      //   tempLabels.push(entry[0]);
      //   let justVals = entry[1].map(obj => parseInt(obj.statValue, 10));
      //   lVals.push(Math.max(...justVals));
      // });
      // setWeightData(lVals);
      
      let rEntries = Object.entries(running);
      let rVals = [];
      let tempLabels = [];
      rEntries.forEach(entry => {
        tempLabels.push(entry[0]);
        let justVals = entry[1].map(obj => parseInt(obj.statValue, 10));
        rVals.push(justVals.reduce((a, b) => a + b, 0));
      });
      console.log('rvals', rVals);
      setLabels(tempLabels);
      setRunningData(rVals);
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

  let getWeightValues = function(objectEntries) {
    let lVals = [];
    objectEntries.forEach(entry => {
      let justVals = entry[1].map(obj => parseInt(obj.statValue, 10));
      lVals.push(Math.max(...justVals));
    });
    console.log(lVals);
    return lVals;
  };

  return (
    <div className="center-div">
      {labels && benchData ? (
        <div>
          <Line className="line-graph" data={getData()} />
        </div>
      ) : (
        <div>No Stats to Show Yet</div>
      )}
      <MDBBtn className="is-primary-button" onClick={deleteSomething}>
        Delete (for debugging purposes, need to remove)
      </MDBBtn>
      <NewWorkout />
    </div>
  );
}

export default LineGraph;
