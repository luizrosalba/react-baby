import React from 'react';
import CountComp from './Countdown';
import './ZoomImage.css';
import { babyLinks } from '../util/baby-links';

function ZoomImage() {
    const tam = babyLinks.links.length-1;
    const sorteio = Math.floor(Math.random() * tam);
    return (
        <div id="container-zoom">
            <a 
                href="https://www.facebook.com/groups/ElzeroWebSchool/" 
                target="_blank">
                <img 
                    src={babyLinks.links[sorteio]} 
                    alt="Omar">
                </img> 
            </a>
            <div classNameco="box-text">
                <h1>Estou chegando!</h1>
                <h2><center>Me amem!</center></h2>
                <h2><CountComp /></h2>
            </div>
        </div>
    )
}
export default ZoomImage;
