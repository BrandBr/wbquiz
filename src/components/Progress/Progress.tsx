import { ProgressBar } from "./ProgressBar/ProgressBar";
import css from "./Progress.module.css";

type ProgressProps = {
  currStep: number;
  lastStep: number;
  isVo?: boolean;
  isPl?: boolean;
};
export const Progress = ({
  currStep,
  lastStep,
  isVo,
  isPl = false,
}: ProgressProps) => {
  const getTextTranslation = (): string => {
    switch (true) {
      case currStep === lastStep && !isPl:
        return "Осталось ответить на последний вопрос, чтобы подобрать тур";
      case currStep !== lastStep && !isPl:
        return `Осталось вопросов до подбора тура: ${lastStep - currStep}`;
      case currStep === lastStep && isPl:
        return "Ostatnie pytanie";
      case currStep !== lastStep && isPl:
        return `Pozostało odpowiedzieć na ${lastStep - currStep} pytań `;
      default:
        return "No translation";
    }
  };

  const headline = isPl
    ? `Pytanie ${currStep} z ${lastStep}`
    : `Вопрос ${currStep} из ${lastStep}`;

  return (
    <div>
      <ProgressBar
        percent={(currStep / lastStep) * 100}
        text={getTextTranslation()}
        isVo={isVo}
      />
      <div className={css.headline}>{headline}</div>
    </div>
  );
};
