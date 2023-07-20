import React from "react";
import "../App.css";
import { CtaButton } from "../components/CtaButton/CtaButton";
import { ModalWindow } from "../components/ModalWindow/ModalWindow";
import { addValueToField } from "../Form/Form.utils";
import { Form, FormFieldType, FormValues } from "../Form/Form";
import { addDocument, TableName } from "../api/create";

const requestTourFormConfigWbPl: FormFieldType[] = [
  {
    name: "formType",
    type: "string",
    options: {
      displayOnFront: false,
    },
    label: "Pełne nazwisko lub nazwa biura podróży",
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
    label: "Pełne nazwisko lub nazwa biura podróży",
    placeholder: " ",
  },

  {
    name: "cityLive",
    type: "string",
    options: {},
    label: "Miasto zamieszkania (lokalizacja)",
    placeholder: " ",
  },
  {
    name: "phone",
    type: "string",
    options: {},
    label: "Telefony kontaktowe z kodem ",
    placeholder: " ",
  },
  {
    name: "email",
    type: "string",
    options: {},
    label: "Adres poczty elektronicznej *",
    placeholder: " ",
    rules: [{ required: true, message: "To pole jest wymagane" }],
  },
  {
    type: "date",
    name: "startDate",
    options: {},
    label: "Pożądana data rozpoczęcia wycieczki",
    placeholder: " ",
  },
  {
    name: "peoples",
    type: "number",
    options: {},
    label: "Liczba osób w grupie",
    placeholder: " ",
  },
  {
    name: "comment",
    type: "string",
    options: {},
    label: "Komentarze",
    placeholder: " ",
  },
];
function RequestFormWbPl() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onNext = async (values: FormValues) => {
    await addDocument(
      TableName.PL_Quiz,
      values as FormValues,
      (Math.random() + 1).toString(36).substring(7),
      true
    );
    window.location.href = "/stranica-spasibo.html";
  };
  return (
    <div style={{ padding: 6, position: "relative" }}>
      <CtaButton
        onClick={() => setIsOpen(true)}
        text="Żądanie wycieczki"
      />

      <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Form
          isOneColumn
          onSubmit={(val) => onNext(val)}
          config={requestTourFormConfigWbPl.map((el) =>
            addValueToField(el, {
              url: window.location.href,
              formType: "Форма заявки на тур",
            } as unknown as FormValues)
          )}
          isLabelHidden={false}
          customButton={{ text: "Wysłać" }}
          isButtonCentered
        />
      </ModalWindow>
    </div>
  );
}

export default RequestFormWbPl;
