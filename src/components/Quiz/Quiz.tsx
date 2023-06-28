import { useQuizContext } from "../../context/QuizContext";
import { Progress } from "../Progress/Progress";
import { StepView } from "./StepView";
import { TableName } from "../../api/create";
import { FormFieldType } from "../../Form/Form";

type QuizType = {
  titles: string[];
  config: FormFieldType[][];
  table: TableName;
  isVo?: boolean;
};

export const Quiz = ({ titles, table, config, isVo }: QuizType) => {
  const { currentStep, stepLimit } = useQuizContext();

  return (
    <>
      <Progress currStep={currentStep} lastStep={stepLimit} isVo={isVo} />
      <div>
        <StepView config={config} table={table} titles={titles} isVo={isVo} />
      </div>
    </>
  );
};
