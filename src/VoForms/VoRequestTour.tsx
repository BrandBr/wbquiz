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
    value: "Заказать звонок",
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
    rules: [{ required: true, message: "Это поле обязательно" }],
  },
  {
    name: "email",
    type: "string",
    options: {},
    label: "Email",
    placeholder: "Email",
  },
  {
    name: "startDateString",
    type: "string",
    options: {},
    label: "Желаемая дата выезда",
    placeholder: "дата выезда",
  },
  {
    name: "comment",
    type: "textArea",
    options: {},
    label: "Комменатрий",
    placeholder: "Введите ваши пожелания",
  },
];

function VoRequestTour() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onNext = async (values: FormValues) => {
    await addDocument(
      TableName.VO_Quiz,
      values as FormValues,
      (Math.random() + 1).toString(36).substring(7),
      true
    );
    setIsOpen(false);
  };
  return (
    <div style={{ padding: 6, position: "relative" }}>
      <VoCtaButton onClick={() => setIsOpen(true)} text="Отправить заявку" />

      <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)} isVo>
        <Form
          isOneColumn
          title="Заявка на тур"
          onSubmit={(val) => onNext(val)}
          config={requestTourFormConfig.map((el) =>
            addValueToField(el, {
              url: window.location.href,
              formType: "Форма заказа тура",
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

export default VoRequestTour;
