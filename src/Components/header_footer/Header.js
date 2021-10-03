import React,{useEffect,useState} from 'react';
import { 

    AppBar,
    Toolbar,
    IconButton
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

const Header = () => {

    const [drawOpen, setDrawOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toggleDraw = state => {
        setDrawOpen(state);
    }

    const handleScroll = () => {
       if(window.scrollY === 0) {
        setHeaderShow(false)
       } else {
        setHeaderShow(true)
       }
    }


    //crear una funcion usando un effect para detectar cuando se ejecuta el evento scroll en la pantalla

    useEffect(() => {
     window.addEventListener('scroll',handleScroll);   
    },[]);// solo se va cargar cuando el componente cargue

    
    return ( 
        <AppBar
            position="fixed"
            style={{ //pasar estilos por props
                backgroundColor: headerShow? '#2f2f2f':'transparent', //si el evento scroll en y es mayor a 0 se muestra en la barra
                // de navegacion el color negro, sino seria transparente
                boxShadow: 'none',
                padding: '10px 0px'
            }}
        >
            <Toolbar >
                <div className="header_logo">
                    <div className="font_rigtheous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>

                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={() => toggleDraw(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer 
                    drawOpen={drawOpen}
                    onClose={toggleDraw}
                />
            </Toolbar>
            
        </AppBar>
      );
}
 
export default Header;