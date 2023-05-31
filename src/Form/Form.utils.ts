import { FormFieldType, FormValues } from "./Form";
import dayjs from "dayjs";

export const addValueToField = (
  field: FormFieldType,
  object?: FormValues
): FormFieldType => {
  const objectKeys = Object.keys(object || {});
  const isKeyAvailable = objectKeys.includes(field.name);
  const value = isKeyAvailable ? (object ?? {})[field.name] : undefined;
  return {
    ...field,
    value,
  };
};

export const formValuesHandle = (values: FormValues) => {
  console.log(values);
  return Object.keys(values).reduce((acc, key) => {
    if (values[key] instanceof dayjs) {
      acc[key] = dayjs(values[key] as string).valueOf();
    } else {
      acc[key] = values[key];
    }
    return acc;
  }, {} as FormValues);
};
