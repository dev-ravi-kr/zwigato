import type { ReactNode } from "react";
import { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

interface BackdropProps {
  onClose: () => void;
}

interface ModalOverlayProps {
  children: ReactNode;
}

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Backdrop({ onClose }: BackdropProps) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
    </>
  );
}

function ModalOverlay({ children }: ModalOverlayProps) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

let portalElement = document.getElementById("overlays");

if (!portalElement) {
  const body = document.querySelector("body");
  const overLay = document.createElement("div");
  overLay.setAttribute("id", "overlays");
  body?.prepend(overLay);
  portalElement = overLay;
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    portalElement?.focus();
  }, []);

  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, portalElement!)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement!)}
    </Fragment>
  );
}
