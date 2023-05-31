import React from "react";
import "./App.css";
import { CtaButton } from "./components/CtaButton/CtaButton";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { addValueToField } from "./Form/Form.utils";
import { Form, FormFieldType, FormValues } from "./Form/Form";
import { addDocument, TableName } from "./api/create";

const requestTourFormConfig: FormFieldType[] = [
  {
    name: "formType",
    type: "string",
    options: {
      displayOnFront: false,
    },
    label: "Ф.И.О. или наименование турагентства",
    placeholder: "Введите имя или название",
    value: "Задать вопрос",
  },
  {
    name: "url",
    type: "string",
    options: {
      displayOnFront: false,
    },
    label: "",
    placeholder: "",
  },
  {
    name: "name",
    type: "string",
    options: {},
    label: "Имя",
    placeholder: "Введите имя или название",
  },
  {
    name: "phone",
    type: "string",
    options: {},
    label: "Контактные телефоны с кодом:",
    placeholder: "Введите номер телефона",
    helper: "Пожалуйста, внимательно проверьте номер",
  },
  {
    name: "email",
    type: "string",
    options: {},
    label: "Адрес электронной почты :",
    placeholder: "Введите адрес почты",
    helper: "Пожалуйста, внимательно проверьте адрес почты",
  },
  {
    name: "comment",
    type: "string",
    options: {},
    label: "Ваш вопрос",
    placeholder: "Введите ваши пожелания",
  },
];

function AskQuestion() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onNext = async (values: FormValues) => {
    await addDocument(
      TableName.WB_Quiz,
      values as FormValues,
      (Math.random() + 1).toString(36).substring(7)
    );
    window.location.href = "/stranica-spasibo.html";
  };
  return (
    <div style={{ padding: 6, position: "relative" }}>
      <CtaButton onClick={() => setIsOpen(true)} text="Задать вопрос" isSmall />

      <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Form
          isOneColumn
          onSubmit={(val) => onNext(val)}
          config={requestTourFormConfig.map((el) =>
            addValueToField(el, {
              url: window.location.href,
              formType: "Форма вопроса",
            } as unknown as FormValues)
          )}
          isLabelHidden={false}
          customButton={{ text: "Отправить" }}
          isButtonCentered
        />
      </ModalWindow>
    </div>
  );
}

export default AskQuestion;
