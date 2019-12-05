import React from 'react';
import Navbar from './Navbar'
import WorkoutSearch from './WorkoutSearch';

function WorkoutsPage(props) {
    return (
        <div className="workoutsPageBody">
            <Navbar />
            <WorkoutSearch />
        </div>
    );
}

export default WorkoutsPage;
