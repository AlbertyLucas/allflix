import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/index';
// import ButtonLink from './Components/ButtonLink';

function Menu() {
    return (

        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Flixall Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Vídeos
            </Button>
        </nav >
    );
}
export default Menu;
