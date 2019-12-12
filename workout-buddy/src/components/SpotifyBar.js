import React, { Component, setState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBBtn, MDBNavItem } from 'mdbreact';
import { MDBContainer, MDBNavbarToggler, MDBCollapse, MDBNavLink, MDBIcon } from 'mdbreact';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faPlayCircle, faPauseCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify()

class SpotifyBar extends Component {
    axios = require('axios');
    rendered = false;

    constructor(props) {
        super(props)

        const params = this.getHashParams()
        const access_token = localStorage.getItem("access_token")
        if (params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token)
            localStorage.setItem("access_token", params.access_token)
        } else if(access_token !== null) {
            spotifyWebApi.setAccessToken(access_token)
        }

        const loggedIn = localStorage.getItem('loggedIn')
        this.state = {
            loggedIn: loggedIn,
            nowPlaying: {
                nameOfArtist: "",
                nameOfSong: "",
                image: "",
            },
            isPlaying: false,
            loggedOut: false
        }

    }

    /**
    * Obtains parameters from the hash of the URL
    * @return Object
    */
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    getNowPlaying() {
        spotifyWebApi.getMyCurrentPlaybackState()
            .then((response) => {
                if (response !== undefined && response.item !== undefined) {
                    let artistStr = ""
                    let artistsArr = response.item.artists
                    for (var i = 0; i < artistsArr.length; i++) {
                        if (i === 0 && artistsArr.length === 1) {
                            artistStr += artistsArr[i].name
                        } else if (i === 0) {
                            artistStr += artistsArr[i].name + " ft. "
                        } else if (i === artistsArr.length - 1) {
                            artistStr += artistsArr[i].name
                        } else {
                            artistStr += artistsArr[i].name + ","
                        }
                    }
                    this.setState({
                        nowPlaying: {
                            nameOfArtist: artistStr,
                            nameOfSong: response.item.name,
                            image: response.item.album.images[0].url,
                        },
                        isPlaying: response.is_playing
                    })
                } else {
                    this.setState({
                        nowPlaying: {
                            nameOfArtist: "Not playing anything",
                            nameOfSong: 'Not playing anything',
                            image: 'https://icon-library.net/images/black-spotify-icon/black-spotify-icon-19.jpg',
                        },
                        isPlaying: false
                    })
                }
            })
    }

    pause() {
        spotifyWebApi.pause()
            .then((response) => {
                if (response !== undefined) {
                    this.setState({
                        isPlaying: false
                    })
                }
            })
    }

    play() {
        spotifyWebApi.play()
            .then((response) => {
                if (response !== undefined) {
                    this.setState({
                        isPlaying: true
                    })
                }
            })
    }

    skipSong() {
        spotifyWebApi.skipToNext()
            .then((response) => {
                if (response !== undefined) {
                    this.getNowPlaying()
                }
            })
    }

    previousSong() {
        spotifyWebApi.skipToPrevious()
            .then((response) => {
                if (response !== undefined) {
                    this.getNowPlaying()
                }
            })
    }

    spotifyLoginRedirect() {
        localStorage.setItem('loggedIn', "true")
        window.location.href = 'http://localhost:8888/login'
    }

    async spotifyLogoutRedirect() {
        const url = 'https://accounts.spotify.com/en/logout'
        const spotifyLogoutWindow = window.open(url, '_blank')
        localStorage.setItem('loggedIn', "false")
        this.setState({ loggedIn: "false", loggedOut: true })
        setTimeout(() => this.setState({ loggedOut: false }), 2500)
    }

    render() {
        if (!this.rendered) {
            this.rendered = true
            this.getNowPlaying()
        }
        return (
            this.state.loggedIn === "true" ?
            <MDBNavbar className="spotify-bar" dark expand="md" scrolling fixed="bottom">
                <MDBNavbarNav left>
                            <MDBNavItem id="song-image-div" style={{ margin: "0.25%" }}>
                                <img id="song-image" src={this.state.nowPlaying.image} style={{ height: "4.5vh", width: "4.5vh" }} />
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavItem id="song-info">
                                    <div> Now Playing: {this.state.nowPlaying.nameOfSong} </div>
                                    <div> By: {this.state.nowPlaying.nameOfArtist} </div>
                                </MDBNavItem>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <div id="spotify-controls">
                            <FontAwesomeIcon className="spotButton" icon={faBackward} onClick={() => this.previousSong()} size="2x" style={{ margin: '1.5vh' }} />
                            {this.state.isPlaying === true ? <FontAwesomeIcon className="spotButton" icon={faPauseCircle} onClick={() => this.pause()} size="3x" style={{ margin: '1vh' }} />
                                : <FontAwesomeIcon className="spotButton" icon={faPlayCircle} onClick={() => this.play()} size="3x" style={{ margin: '1vh' }} />
                            }
                            <FontAwesomeIcon className="spotButton" icon={faForward} onClick={() => this.skipSong()} size="2x" style={{ margin: '1.5vh' }} />
                        </div>
                        <MDBNavbarNav right>
                            <MDBBtn id="spotify-logout" onClick={() => this.spotifyLogoutRedirect()}>
                                Log out of Spotify
                            </MDBBtn>
                        </MDBNavbarNav>
                    </MDBNavbar>
                :
                <MDBNavbar className="spotify-bar" dark expand="md" scrolling fixed="bottom">
                    <div class="spotify-login">
                        {this.state.loggedOut ?
                            <div id="logged-out">
                                <FontAwesomeIcon icon={faCheckCircle} size="4x" style={{ padding: "1%" }} />
                                <p style={{ fontSize: "2.5vh", paddingTop: "1vh" }}>Successfully Logged Out of Spotify</p>
                            </div>
                            :
                            false
                        }
                        <MDBBtn onClick={() => this.spotifyLoginRedirect()}>
                            Login to Spotify
                        </MDBBtn>
                    </div>
            </MDBNavbar>
        )
    }
}

export default SpotifyBar;
