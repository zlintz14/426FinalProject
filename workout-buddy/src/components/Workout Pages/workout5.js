import React from 'react';
import Navbar from '../Navbar';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { MDBCard,  MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import SpotifyBar from '../SpotifyBar';
const workout2 = () => {
    return (
        <div>
            <Navbar />
            <MDBContainer className="mt-5 text-center ">
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron className="text-center ">
                        <MDBCardTitle className="card-title h4 pb-2">
                        <strong>Advanced Boxing Workout</strong>
                        </MDBCardTitle>

                        <MDBCardImage
                        src="https://wallpaperaccess.com/full/308647.jpg"
                        className="img-fluid card-img-top"
                        />
                        <MDBCardBody>
                        <MDBCardTitle className="black-text h5 m-4">
                            Boxing
                        </MDBCardTitle>
                        <MDBCardText>
                        What is the best boxing workout? A boxing workout can increase endurance, strength, and speed. Our forum members have put together great workouts, talk about different methods, myths, and what kind of workouts they followed. Try them out!
                            <br/>
                            <br/>

                            Boxing can help to improve your cardio stamina, endurance, balance, and coordination.
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
                 Monday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Run 2 mile<br></br>
                3-minute round: Basic jab, cross, and hook punches<br></br>
                Rest 30 seconds x8<br></br>
                3-minute round: Speed punches<br></br>
                Rest 30 seconds x8<br></br>
              </p>
              
              <a href="https://expertboxing.com/the-perfect-boxing-stance" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> boxing stance</a>
            
        
              
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
                 Tuesday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
              3-minute round on heavy bag x5<br></br>
              3-minute round on speed bag x5<br></br>
              10 pushups, 10 jump squats x5<br></br>
              200 situps<br></br>
              </p>
              
              <a href="https://www.builtlean.com/2011/02/10/active-rest-in-between-exercises-makes-a-difference/" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> importance of active rest</a>
            
        
             
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
                 Wednesday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                
              3-minute round speed punches x5 <br></br>
              3-minute hard punches x5<br></br>
              Run 2 mile<br></br>
              200 situps<br></br>
              </p>
              
              <a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/interval-training/art-20044588" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> interval training</a>
            
        
              
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
                 Thursday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Run 3 miles<br></br>
                5 rounds shadow box<br></br>
                7 rounds of<br></br>
                6 sprints for 15 seconds<br></br>
              </p>
              
          

              <a href="https://expertboxing.com/how-to-slip-punches" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> interval training</a>
            

              
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
                 Friday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Run 3 mile<br></br>
                3-minute round speed punches x5<br></br>
                5-minute rounds of slips and jabs only x5<br></br>
                Plank 1 min x5<br></br>
              </p>
             
          
        
              <a href="http://www.westsidemma.net/single-post/2016/04/24/12-Sparring-Tips-That-Will-Make-You-Better" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> sparring tips</a>
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

export default workout2;