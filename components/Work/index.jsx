import Button from "../Button";
import Style from "./work.module.scss"
import Cards from "../Cards";
import React  from "react";


const Work = () => {
    return (
        <div className={Style.container} id="work">
            <h1>SERVICES OFFERTS</h1>
            <div className={Style.containerCards}>
                <Cards title="JARDINAGE"
                 url="/images/JardinageCard.svg"
                 link="contact"/>
                  <Cards title="PEINTURE"
                 url="/images/PeintureCard.svg"
                 link="contact"/>
                 <Cards title="BRICOLAGE"
                 url="/images/BricolageCard.svg"
                 link="contact"/>
                  <Cards title="REPARATIONS"
                 url="/images/ReparationCard.svg"
                 link="contact"/>
            </div>
        </div >
    )
};
export default Work;