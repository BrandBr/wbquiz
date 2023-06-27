import { useQuizContext } from "../../context/QuizContext";
import { Progress } from "../Progress/Progress";
import { StepView } from "./StepView";
import { TableName } from "../../api/create";
import { FormFieldType } from "../../Form/Form";

type QuizType = {
  titles: string[]
  config: FormFieldType[][],
  table: TableName
}

export const Quiz = ({titles,table, config}: QuizType) => {
  const { currentStep, stepLimit } = useQuizContext();

  return (
    <>
      <Progress currStep={currentStep} lastStep={stepLimit} />
      <div>
        <StepView config={config} table={table} titles={titles} />
      </div>
    </>
  );
};
