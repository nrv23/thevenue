import React,{useState, useEffect,useCallback} from 'react';
import {Slide} from 'react-awesome-reveal';

const TimeUntil = () => {

    const [time,setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        second: '0'
    });

    const {
        days,
        hours,
        minutes,
        seconds
    } = time;

    const renderItem = (time,value) => (
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {value}
            </div>
        </div>
    )

    const getTimeUntil = useCallback((date) => {
        
        const time = (Date.parse(date) - Date.parse(new Date())); // parsea la fecha 
        //restar el dia futuro al dia actual para obtener los dias que quedan antes del deadline

        if(time < 0) {
            console.log("El día pasó")
        } else {
            //obtener los datos para obtener el tiempo restante

            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));

            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }   
        
        // la funcion usecallback reutiliza la mimsa instancia de la funcion que se ejecuta, de manera que llame nuevamente una nueva instancia
        // de la funcion hasta que alguna de sus depencias cambie.

        //useCallback funciona como el useEffect y tambuen se le pasan dependencias.

        //Una funcion con useCallback puede pasarse como dependencia a useEffect
    },[])

    

    useEffect(() => {
        setInterval(() => {
            getTimeUntil('Nov, 20, 2021, 01:20:00');
        },1000);
    },[getTimeUntil]); 

    return ( 

        <Slide
        left delay={1000} // acomodar a la izquierda el counter y con un delay de un segundo
        >
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    {renderItem(days,'Days')}
                    {renderItem(hours,'HS')}
                    {renderItem(minutes,'Min')}
                    {renderItem(seconds,'Sec')}
                </div>
            </div>
        </Slide>
     );
}
 
export default TimeUntil;