import React from "react";
import './NavBar.css';
import logo from '../../assets/img/logod.png' 
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className="NavBar">

                <img src={logo} alt="" />
                


                <a href="">Comida fav</a>
                <a href="">Gustos Musicales</a>
                <a href="">Hobbies</a>
                <a href="">Habilidades</a>
                <a href="">Contacto</a>
                

                
                <input type="text" name="" id="" placeholder="B U S C A R.."/>
                


                <button>Iniciar sesion</button>
            </div>
        </>
    );
}

export default NavBar;