import React from 'react';
import CountComp from './Countdown';
import './ZoomImage.css';
import { babyLinks } from '../util/baby-links';

function ZoomImage() {
    const tam = babyLinks.links.length-1;
    const sorteio = Math.floor(Math.random() * tam);
    return (
        <div id="container-zoom">
            <img 
                src={babyLinks.links[sorteio]} 
                alt="Omar">
            </img> 
            <div className="box-text">
                <center><h1>Esta chegando a</h1></center>
                <h2><center>Hora de me amar !</center></h2>
                <div className='Tempo' style={{position:'relative', top:'0px'}}>
                    <h2><CountComp /></h2>
                </div>
            </div>
        </div>
    )
}
export default ZoomImage;
