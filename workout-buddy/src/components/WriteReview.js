import React, { useState, useEffect } from "react";
import { MDBInput, MDBContainer, MDBBtn, toast, ToastContainer } from "mdbreact";

let myStorage = window.localStorage;
let jwt = myStorage.getItem("jwt");
const axios = require("axios");
let user;
let notiftitle;
let notifmessage;


const WriteReview = () => {
    const [opened, setOpened] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [notify, setNotify] = useState(false);

    let textAreaValue = "";

    let close = () => {
        setOpened(false);
    }

    let notifyError = () => {
        return () => {

        }
    }

    let clearNot = () => {
        setNotify(false);
    }

    let newReview = () => {
        let usersWithReviews;
        axios
        .get("http://localhost:3000/account/status", {
          headers: {
            Authorization: "Bearer " + jwt //the token is a variable which holds the token
          }
        })
        .then(response => {
            let username = response.data.user.name;
            user = username;
            axios.get("http://localhost:3000/public/reviews/").then(res => {
                usersWithReviews = res.data.result;
                if (usersWithReviews.includes(username)) {
                    notiftitle = "Error"
                    notifmessage = "You have already made a review! Please update your old one.";
                    setNotify(true);
                    setTimeout(clearNot, 3000);
                    return;
                }
                setIsNew(true);
                setOpened(true);
            }).catch(err => {
                console.log(err);
            })
        })
        .catch(e => {
          console.log(e);
        });
    }

    let updateReview = () => {
        let usersWithReviews;
        axios
        .get("http://localhost:3000/account/status", {
          headers: {
            Authorization: "Bearer " + jwt //the token is a variable which holds the token
          }
        })
        .then(response => {
            let username = response.data.user.name;
            user = username;
            axios.get("http://localhost:3000/public/reviews/").then(res => {
                usersWithReviews = res.data.result;
                if (!usersWithReviews.includes(username)) {
                    notiftitle = "Error"
                    notifmessage = "You have not made a review yet. Please create a review before updating.";
                    setNotify(true);
                    setTimeout(clearNot, 3000);
                    return;
                }
                setOpened(true);
            }).catch(err => {
                console.log(err);
            })
        })
        .catch(e => {
          console.log(e);
        });
    }

    let handleDelete = () => {
        let usersWithReviews;
        axios
        .get("http://localhost:3000/account/status", {
          headers: {
            Authorization: "Bearer " + jwt //the token is a variable which holds the token
          }
        })
        .then(response => {
            let username = response.data.user.name;
            user = username;
            axios.get("http://localhost:3000/public/reviews/").then(res => {
                usersWithReviews = res.data.result;
                if (!usersWithReviews.includes(username)) {
                    notiftitle = "Error";
                    notifmessage = "You have not made a review yet.";
                    setNotify(true);
                    setTimeout(clearNot, 2500);
                    return;
                }

                // Delete review
                axios.delete("http://localhost:3000/public/reviews/" + user).then(res => {
                    notifmessage = "Your review has been successfully deleted. Feel free to write a new one!"
                    notiftitle = "Success!"
                    setNotify(true);
                    setTimeout(clearNot, 2500);
                }).catch(error => {
                    console.log(error);
                })
            }).catch(err => {
                console.log(err);
            })
        })
        .catch(e => {
          console.log(e);
        });    }

    let sendReview = () => {
        let reviewbody = document.getElementById('review-area').value;
        axios.post("http://localhost:3000/public/reviews/" + user, {
            "data": {
                "review": reviewbody
            }
        }).then(res => {
            setOpened(false);
            setSubmitted(true);
        }).catch((e) => {
            console.log(e);
        })
    }

    let sendUpdate = () => {
        let reviewbody = document.getElementById('review-area').value;

        axios.post("http://localhost:3000/public/reviews/" + user, {
            "data": {
                "review": reviewbody
            }
        }).then(res => {
            setOpened(false);
            setSubmitted(true);
        }).catch((e) => {
            console.log(e);
        })
    }

    let reset = () => {
        setOpened(false);
        setIsNew(false);
        setSubmitted(false);
    }

    return (
        <div>
            {notify ?
                <>
                <div className="notif">
                    <div class="card">
                        <div class="card-body">
                            <h4 id="notif-title" class="card-title"><a>{notiftitle}</a></h4>
                            <p class="card-text">{notifmessage}</p>
                        </div>
                    </div>
                </div>
                </>
                :
                <>
                </>
            }
            {submitted ?
                <>
                    <MDBContainer className="text-center" style={{marginTop: "13vh"}}>
                        <h3>Thanks for submitting!</h3>
                        <br/>
                        <MDBBtn onClick={reset}>Return</MDBBtn>
                        <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                    </MDBContainer>
                </>
                :
                <>
            <MDBContainer className="pt-5" style={{marginTop: "8vh", width: "42%"}}>
                <div className="text-center">
                    <h3>Give us a review!</h3>
                </div>
                <br/>
                <p className="text-center">
                    Write a Workout-Daddy review for other visitors to see! Reviews are randomly selected to be featured on our main page under "Recent Testimonials". You can post a review, update your old review, or delete your old review below.
                </p>
                <div className="center">
                    <MDBBtn onClick={newReview} href="#end">Write a Review</MDBBtn>
                    <MDBBtn onClick={updateReview} href="#end">Update Review</MDBBtn>
                    <MDBBtn onClick={handleDelete} className="is-warning-button">Delete Review</MDBBtn>
                    {opened ? 
                        (
                            <>
                                <MDBBtn color="blue-grey" onClick={close}>Close</MDBBtn>
                                <MDBContainer>
                                <div className="md-form md-outline">
                                    <textarea id="review-area" className="md-textarea form-control" rows="3"></textarea>
                                </div>
                                    {/* <MDBInput  id="review-area" type="textarea" label="Review" outline style={{height: "20vh"}}/> */}
                                    {isNew ?
                                        <>
                                            <MDBBtn onClick={sendReview} href="#end">Post Review</MDBBtn>
                                        </>
                                        :
                                        <>
                                            <MDBBtn onClick={sendUpdate} href="#end">Update Review</MDBBtn>
                                        </>
                                    }
                                </MDBContainer>
                            </>
                        )
                        :
                        (
                            <>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                            </>
                        )
                    }
                </div>
            </MDBContainer>
            </>
        }
        </div>
    );
};

export default WriteReview;