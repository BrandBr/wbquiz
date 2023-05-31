import React from "react";
import css from "./ModalWindows.module.css";
import closeIcon from "../../assets/icons/closeIcon.svg";

type ModalWindowProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({
  children,
  isOpen,
  onClose,
}: ModalWindowProps) => {
  return (
    <div className={isOpen ? css.background : css.hidden}>
      <div className={css.backtop}>
        <img className={css.closeButton} src={closeIcon} onClick={onClose} />
        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};
