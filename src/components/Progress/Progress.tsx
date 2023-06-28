import { ProgressBar } from "./ProgressBar/ProgressBar";
import css from "./Progress.module.css";

type ProgressProps = {
  currStep: number;
  lastStep: number;
  isVo?: boolean;
};
export const Progress = ({ currStep, lastStep, isVo }: ProgressProps) => {
  const text =
    currStep === lastStep
      ? "Осталось ответить на последний вопрос, чтобы подобрать тур"
      : `Осталось вопросов до подбора тура: ${lastStep - currStep}`;
  const headline = `Вопрос ${currStep} из ${lastStep}`;

  return (
    <div>
      <ProgressBar
        percent={(currStep / lastStep) * 100}
        text={text}
        isVo={isVo}
      />
      <div className={css.headline}>{headline}</div>
    </div>
  );
};
