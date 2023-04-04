import Button from "../Button";
import Image from "next/image";
import Style from "./cards.module.scss"
import { Link, animateScroll as scroll} from 'react-scroll'

const Cards = (props) => {

    return (
        <div className={Style.containerCard} style={{backgroundImage :`url(${props.url})`}}>
             <h1 className={Style.h1Title}>{props.title}</h1>   
             <Link activeClass="active" to={props.link} spy={true} smooth={true} offset={50} duration={500}> <Button title="Prendre Rdv" kind="2" /> </Link>
        </div>
    )



}

export default Cards;