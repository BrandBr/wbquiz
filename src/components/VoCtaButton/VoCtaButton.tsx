import React from "react";
import css from "./VoCtaButton.module.css";

type CtaButtonProps = {
  onClick: () => void;
  text?: string;
  isSmall?: boolean;
};

export const VoCtaButton = ({
  onClick,
  text,
  isSmall = false,
}: CtaButtonProps) => {
  return (
    <div className={css.buttonWrapper}>
      <button
        onClick={onClick}
        className={isSmall ? css.buttonSmall : css.button}
      >
        <span className={isSmall ? css.buttonTextSmall : css.buttonText}>
          {text || "Получить подборку туров"}
        </span>
      </button>
    </div>
  );
};
