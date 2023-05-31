import { useQuizContext } from "../../context/QuizContext";
import { Progress } from "../Progress/Progress";
import { StepView } from "./StepView";

export const Quiz = () => {
  const { currentStep, stepLimit } = useQuizContext();

  return (
    <>
      <Progress currStep={currentStep} lastStep={stepLimit} />
      <div>
        <StepView />
      </div>
    </>
  );
};
