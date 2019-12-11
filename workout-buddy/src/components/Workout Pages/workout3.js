import React from 'react';
import Navbar from '../Navbar';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { MDBCard,  MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
const workout3 = () => {
    return (
        <div>
            <Navbar />
            <MDBContainer className="mt-5 text-center ">
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron className="text-center ">
                        <MDBCardTitle className="card-title h4 pb-2">
                        <strong>Beginner's Swimming Workout</strong>
                        </MDBCardTitle>

                        <MDBCardImage
                        src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        className="img-fluid card-img-top"
                        />
                        <MDBCardBody>
                        <MDBCardTitle className="black-text h5 m-4">
                            Swimming
                        </MDBCardTitle>
                        <MDBCardText>
                        What is the best boxing workout? A boxing workout can increase endurance, strength, and speed. Our forum members have put together great workouts, talk about different methods, myths, and what kind of workouts they followed. Try them out!
                            <br/>
                            <br/>

                            Boxing can help to improve your cardio stamina, endurance, balance, and coordination.
                        </MDBCardText>

                        <MDBCol className="d-flex justify-content-center mt-4" md="12">
                            <MDBCol md="3" className="d-flex justify-content-around">
                            <a href="#"><MDBIcon
                                fab
                                icon="linkedin-in"
                                className="grey-text"
                                size="lg"
                            /></a>
                            <a href="#"><MDBIcon
                                fab
                                icon="twitter"
                                className="grey-text"
                                size="lg"
                            /></a>
                            <a href="#"><MDBIcon
                                fab
                                icon="facebook-f"
                                className="grey-text"
                                size="lg"
                            /></a>
                            </MDBCol>
                        </MDBCol>

                        </MDBCardBody>
                    </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>



    <MDBRow className="justify-content-center ">
    
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
              <MDBIcon icon='swimmer' /> Monday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                8 x 50 meters with 1 min rest<br></br>
                4 x 25 sprints<br></br>
                4 x 200 <br></br>
                
              </p>
              
              <a href="https://www.active.com/triathlon/articles/10-elements-of-a-perfect-freestyle-stroke" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Swimming form</a>
            
        
              
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
              <MDBIcon icon='swimmer' /> Tuesday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                8 x 50 meters with 45 sec rest<br></br>
                5 x 25 sprints<br></br>
                4 x 200 <br></br>
              </p>
              
              <a href="https://www.enjoy-swimming.com/swimming-strokes.html" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Swimming Strokes</a>
            
        
             
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
              <MDBIcon icon='swimmer' /> Wednesday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                
                10 x 50 meters with 30 sec rest<br></br>
                5 x 25 sprints<br></br>
                4 x 200 <br></br>
              </p>
              
              <a href="https://www.active.com/triathlon/articles/proper-breathing-technique-for-swimming-875008" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Breathing Technique</a>
            
        
              
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
              <MDBIcon icon='swimmer' /> Thursday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                15 x 50 meters with 30 sec rest<br></br>
                5 x 25 sprints<br></br>
                4 x 200 <br></br>
              </p>
              
          

              <a href="https://www.enjoy-swimming.com/freestyle-swimming-technique.html" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Freestyle techniques</a>
            

              
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
              <MDBIcon icon='swimmer' /> Friday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                10 x 50 meters with 30 sec rest<br></br>
                8 x 25 sprints<br></br>
                4 x 200 <br></br>
              </p>
             
          
        
              <a href="https://www.teamusa.org/USA-Triathlon/News/Blogs/Multisport-Lab/2012/May/29/simple-swim-workouts" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> New Workouts</a>
            </div>
          </div>
        </MDBCard>

        

      </MDBCol>




    </MDBRow>
        </div>
    );
};

export default workout3;