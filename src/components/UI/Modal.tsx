import type { FC, ReactNode } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

let portalElement = document.getElementById("overlays");

if (!portalElement) {
  const body = document.querySelector("body");

  const overLay = document.createElement("div");
  overLay.setAttribute("id", "overlays");

  body?.prepend(overLay);

  portalElement = overLay;

  // throw new Error("Element with id 'overlays' not found");
}

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement!
      )}
    </Fragment>
  );
};

export default Modal;
