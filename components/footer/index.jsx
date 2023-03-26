import Style from "./footer.module.scss"
import insta from "/public/images/insta.png";
import email from "/public/images/email.png";
import face from "/public/images/face.png";
import Image from "next/image";

const footer = () => {

    return (
        <footer className={Style.footer}>
            <div className={Style.socialMediaContainer}></div>
            <h1>Suivez-nous sur nos réseaux sociaux</h1>
            <ul className={Style.socialIcon}>
                <li className={Style.socialIconItem}>
                    <a className={Style.socialIconItemLink} href="#">
                        <Image src={insta} alt="icon instagram"></Image>
                    </a>
                </li>
                <li className={Style.socialIconItemLink}>
                    <a  href="#">
                        <Image src={email} alt="icon email"></Image>
                    </a>
                </li>
                <li className={Style.socialIconItemLink}>
                    <a  href="#">
                        <Image src={face} alt="icon Facebook"></Image>
                    </a>
                </li>
            </ul>
            <div className={Style.containerMenu}>
                <ul className={Style.menu}>
                    <li className={Style.menuItem}><a className={Style.menuLink} href="#">Home</a></li>
                    <li className={Style.menuItem}><a className={Style.menuLink} href="#about">About</a></li>
                    <li className={Style.menuItem}><a className={Style.menuLink} href="#work">Services</a></li>
                    <li className={Style.menuItem}><a className={Style.menuLink} href="#contact">Contact</a></li>
                </ul>
            </div>
            <p>&copy;2023 MR Falcao | All Rights Reserved</p>
        </footer>
    )

}

export default footer;