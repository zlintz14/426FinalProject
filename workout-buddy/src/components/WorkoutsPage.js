import React from 'react';
import Navbar from './Navbar'
import WorkoutSearch from './WorkoutSearch';
import SpotifyBar from './SpotifyBar';

function WorkoutsPage(props) {
    return (
        <div className="workoutsPageBody">
            <Navbar />
            <WorkoutSearch />
            <SpotifyBar />
        </div>
    );
}

export default WorkoutsPage;
