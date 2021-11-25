import React from 'react';
import Contact from './main/Contact';
import Information from './main/Information';
import Map from './main/Map';
import Slider from './main/Slider';

export default class Main extends React.Component{
    render(){
        return(
            <div class="main">
                <Slider />
                <Information />
                <Contact />
                <Map />
            </div>
        );
    }
}
