import css from "./FormButton.module.css";

type CtaButtonProps = {
  onClick?: () => void;
  isDisabled?: boolean;
  text?: string;
};

export const FormButton = ({
  onClick,
  isDisabled = false,
  text = "Далее",
}: CtaButtonProps) => {
  return (
    <div className={css.buttonWrapper}>
      <button onClick={onClick} className={css.button} disabled={isDisabled}>
        <span className={css.buttonText}>{text}</span>
      </button>
    </div>
  );
};
