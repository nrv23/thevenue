import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//cargar las imagenes


import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinity: true, // volver al primer slide cuando llega al final
        autoplay: true , // se ejecute automaticamente
        speed: 500 //velocidad en milisegundos al mostrar cada slide
    };

    return ( 

        <div className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`
            }}
        >
            <Slider {...settings}>
            <div>
                <div className="carrousel_image"
                    style={{
                        background: `url(${slide_one})`,
                        height: `${window.innerHeight}px`
                    }}
                >

                </div>
            </div>
            <div>
                <div className="carrousel_image"
                    style={{
                        background: `url(${slide_two})`,
                        height: `${window.innerHeight}px`
                    }}
                >

                </div>
            </div>
            <div>
                <div className="carrousel_image"
                    style={{
                        background: `url(${slide_three})`,
                        height: `${window.innerHeight}px`
                    }}
                >

                </div>
            </div>
            </Slider>
        </div>

     );
}
 
export default Carrousel;