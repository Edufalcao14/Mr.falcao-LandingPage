import { FiXSquare } from "react-icons/fi";
import Button from "../Button";
import styles from "./fail.module.scss";

export const FailModal = ({ closeModal }) => {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiXSquare />
        <p>Votre demande de prise de rendez-vous n`&apos`a pas pu être envoyée, veuillez réessayer.</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" kind="1" />
        </div>
      </div>
    </div>
  );
};

export default FailModal;