import Style from "./apropos.module.scss"
import Image from "next/image";



import picsContainer from "/public/images/imgAboutUs.svg";
const Apropos = () => {
    return (
        <div className={Style.container} id="about">
             <h1 className={Style.h1Apropos}>À PROPOS DE NOUS </h1>
            <div className={Style.imgDIv}><Image src={picsContainer} alt='Work Pictures' /></div>
        </div>
        
    )

}

export default Apropos;