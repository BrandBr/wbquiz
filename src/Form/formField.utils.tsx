import { FormFieldType } from "./Form";

export function getPriceField(
  name: string,
  label: string,
  prefilledValue?: number
): FormFieldType {
  return {
    name,
    type: "number",
    options: {},
    label,
    rules: [{ required: true, message: "Пожалуйста введите цифру!" }],
    value: prefilledValue,
  };
}

export function getDateFieldRequired(
  name: string,
  label: string
): FormFieldType {
  return {
    name,
    type: "date",
    options: {},
    label,
    rules: [{ required: true, message: `Пожалуйста введите ${label}!` }],
  };
}

export function getDateField(name: string, label: string): FormFieldType {
  return {
    name,
    type: "date",
    options: {},
    label,
  };
}

export function getStringFieldRequired(
  name: string,
  label: string
): FormFieldType {
  return {
    name,
    type: "string",
    options: {},
    label,
    rules: [{ required: true, message: `Пожалуйста введите ${label}!` }],
  };
}

export function getStringField(name: string, label: string): FormFieldType {
  return {
    name,
    type: "string",
    options: {},
    label,
  };
}

export function getHiddenField(name: string): FormFieldType {
  return {
    name,
    type: "number",
    options: {
      displayOnFront: false,
    },
    label: "hidden",
  };
}

export function getSelectRequired(
  name: string,
  label: string,
  dictionary: string[],
  isMultiple?: boolean
): FormFieldType {
  return {
    name,
    type: isMultiple ? "multiSelect" : "select",
    options: {
      dictionary,
    },
    label,
    rules: [{ required: true, message: `Пожалуйста введите ${label}!` }],
  };
}
