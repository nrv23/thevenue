import React from 'react';
import {        
    Drawer,
    List,
    ListItem
} from '@material-ui/core';
import { scroller } from 'react-scroll'
const SideDrawer = ({drawOpen,onClose}) => {

    const links = [
        { where:'featured',value:'To top'},
        { where:'venuenfo',value:'Venue NFO'},
        { where:'highlights',value:'Highlights'},
        { where:'pricing',value:'Pricing'},
        { where:'location',value:'Location'}
    ]


    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth: true,
            offset:-150
        });
        onClose(false); // cerrar el menu
    }

    const renderItem = (item) => (
        <ListItem button onClick={()=> scrollToElement(item.where)} key={item.where}>
            {item.value}
        </ListItem>
    )

    return ( 

        <Drawer
            anchor="right"
            open={drawOpen} // cuando el componente cargue, si la propiedad open esta en true, es como abrir un modal al carga el componente
            onClose={() => onClose(false)}
        >

        <List  component="nav"> {/* La propiedad component debe indicar cual etiqueta html va a usar */}
            {
                links.map(item => renderItem(item))
            }
        </List>

        </Drawer>
     );
}
 
export default SideDrawer;