import React, { useState, useEffect } from "react";

import {
    MDBRow,
    MDBCard,
    MDBCol,
    MDBContainer,
    MDBCardBody,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
import { Link } from 'react-router-dom';

let list;
const axios = require('axios');
let testimonial = "Loading...";
let author = "..."

const Testimonial = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/public/reviews').then(res => {
            let list = Object.keys(res.data.result);
            if (list.length === 0) {
                testimonial = "There are currently no testimonials. :("
                author = "System";
                setLoaded(true);
                return;
            }
            author = list[list.length - 1];
            console.log(res.data.result);
            testimonial = res.data.result[author].review;
          setLoaded(true);
        });
    }, []);

    return (
        <div>
            <section className="text-center my-5 PublicFeaturesSection">
                <h1 className="h1-responsive font-weight-bold my-5">Recent Testimonial</h1>
                <MDBContainer>
                    <br/>
                    <br/>                    
                    <br/>
                    <br/>
                    <h5>
                    <MDBIcon icon='quote-left' style={{marginRight: "20px"}} />
                        {testimonial}
                        <MDBIcon icon='quote-right' style={{marginLeft: "20px"}} />

                    </h5>
                    <br/>
                    <br/>
                    <h3 style={{marginLeft: "10%"}}><strong>- {author}</strong></h3>
                </MDBContainer>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>

            <section className="magazine-section my-5 text-center">
                <h1 className="h1-responsive font-weight-bold my-5">
                    Get Started Today!
                </h1>
                <MDBContainer style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <MDBRow
                        className="center"
                        style={{ width: '120%', marginLeft: '-10%' }}
                    >
                        <MDBCol lg="6">
                            <MDBCard
                                style={{
                                    height: '100px',
                                    marginTop: '60px',
                                    width: '30rem',
                                    marginLeft: 'auto'
                                }}
                            >
                                <img
                                    src="https://media.self.com/photos/58d2ca37d92aa7631e120f7c/4:3/w_728,c_limit/plank-at-gym.jpg"
                                    className="img-fluid featureImage"
                                    alt=""
                                />
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="6">
                            <MDBCard
                                style={{
                                    marginTop: '50px',
                                    width: '30rem',
                                    marginRight: 'auto'
                                }}
                            >
                                <h2 className=" my-4 ">Click here to sign up!</h2>
                                <MDBCardBody>
                                    <Link to="/signup">
                                        <MDBBtn>Sign Up</MDBBtn>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard
                                style={{
                                    marginTop: '20px',
                                    width: '30rem',
                                    marginRight: 'auto'
                                }}
                            >
                                <h2 className=" my-4 ">Or Log In To Your Account</h2>
                                <MDBCardBody>
                                    <Link to="/login">
                                        <MDBBtn>Log In</MDBBtn>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    );
};

export default Testimonial;