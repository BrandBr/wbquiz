import { Form, FormValues } from "../../Form/Form";
import { WbQuizConfig, WbQuizTitles } from "./WbQuizConfig";
import { useQuizContext } from "../../context/QuizContext";
import { addValueToField } from "../../Form/Form.utils";
import { useEffect } from "react";
import { addDocument, TableName } from "../../api/create";

export const StepView = (): JSX.Element => {
  const {
    currentStep,
    stepLimit,
    setStepLimit,
    values,
    setValues,
    setCurrentStep,
  } = useQuizContext();

  useEffect(() => {
    setStepLimit(WbQuizConfig.length);
  }, []);

  const onNext = async (valuesLocal: FormValues) => {
    console.log(valuesLocal);

    if (currentStep < stepLimit) {
      setValues({ ...values, ...valuesLocal });
      setCurrentStep(currentStep + 1);
    } else {
      setValues({ ...values, ...valuesLocal });
      await addDocument(
        TableName.WB_Quiz,
        values as FormValues,
        (Math.random() + 1).toString(36).substring(7)
      );
      window.location.href = "/stranica-spasibo.html";
    }
  };

  return (
    <Form
      title={WbQuizTitles[currentStep - 1]}
      onSubmit={(val) => onNext(val)}
      config={WbQuizConfig[currentStep - 1].map((el) =>
        addValueToField(el, {
          ...values,
          url: window.location.href,
        } as FormValues)
      )}
    />
  );
};
