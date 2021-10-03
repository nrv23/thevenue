import React,{useState,useEffect} from 'react';
import { Fade,Slide } from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';

const Discount = () => {

    const end = 30;
    const [start,setStart] = useState(0);

    const porcentage = () => {

        if(start < end) {
            setStart(prev => prev+1); // en el useState, en la funcion quye actualiza el state, el callback que devuelve es el valor anterior al actual de state
            // como en este caso es un valor numerico, puedo hacer un prev++ para ir aumentando en 1
        }
    }

    useEffect(() => {

        setTimeout(() => {
            if(start > 0 && start < end) {
                setStart(prev => prev+1); // en el useState, en la funcion quye actualiza el state, el callback que devuelve es el valor anterior al actual de state
                // como en este caso es un valor numerico, puedo hacer un prev++ para ir aumentando en 1
            }
        },30)

    },[start]); // cuando start cambie el effect se ejecuta de nuevo

    return ( 
        <div
            className="center_wrapper"
        >
            <div className="discount_wrapper">
                <Fade delay={700}

                    onVisibilityChange = { // el evento se ejecuta cada vez que se hace scroll por el componente highlights, y cambia a false o true si esta visible o no
                        (inView) => {
                            if(inView){ 
                                porcentage()
                            } else {

                            }
                        }
                    }
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide rigth>
                    <div className="discount_description">
                        <h3>Purchase ticket before 20th june</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <MyButton
                            text='Purchase Tickets'
                            link="https://google.com"
                            size="small"
                            style={{
                                color: '#ffffff',
                                background: '#ffa800'
                            }}
                            iconTicket ={true}
                        />
                    </div>
                </Slide>
            </div>
        </div>
      );
}
 
export default Discount;