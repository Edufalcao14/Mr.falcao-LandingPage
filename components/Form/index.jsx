import Image from "next/image";
import img from "/public/images/imgForm.svg";
import Style from "./form.module.scss"
import Select from "../SelectInput";
import Input from "../inputText";
import React from "react";
import axios from 'axios';

const form = () => {
    const sendEmail = () => {
        axios
        .post("/api/sendEmail")
        .then(() => console.log("Send Email" , { messageBody :`Nom: $(nom) ,Prenom : $(prenom), NumeroContact : $(numero) , Adresse : $(adresse) , Description : $(description) `}))        .catch(() => console.log("Error! Email wasn't send"));
    }
    return (
        <div className={Style.container} id="contact">
            <div className={Style.conainerImg}>
                <h1 className={Style.Rdv}>PRENDRE UN RENDEZ-VOUS</h1 >
                <p className={Style.RdvText}> Nous vous contacterons via
                    votre numéro de téléphone
                    pour convenir un
                    rendez-vous.
                </p>
                <Image src={img} alt="logo" />
            </div>
            <div className={Style.containerForm}>
                <h1 className={Style.h1Main} >Remplissez les détails pour prendre votre rendez-vous</h1>
                <form className={Style.form} >
                    <h1 className={Style.h1}>Nom</h1>
                    <Input type="text" placeholder="Votre nom" required />
                    <h1 className={Style.h1}>Prénom</h1>
                    <Input type="text" placeholder="Votre prénom" required />
                    <h1 className={Style.h1}>Numero de Contact</h1>
                    <Input
                        type="text"
                        placeholder="Numero Belge exemple : +32046527..."
                        pattern="^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$"
                        required
                    />
                    <h1 className={Style.h1}>Adresse</h1>
                    <Input type="text" placeholder="Avenue de l'exemple 12 , 1000 Bruxelles " required />
                    <h1 className={Style.h1}>Type de service demandé :</h1>
                    <Select
                        placeholder="Type de Services"
                        option={[
                            { label: "Jardinage", value: "Jardinage" },
                            { label: "Peinture", value: "Peinture" },
                            { label: "Bricolage", value: "Bricolage" },
                            { label: "Reparations", value: "Reparations" },
                            { label: "Autre", value: "Autre" },
                        ]}
                        required
                    />
                    <h1 className={Style.h1}>Description du service </h1>
                    <textarea className={Style.textArea} rows="4" cols="50" name="comment" form="usrform" maxLength="100" placeholder="Décrivez brièvement ce dont vous avez besoin">
                    </textarea>
                    <input type="submit" className={Style.submit} onClick={()=> sendEmail } />
                </form>
            </div>

        </div>
    )

}

export default form;