import React from 'react';
import Navbar from '../Navbar';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { MDBCard,  MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import SpotifyBar from '../SpotifyBar';
const workout0 = () => {
    return (
        <div>
            <Navbar />
            <MDBContainer className="mt-5 text-center ">
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron className="text-center ">
                        <MDBCardTitle className="card-title h4 pb-2">
                        <strong>Strong Lifts 5x5</strong>
                        </MDBCardTitle>

                        <MDBCardImage
                        src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/thumbs/37350/flexed-arm.jpg?crop=1xw:0.6666666666666666xh;center,top&resize=980:*"
                        className="img-fluid card-img-top"
                        />
                        <MDBCardBody>
                        <MDBCardTitle className="black-text h5 m-4">
                        5x5 is the Ultimate Way to Build Lean Muscle
                        </MDBCardTitle>
                        <MDBCardText>
                        Dust off your lifting straps, leave your ego at the door and make your home in the squat rack. Welcome to 5x5 training.


                            <br/>
                            <br/>

                            Nothing has further highlighted to me the importance of rest, recovery and nutrition than 5x5 training; three days a week that will build your body brick by brick, burn fat and develop lean muscle, power and strength. The principles are simple and have to be respected; five sets of five reps for three compound movements, three times per week.
                        </MDBCardText>

                        <MDBCol className="d-flex justify-content-center mt-4" md="12">
                            <MDBCol md="3" className="d-flex justify-content-around">
                            
                            </MDBCol>
                        </MDBCol>

                        </MDBCardBody>
                    </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>



    <MDBRow className="justify-content-center "
    style={{
            
      margin: "15px",
      

  }}>
    
      <MDBCol  md='4'>
        <MDBCard
          className=''
          style={{
            
            margin: "20px",
            

        }}
        >
          <div className=' card text-white text-center d-flex align-items-center rgba-white-strong py-5 px-4'>
            <div>
              <h5 className='black-text'>
                <MDBIcon icon='dumbbell' /> Monday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Squat 5x5<br></br>
                Bench Press 5x5<br></br>
                Barbell Row 5x5<br></br>
              </p>
              
          
              <a href="https://www.menshealth.com/uk/building-muscle/a757350/why-5x5-is-the-ultimate-way-to-build-lean-muscle/" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Why 5x5 is effective</a>
            
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    

      <MDBCol md='4'>
      <MDBCard
          className=''
          style={{
            
            margin: "20px"
            

        }}
        >
          <div className=' card text-white text-center d-flex align-items-center rgba-white-strong py-5 px-4'>
            <div>
              <h5 className='black-text'>
                <MDBIcon icon='bed' /> Tuesday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Rest<br></br>
                <br></br>
                <br></br>
              </p>
              
              <a href="https://www.theactivetimes.com/why-rest-days-are-just-important-working-out" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> recovery</a>
        
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      
      <MDBCol md='4'>
      <MDBCard
          className=''
          style={{
            
            margin: "20px"

          
            

        }}
        >
          <div className=' card text-white text-center d-flex align-items-center rgba-white-strong py-5 px-4'>
            <div>
              <h5 className='black-text'>
                <MDBIcon icon='dumbbell' /> Wednesday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Squat 5x5<br></br>
                Overhead Press 5x5<br></br>
                Deadlift 1x5<br></br>
                <br></br>
              </p>
              
              <a href="https://www.realsimple.com/health/fitness-exercise/workouts/squat-form" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> squat form</a>
        
        
              
            </div>
          </div>
        </MDBCard>

        

      </MDBCol>


      <MDBCol md='4'>
      <MDBCard
          className=''
          style={{
            
            margin: "20px"

          
            

        }}
        >
          <div className=' card text-white text-center d-flex align-items-center rgba-white-strong py-5 px-4'>
            <div>
              <h5 className='black-text'>
                <MDBIcon icon='bed' /> Thursday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
               Rest<br></br>
               <br></br>
               <br></br>
              </p>
              
              <a href="https://www.healthline.com/nutrition/26-muscle-building-foods" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> muscle building meals</a>
        
        
              
            </div>
          </div>
        </MDBCard>

        

      </MDBCol>

      <MDBCol md='4'>
      <MDBCard
          className=''
          style={{
            
            margin: "20px"

          
            

        }}
        >
          <div className=' card text-white text-center d-flex align-items-center rgba-white-strong py-5 px-4'>
            <div>
              <h5 className='black-text'>
                <MDBIcon icon='dumbbell' /> Friday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Squat 5x5<br></br>
                Bench Press 5x5<br></br>
                Barbell Row 1x5<br></br>
              </p>
              
              <a href="https://www.transparentlabs.com/blogs/all/35395395-building-mass-with-5x5-training" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Building mass</a>
        
        
              
            </div>
          </div>
        </MDBCard>

        

      </MDBCol>




    </MDBRow>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SpotifyBar/>
        </div>
    );
};

export default workout0;