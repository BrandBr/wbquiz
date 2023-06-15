import css from "./FormButton.module.css";

type CtaButtonProps = {
  onClick?: () => void;
  isDisabled?: boolean;
  text?: string;
  isVoButton?: boolean;
};

export const FormButton = ({
  onClick,
  isDisabled = false,
  text = "Далее",
  isVoButton = false,
}: CtaButtonProps) => {
  return (
    <div className={css.buttonWrapper}>
      <button
        onClick={onClick}
        className={isVoButton ? css.voButton : css.button}
        disabled={isDisabled}
      >
        <span className={css.buttonText}>{text}</span>
      </button>
    </div>
  );
};
