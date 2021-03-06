import React, { useState, useEffect } from 'react';
import '../App.scss';
import {
  MDBRow,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBCardBody,
  MDBBtn,
  MDBCardText
} from 'mdbreact';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const axios = require('axios');
function PublicFeatures() {
  const [features, setFeatures] = useState();
  useEffect(() => {
    axios.get('http://localhost:3000/public/features').then(res => {
      setFeatures(res);
    });
  }, []);

  let renderFeatures = function(featuresObj) {
    let featArray = featuresObj.data.result;

    return (<div>
      {featArray.map((feat)=>
      <MDBCard
      key={feat.id}
      style={{
        padding: '15px',
        margin: '20px',
        width: '30rem',
        marginRight: 'auto'
      }}
    >
  <h2 className=" my-4">{feat.title}</h2>
      <p className="grey-text">
        {feat.description}
      </p>
    </MDBCard>
      )}
    </div>);
  };

  return (
    <div>
      <section className="text-center my-5 PublicFeaturesSection">
        <h1
          className="h1-responsive font-weight-bold my-5"
          style={{ paddingTop: '2%' }}
        >
          What is Workout Daddy?
        </h1>

        <p className="lead w-responsive mx-auto mb-5">
          Workout Daddy is a free-to-use web application for you to schedule and
          keep track of your workouts and fitness progress! We have three goals
          here at Workout Daddy:
        </p>
        <MDBContainer style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <MDBRow style={{ width: '120%' }}>
            <MDBCol
              lg="5"
              className="text-center text-lg-left"
              style={{ marginLeft: '-8%' }}
            >
              <img
                id="BearDeadlift"
                className="img-fluid"
                src="https://ih1.redbubble.net/image.261845272.0514/flat,800x800,070,f.u3.jpg"
                alt="Swoll Bear"
              />
            </MDBCol>
            <MDBCol
              lg="7"
              style={{
                paddingLeft: '5%',
                marginTop: '5%',
                marginBottom: 'auto'
              }}
            >
              <MDBRow className="mb-3 fluid">
                <MDBCol size="2">
                  <i className="fas fa-dumbbell"></i>
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Practicality</h5>
                  <p className="grey-text">
                    We want to make it easy for everyone to keep track of their
                    workouts and progress online! We also want to provide
                    resources for learning about new workout plans that have
                    worked well for others!
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="2">
                  <i className="fas fa-dumbbell"></i>
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">
                    Beginner-Friendliness
                  </h5>
                  <p className="grey-text">
                    Workout Daddy is designed to be intuitive so that you can
                    start using Workout Daddy with your current workout regimen.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="2">
                  <i className="fas fa-dumbbell"></i>
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Accessibility</h5>
                  <p className="grey-text">
                    We want Workout Daddy to be as accessible as possible, so we
                    are making it absolutely free! Thank Dr. Ketan Mayer-Patel
                    at UNC Chapel Hill if you would like to express your
                    gratitude.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="magazine-section my-5 text-center">
        <h1 className="h1-responsive font-weight-bold my-5">Features</h1>
        <MDBContainer style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <MDBRow
            className="center"
            style={{ width: '120%', marginLeft: '-10%' }}
          >
            <MDBCol lg="6">
              <MDBCard
                style={{
                  marginTop: '3%',
                  width: '30rem',
                  marginLeft: 'auto'
                }}
              >
                <img
                  src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/04/10/12/youngwoman.jpg?w968"
                  className="img-fluid featureImage"
                  alt=""
                />
              </MDBCard>
              <MDBCard
                style={{
                  marginTop: '3%',
                  width: '30rem',
                  marginLeft: 'auto'
                }}
              >
                <img
                  src="https://3v718laqyo244ii5v20dg6ff-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Find-Your-Optimal-Speed-for-Lifting-Weights.jpg"
                  className="img-fluid featureImage"
                  alt=""
                />
              </MDBCard>
            </MDBCol>
            <MDBCol lg="6">
              {features ? (
                <div>
                  {renderFeatures(features)}
                </div>
              ) : (
                <div>Loading</div>
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <br/>
      <br/>
    </div>
  );
}

export default PublicFeatures;
