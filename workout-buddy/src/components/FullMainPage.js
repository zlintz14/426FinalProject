import React from 'react';
import TitleScreen  from "./TitleScreen";
import PublicFeatures  from "./PublicFeatures";


function FullMainPage(props) {

    return (
   <div className="App">
     <TitleScreen className="Background"/>
     <PublicFeatures className="FeaturesBackground"/>
     </div>  
    );
}
export default FullMainPage;