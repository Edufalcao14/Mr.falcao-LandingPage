import Image from "next/image";
import Logo from "/public/images/logoHome.png";
import Style from "./welcome.module.scss"
import Button from "../Button";
import { Link, animateScroll as scroll } from 'react-scroll'


const Welcome = () => {
    return (
        <div className={Style.container} id="home">
            <Image src={Logo} alt='Logo' className={Style.logo} />
            <h1 className={Style.h1}>Votre maison a besoin dun héros? Faites appel à Mr. Falcao, le sauveur de vos projets de bricolage!</h1>
            <Link className={Style.btnDiv} activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500}>
                <Button className={Style.Button} title="Découvrez nos Services" kind="2" />
            </Link>
        </div >
    )
};

export default Welcome;