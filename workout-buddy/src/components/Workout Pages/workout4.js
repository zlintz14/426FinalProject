import React from 'react';
import Navbar from '../Navbar';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { MDBCard,  MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import SpotifyBar from '../SpotifyBar';
const workout4 = () => {
    return (
        <div>
            <Navbar />
            <MDBContainer className="mt-5 text-center ">
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron className="text-center ">
                        <MDBCardTitle className="card-title h4 pb-2">
                        <strong>Advanced Running Plan</strong>
                        </MDBCardTitle>

                        <MDBCardImage
                        src="https://i.pinimg.com/originals/1a/69/e5/1a69e504b53a026bec6e88d3f93f4897.jpg"
                        className="img-fluid card-img-top"
                        />
                        <MDBCardBody>
                        <MDBCardTitle className="black-text h5 m-4">
                            Easy way to start running
                        </MDBCardTitle>
                        <MDBCardText>
                        Running is a great way to get fit, feel better and even form new relationships with other runners. Starting a new running habit doesn’t have to be hard — all it takes is a comfortable pair of shoes and a willingness to move a little or a lot, all at your own pace. The Well Guide makes it easy to get started, get inspired and stay on track. Are you ready? Let’s go!
                            <br/>
                            <br/>

                            
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
                <MDBIcon icon='running' /> Monday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Run 2 mile<br></br>
                Walk 1 mile<br></br>
                Sprint 10 seconds, walk 30 seconds 10x<br></br>
                
              </p>
              
              <a href="https://www.runnersworld.com/nutrition-weight-loss/a20853304/what-do-i-eat-before-my-race/" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> food before a run</a>
            
        
              
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
              <MDBIcon icon='clone left' /> Refule with rest</a>
            
              
        
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
                <MDBIcon icon='running' /> Wednesday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Run 3 mile<br></br>
                Walk 1 mile<br></br>
                Sprint 10 seconds, walk 30 seconds 15x<br></br>
                
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
                <MDBIcon icon='running' /> Thursday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Run 4 miles<br></br>
                Walk 1 mile<br></br>
                4 sprints for 15 seconds<br></br>
                
              </p>
              
              <a href="https://www.runnersworld.com/beginner/a20811257/proper-running-form-0/" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Running form</a>
            
              
        
              
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
                <MDBIcon icon='running' /> Friday
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p className="dark-grey-text">
                Run 5 miles<br></br>
                Walk 1 mile<br></br>
                4 sprints for 15 seconds<br></br>
                
              </p>
              
              <a href="https://flipbelt.com/blog/breathing-running" 
              target="_blank" class="stretched-link btn btn-default">  
              <MDBIcon icon='clone left' /> Running form</a>
            
        
              
            </div>
          </div>
        </MDBCard>

        

      </MDBCol>




    </MDBRow>
    <SpotifyBar/>
        </div>
    );
};

export default workout4;