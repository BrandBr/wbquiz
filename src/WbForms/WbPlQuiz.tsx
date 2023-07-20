import React from "react";
import "../App.css";
import { CtaButton } from "../components/CtaButton/CtaButton";
import { ModalWindow } from "../components/ModalWindow/ModalWindow";
import { Quiz } from "../components/Quiz/Quiz";
import { TableName } from "../api/create";
import { FormFieldType } from "../Form/Form";

export const WbQuizTitles = [
  "Wybierzcie typ oferty:",
  "Podajcie liczbę osób i liczbę osób towarzyszących (ulgowych):",
  // "Что бы Вы хотели увидеть во время тура?",
  "Wpiszcie swoje miasto",
  "Długość pobytu",
  "Zamieszkanie",
  "Termin pobytu",
  "Podajcie Wasz Email, a my wyślemy Wam najlepsze oferty",
];
export const WbQuizConfig: FormFieldType[][] = [
  [
    {
      type: "radioGroup",
      name: "type",
      options: {
        dictionary: [
          "Korporacyjne",
          "Szkolne",
          "Indywidualne",
          "Autokarem",
          "Turystyka eventowa",
          "Sylwester",
        ],
      },
      label: "Тип тура",
    },
    {
      name: "formType",
      type: "string",
      options: {
        displayOnFront: false,
      },
      label: "Ф.И.О. или наименование турагентства",
      placeholder: "Введите имя или название",
      value: "Запрос с квиза",
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
  ],
  [
    {
      name: "peoples",
      type: "number",
      options: {},
      label: "Количество человек",
      placeholder: "Podaj liczbę osób",
      helper: "Możesz podać przybliżoną liczbę",
    },
    {
      name: "freePeoples",
      type: "number",
      options: {},
      label: "Количество человек",
      placeholder: "Podaj liczbę opiekunów",
      helper: "Możesz podać przybliżoną liczbę",
    },
  ],
  // [
  //   {
  //     name: "sight",
  //     type: "checkboxGroup",
  //     options: {
  //       dictionary: [
  //         "Старинные замки",
  //         "Музеи",
  //         "Местную архитектуру",
  //         "Элементы белорусского фольклера",
  //         "Экскурсии по предприятиям",
  //       ],
  //     },
  //     label: "Что хотите увидеть",
  //     helper: "Выберите один или несколько вариантов",
  //   },
  // ],
  [
    {
      name: "city",
      type: "string",
      options: {},
      label: "Ваш город",
      placeholder: "Napisz miasto",
      helper: "Jest to konieczne do obliczenia kosztów wycieczki",
    },
  ],
  [
    {
      type: "radioGroup",
      name: "duration",
      options: {
        dictionary: [
          "Wyjazd nа 1 dzień",
          "Wyjazd nа 2 dni",
          "Wyjazd nа 3 dni",
          "Wyjazd nа 4 dni",
          "Wyjazd nа 5 dni",
          "Jeszcze nie zdecydowaliśmy",
        ],
      },
      label: "Продолжительность тура",
    },
  ],
  [
    {
      type: "radioGroup",
      name: "hotelType",
      options: {
        dictionary: [
          "Standart pokoju",
          "Budżet (Economy)",
          "Comfort",
          "Luksus",
          "Jeszcze nie zdecydowaliśmy",
        ],
      },
      label: "Где хотите проживать",
    },
  ],
  [
    {
      type: "date",
      name: "startDate",
      options: {},
      label: "Data wyjazdu",
      helper: "Możesz podać przybliżoną datę",
      placeholder: ' '
    },
  ],
  [
    {
      type: "string",
      name: "email",
      options: {},
      label: "Почта",
      placeholder: "Email",
      helper: "Uważnie sprawdź pocztę",
      rules: [{ required: true, message: "To pole jest wymagane" }],
    },
  ],
];

function WbPlQuiz() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div style={{ padding: 6, position: "relative" }}>
      <CtaButton
        onClick={() => setIsOpen(true)}
        text="Obliczyć koszt zamówienia"
      />

      <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Quiz
          isPl={true}
          config={WbQuizConfig}
          table={TableName.PL_Quiz}
          titles={WbQuizTitles}
        />
      </ModalWindow>
    </div>
  );
}

export default WbPlQuiz;
