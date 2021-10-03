import React from 'react'
import { Zoom } from 'react-awesome-reveal';
import iconCalendar from '../../resources/images/icons/calendar.png';// importar imagenes
import iconLocation from '../../resources/images/icons/location.png';// importar imagenes

//Zoom
const VenueNFO = () => {
    return ( 

        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    

                    <Zoom className="vn_item" triggerOnce>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${iconCalendar})`
                                        }}
                                    >
                                    </div>
                                    <p className="vn_title">
                                        Event Date & Time
                                    </p>

                                    <p className="vn_desc"
                                        style={{
                                            width: '100%'
                                        }}
                                    >
                                        November 20 1:20:00 pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom className="vn_item" triggerOnce delay={500}>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${iconLocation})`
                                        }}
                                    >
                                    </div>
                                    <p className="vn_title"
                                        style={{
                                            width: '100%'
                                        }}
                                    >
                                        Event Location
                                    </p>

                                    <p className="vn_desc"
                                        style={{
                                            width: '100%'
                                        }}
                                    >
                                        375 Deer Oak, Oakland, CA 9835
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
     );
}
 
export default VenueNFO;