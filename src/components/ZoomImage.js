import React from 'react';
import CountComp from './Countdown';
import './ZoomImage.css';

function ZoomImage() {

    return (
        <div id="container-zoom">
            <a 
                href="https://www.facebook.com/groups/ElzeroWebSchool/" 
                target="_blank">
                <img 
                    src="https://images.unsplash.com/photo-1548897969-80be2924dc9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    alt="Omar">
                </img> 
            </a>
            <div class="box-text">
                <h1>Estou chegando!</h1>
                <h2><center>Me amem!</center></h2>
                <h2><CountComp /></h2>
            </div>
        </div>
    )
}
export default ZoomImage;
