import React from "react";
import css from "./CtaButton.module.css";

type CtaButtonProps = {
  onClick: () => void;
};

export const CtaButton = ({ onClick }: CtaButtonProps) => {
  return (
    <div className={css.buttonWrapper}>
      <button onClick={onClick} className={css.button}>
        <span className={css.buttonText}>Получить подборку туров</span>
      </button>
    </div>
  );
};
