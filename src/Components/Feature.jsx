import React from 'react';
import FeatureBox from './FeatureBox';

import fi1 from '../images/1.svg';
import fi2 from '../images/2.svg';
import fi3 from '../images/3.svg';
import fi4 from '../images/4.svg';

export default function Feature() {
    const features= [{
        title:'Weight Lifting',
        img:fi1
    },{
        title:'Specific Muscle',
        img:fi2
    },{
        title:'Flex Your Muscle',
        img:fi3
    },{
        title:'Cardio Exercise',
        img:fi4
    }];

    const featureShow =features.map((f,index)=><FeatureBox key={index} title={f.title} img={f.img}/>)
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className="a-container">
        {featureShow}
      </div>
    </div>
  )
}
