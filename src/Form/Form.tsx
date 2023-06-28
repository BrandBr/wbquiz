import React from "react";
import {
  Select,
  Form as ANTDForm,
  Input,
  InputNumber,
  Switch,
  Typography,
  DatePicker,
  Radio,
  Checkbox,
} from "antd";
import dayjs from "dayjs";
import css from "./Form.module.css";
import { ArrayString } from "./ArrayString/ArrayString";
import locale from "antd/es/date-picker/locale/ru_RU";
import { Rule } from "antd/es/form";
import { FormButton } from "./FormButton/FormButton";
import { formValuesHandle } from "./Form.utils";

type FieldType =
  | "string"
  | "number"
  | "select"
  | "multiSelect"
  | "boolean"
  | "date"
  | "textArea"
  | "arrayString"
  | "radioGroup"
  | "checkboxGroup";

export type FormFieldOptions = {
  displayOnFront?: boolean;
  dictionary?: string[];
};

export type FormValueType = string | string[] | number | undefined | boolean;

export type FormFieldType = {
  name: string;
  type: FieldType;
  options: FormFieldOptions;
  label: string;
  value?: FormValueType;
  placeholder?: string;
  rules?: Rule[];
  helper?: string;
};

export type FormValues = Record<string, FormValueType>;

export type FormProps = {
  onBackClick?: () => void;
  config: FormFieldType[];
  onSubmit: (val: FormValues) => void;
  title?: string;
  description?: string;
  isOneColumn?: boolean;
  isLabelHidden?: boolean;
  isButtonCentered?: boolean;
  customButton?: {
    isDanger?: boolean;
    text?: string;
    isDisabled?: boolean;
  };
  isVo?: boolean;
};

export const Form = ({
  config,
  onSubmit,
  title,
  description,
  customButton,
  onBackClick,
  isOneColumn = false,
  isLabelHidden = true,
  isButtonCentered = false,
  isVo = false,
}: FormProps) => {
  const { Item } = ANTDForm;
  const [form] = ANTDForm.useForm();
  const { Title, Paragraph } = Typography;

  const getFormItems = (field: FormFieldType, key: string) => {
    if (field.type !== "date") {
      form.setFieldValue(field.name, field.value);
    } else {
      if (field.value) {
        form.setFieldValue(
          field.name,
          dayjs(field.value ? new Date(field.value as string) : Date.now())
        );
      }
    }
    switch (field.type) {
      case "boolean":
        return <Switch key={key} defaultChecked={form.getFieldValue(key)} />;
      case "string":
        return (
          <Input
            key={key}
            placeholder={field.placeholder || "Введите строку"}
          />
        );
      case "number":
        return (
          <InputNumber
            placeholder={field.placeholder || "Введите число"}
            key={key}
            style={{ width: "100%", height: "100%" }}
          />
        );
      case "date":
        return (
          <DatePicker
            locale={locale}
            name={field.name}
            style={{ width: "100%" }}
            picker="date"
            key={key}
            onChange={(val) => form.setFieldValue(field.name, dayjs(val))}
            placeholder={field.placeholder || "Выбирите дату"}
          />
        );
      case "textArea":
        return (
          <Input.TextArea
            key={key}
            placeholder={field.placeholder || "Введите текст"}
          />
        );
      case "multiSelect": {
        const options = (field.options.dictionary as string[])
          ?.map((item) => ({
            label: item,
            value: item as string,
          }));
        return (
          <Select
            key={key}
            mode="multiple"
            placeholder={field.placeholder || "Выбирите значение"}
            options={options}
            showSearch
          />
        );
      }
      case "select":
        return (
          <Select
            placeholder={field.placeholder || "Выбирите значение"}
            key={key}
            showSearch
            onChange={(value) => form.setFieldValue(field.name, value)}
          >
            {(field.options.dictionary as string[])?.map((item) => (
              <Select.Option key={item as string} value={item as string}>
                {item}
              </Select.Option>
            ))}
          </Select>
        );
      case "arrayString":
        return <ArrayString name={field.name} />;
      case "radioGroup":
        return (
          <Radio.Group key={key}>
            {(field.options.dictionary as string[])?.map((item) => (
              <Radio value={item}> {item} </Radio>
            ))}
          </Radio.Group>
        );
      case "checkboxGroup":
        // todo correct behaviour here
        return (
          <Checkbox.Group>
            <div className={css.wrapper}>
              {(field.options.dictionary as string[])?.map((item) => (
                <Checkbox value={item}>{item}</Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        );
      default:
        throw new Error("Unspecified input");
    }
  };

  const submit = () => {
    const values = formValuesHandle(form.getFieldsValue() as FormValues);
    onSubmit && onSubmit(values);
  };
  return (
    <ANTDForm
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={form}
      onFinish={submit}
      className={css.wrapper}
      labelWrap
    >
      {title && (
        <Title level={4} style={{ marginTop: 0 }} className={css.title}>
          {title}
        </Title>
      )}
      {description && <Paragraph>{description}</Paragraph>}
      <div className={isOneColumn ? css.formContentOneColumn : css.formContent}>
        <div>
          {(config || []).map((optionSettings) => {
            const {
              label,
              name,
              options: { displayOnFront = true },
              rules = [],
            } = optionSettings;
            return (
              <Item
                className={isLabelHidden ? "hiddenLabel" : ""}
                key={name}
                label={label}
                name={name}
                hidden={!displayOnFront}
                rules={rules}
              >
                <div>
                  {getFormItems(optionSettings, name)}
                  {optionSettings.helper && (
                    <span className={css.helper}>{optionSettings.helper}</span>
                  )}
                </div>
              </Item>
            );
          })}
        </div>
        <div>
          <Item>
            <div
              className={
                isButtonCentered ? css.formActionsCentered : css.formActions
              }
            >
              {onBackClick && (
                <FormButton
                  onClick={onBackClick}
                  text="Назад"
                  isVoButton={isVo}
                />
              )}
              <FormButton
                text={customButton?.text}
                isDisabled={!!customButton?.isDisabled}
                isVoButton={isVo}
              />
            </div>
          </Item>
        </div>
      </div>
    </ANTDForm>
  );
};
