import Image from "next/image";
import img from "/public/images/imgForm.svg";
import Style from "./form.module.scss"
import Select from "../SelectInput";
import Input from "../inputText";
import Button from "../Button";
import React from "react";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup";

const contact = () => {


    const formik = useFormik({
        initialValues: {
            name: "",
            firstname: "",
            phone: "",
            adress: "",
            serviceType: "",
            description: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Veuillez compléter le champ de nom"),
            firstname: Yup.string().required("veuillez compléter le champ de prénom"),
            phone: Yup.string()
                .matches("", "veuillez inserer un numero Belge valide")
                .required("veuillez compléter le champ 'Numero de contact'"),
            adress: Yup.string().required("veuillez compléter le champ de l'adresse"),
            serviceType: Yup.string().required("veuillez compléter le champ du Type de service"),
            description: Yup.string().required("veuillez compléter le champ pour la description"),

        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmitForm(values),
    });

    const handleSubmitForm = (values) => {
        console.log("Send Email : ", values);
        axios
            .post("/api/sendEmail", {
                messageBody: ` Nom : ${values.name},\n Prénom : ${values.email},\n Numero De Contact : ${values.phone},\n Adresse : ${values.adress},\n  Type de Service demandé : ${values.serviceType},\n Description du Service : ${values.description}`,
            })
            .then(() => console.log("Email Send"))
            .catch(() => console.log("Email wasn't send "));

    };
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

                <form className={Style.form} id="forms" onSubmit={formik.handleSubmit} >

                    <h1 className={Style.h1}>Nom</h1>
                    <Input
                        id="name"
                        name="name"
                        value={formik.values.name}
                        type="text"
                        placeholder="Votre nom"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}

                        required
                    />

                    <h1 className={Style.h1}>Prénom</h1>
                    <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="Votre prénom"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        required
                    />

                    <h1 className={Style.h1}>Numero de Contact</h1>
                    <Input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Numero Belge exemple : +32046527..."
                        pattern="^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        required
                    />

                    <h1 className={Style.h1}>Adresse</h1>
                    <Input
                        id="adress"
                        name="adress"
                        type="text"
                        placeholder="Avenue de l'exemple 12 , 1000 Bruxelles "
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.adress}
                        required />

                    <h1 className={Style.h1}>Type de service demandé :</h1>
                    <Select
                        id="serviceType"
                        name="serviceType"
                        placeholder="Type de Services"
                        option={[
                            { label: "Jardinage", value: "Jardinage" },
                            { label: "Peinture", value: "Peinture" },
                            { label: "Bricolage", value: "Bricolage" },
                            { label: "Reparations", value: "Reparations" },
                            { label: "Autre", value: "Autre" },
                        ]}
                        onChange={formik.handleChange}
                        value={formik.values.serviceType}
                        required
                    />

                    <h1 className={Style.h1}>Description du service </h1>
                    <textarea
                        id="description"
                        name="description"
                        className={Style.textArea}
                        value={formik.values.description}
                        rows="4" cols="50"
                        form="usrform"
                        maxLength="100"
                        placeholder="Décrivez brièvement ce dont vous avez besoin"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        
                    />
                    <Button type="submit" title="Envoyer" kind="2" />
                </form>
            </div>

        </div>
    )

}

export default contact;