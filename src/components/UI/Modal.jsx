import { Fragment } from "react";
import ReactDOM from "react-dom";

// Styles Import
import styles from "./Modal.module.css";

// backdrop to up in a particular position in dom
const Backdrop = ({ onCloseCart }) => {
  return <div className={styles.backdrop} onClick={onCloseCart} />;
};

const ModalOverlays = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
