import React from 'react';
import {
    Fade
} from 'react-awesome-reveal';

const Footer = () => {
    return ( 

        <footer className="bck_red">
            <Fade
                //triggerOnce esta propiedad indica que la transicion se ejecute solo una vez
                triggerOnce delay={500}  //tiempo en el que se va cargar el footer
            >
                <div className="font_rigtheous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">
                    The Venue 2021 all rights reserved
                </div>
            </Fade>
        </footer>
     );
}
 
export default Footer;