import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type ValuesType = Record<string, unknown>;
type QuizContextType = {
  currentStep: number;
  stepLimit: number;
  setCurrentStep: (arg: number) => void;
  setStepLimit: Dispatch<SetStateAction<number>>;
  values: ValuesType;
  setValues: Dispatch<SetStateAction<ValuesType>>;
};

export const QuizContext = createContext<QuizContextType>({
  currentStep: 1,
  stepLimit: 1,
  setCurrentStep: () => {},
  setStepLimit: function (value: React.SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
  values: {},
  setValues: function (value: React.SetStateAction<ValuesType>): void {
    throw new Error("Function not implemented.");
  },
});

export const QuizContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stepLimit, setStepLimit] = useState<number>(1);
  const [values, setValues] = useState<ValuesType>({});

  const value = useMemo(() => {
    return {
      currentStep,
      setCurrentStep: (arg: number) => {
        if (arg <= stepLimit && arg >= 1) {
          setCurrentStep(arg);
        }
      },
      setStepLimit,
      stepLimit,
      values,
      setValues,
    };
  }, [currentStep, setValues, stepLimit, values]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("QuizContext must be written in QuizContextProvider");
  }
  return context;
}
