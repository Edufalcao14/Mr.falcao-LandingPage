import { FiCheckCircle } from "react-icons/fi";
import Button from "../button";
import styles from "./succes.module.scss";

export function SuccessModal({ closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>Votre demande de prise de rendez-vous a été envoyée!!</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" />
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;