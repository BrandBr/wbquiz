import React from "react";
import "../App.css";
import { ModalWindow } from "../components/ModalWindow/ModalWindow";
import { addValueToField } from "../Form/Form.utils";
import { Form, FormFieldType, FormValues } from "../Form/Form";
import { addDocument, TableName } from "../api/create";
import { VoCtaButton } from "../components/VoCtaButton/VoCtaButton";

const requestTourFormConfig: FormFieldType[] = [
  {
    name: "formType",
    type: "string",
    options: {
      displayOnFront: false,
    },
    label: "Ф.И.О. или наименование турагентства",
    placeholder: "Введите имя или название",
    value: "Заявка на тур",
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
    label: "Ф.И.О. или наименование турагентства",
    placeholder: "Введите имя или название",
  },

  {
    name: "cityLive",
    type: "string",
    options: {},
    label: "Город вашего проживания (нахождения)",
    placeholder: "Введите город проживания",
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
    rules: [{ required: true, message: "Это поле обязательно" }],
  },
  {
    type: "string",
    name: "startDate",
    options: {},
    label: "Дата старта тура",
    helper: "Можете ввести приблизительную дату",
  },
  {
    name: "peoples",
    type: "number",
    options: {},
    label: "Количество человек в группе:",
    placeholder: "Введите количество человек",
  },
  {
    name: "comment",
    type: "string",
    options: {},
    label: "Ваш комментарий к заявке:",
    placeholder: "Введите ваши пожелания",
  },
];
function VoRequestForm() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onNext = async (values: FormValues) => {
    await addDocument(
      TableName.VO_Quiz,
      values as FormValues,
      (Math.random() + 1).toString(36).substring(7),
      true
    );
    //window.location.href = "/stranica-spasibo.html";
  };
  return (
    <div style={{ padding: 6, position: "relative" }}>
      <VoCtaButton onClick={() => setIsOpen(true)} text="Отправить заявку" />

      <ModalWindow isVo={true} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Form
          isOneColumn
          title="Форма заявки на тур"
          onSubmit={(val) => onNext(val)}
          config={requestTourFormConfig.map((el) =>
            addValueToField(el, {
              url: window.location.href,
              formType: "Форма заявки на тур",
            } as unknown as FormValues)
          )}
          isLabelHidden={false}
          customButton={{ text: "Отправить" }}
          isButtonCentered
          isVo={true}
        />
      </ModalWindow>
    </div>
  );
}

export default VoRequestForm;
