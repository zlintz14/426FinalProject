import React from 'react';
import TitleScreen  from "./TitleScreen";
import PublicFeatures  from "./PublicFeatures";
import Testimonial from "./Testimonial";


function FullMainPage(props) {

    return (
      <div className="App">
        <TitleScreen className="Background"/>
        <PublicFeatures className="FeaturesBackground"/>
        <Testimonial />
      </div>  
    );
}
export default FullMainPage;