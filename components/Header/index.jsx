import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Style from "./header.module.scss"
import Button from "../Button";
import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll'


const Header = () => {

    return (
        <div className={Style.container}>
            <div className={Style.logo}>
                <Image src={Logo} alt='Logo' className={Style.logoImg} />
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
                            À propos
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={Style.menuPhone}>
                <div className={Style.dropdown}>
                    <Button title="|||" kind="1" className={Style.dropbtn} />
                    <div className={Style.dropdownContent}>
                    <Link className={Style.links} activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
                            HOME
                        </Link>
                        <Link className={Style.links} activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500}>
                            SERVICES
                        </Link>
                        <Link className={Style.links} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                            À propos
                        </Link>
                        <Link className={Style.links} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                           Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div className={Style.action}>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}> <Button title="Contact" kind="1" /></Link>
            </div>
        </div>
    )
};
export default Header;