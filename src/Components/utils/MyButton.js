import React from 'react';
import Button from '@material-ui/core/Button';
import ticketIcon from '../../resources/images/icons/ticket.png';

const MyButton = ({text,link,size,style,iconTicket}) => {
    return ( 
    
        <Button
            href={link} 
            variant="contained"
            size={size? size :'large'}
            style={{
                color:  '#ffffff',
                background:  '#8e8e8e',
               ...style // si en el prop style viene algo, va reemplazar lo anterior
            }}
        >   
            {
                iconTicket && <img 
                    src={ticketIcon} 
                    className="iconImage"
                    alt="icon_button"
                />
            }
            {text}
        </Button> 
    );
}
 
export default MyButton;