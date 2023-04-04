import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Style from "./header.module.scss"
import Button from "../Button";
import React from "react";
import { Link, animateScroll as scroll} from 'react-scroll'


const Header = () => {
    return (
        <div className={Style.container}>
            <div className={Style.logo}>
                <Image src={Logo} alt='Logo' />
            </div>
            <div className={Style.menu}>
                <ul>
                    <li>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
                            HOME
                        </Link>
                        <Link activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500}>
                            SERVICES
                        </Link>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                        À PROPOS DE NOUS
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={Style.action}>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}> <Button title="Contact" kind="1" /></Link>
            </div>
            <div id="home">

            </div>
        </div>

    )
};
export default Header;