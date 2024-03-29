import { Form, FormFieldType, FormValues } from "../../Form/Form";
import { useQuizContext } from "../../context/QuizContext";
import { addValueToField } from "../../Form/Form.utils";
import { useEffect } from "react";
import { addDocument, TableName } from "../../api/create";

type StepViewType = {
  titles: string[];
  config: FormFieldType[][];
  table: TableName;
  isVo?: boolean;
  isPl?: boolean
};
export const StepView = ({
  titles,
  config,
  table,
  isVo = false,
  isPl = false
}: StepViewType): JSX.Element => {
  const {
    currentStep,
    stepLimit,
    setStepLimit,
    values,
    setValues,
    setCurrentStep,
  } = useQuizContext();

  useEffect(() => {
    setStepLimit(config.length);
  }, []);

  const onNext = async (valuesLocal: FormValues) => {
    if (currentStep < stepLimit) {
      setValues({ ...values, ...valuesLocal });
      setCurrentStep(currentStep + 1);
    } else {
      setValues({ ...values, ...valuesLocal });
      await addDocument(
        table,
        { ...values, ...valuesLocal } as FormValues,
        (Math.random() + 1).toString(36).substring(7),
        isVo || isPl
      );
      window.location.href = isVo || !isPl
        ? "https://www.vash-otdyh.by/"
        : "/stranica-spasibo.html";
    }
  };

  return (
    <Form
      title={titles[currentStep - 1]}
      onSubmit={(val) => onNext(val)}
      config={config[currentStep - 1].map((el) =>
        addValueToField(el, {
          ...values,
          url: window.location.href,
          formType: "Квиз",
          sight: [],
        } as FormValues)
      )}
      isVo={isVo}
      customButton={{text: isPl ? 'więcej' : 'далее'}}
    />
  );
};
