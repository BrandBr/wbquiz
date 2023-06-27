import { FormFieldType } from "../../Form/Form";

export const VoQuizTitles = [
  "Какой тип тура вам необходим?",
  "Укажите количество человек и число бесплатных сопровождающих",
  // "Что бы Вы хотели увидеть во время тура?",
  "Укажите ваш город",
  "Какая продолжительность тура Вам необходима?",
  "Где Вы хотите проживать?",
  "На какую дату планируете тур?",
  "Напишите Ваш Email, мы вышлем Вам подборку",
];
export const VoQuizConfig: FormFieldType[][] = [
  [
    {
      type: "radioGroup",
      name: "type",
      options: {
        dictionary: [
          "Корпоративный",
          "Для школьных групп",
          "Индивидуальный",
          "Для автогрупп",
          "Тематический",
          "Новогодний",
          "Сборный",
        ],
      },
      label: "Тип тура",
      rules: [{ required: true, message: `Пожалуйста введите тип тура` }],
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
      placeholder: "Введите количество человек",
      helper: "Можете указать при блезительное количество",
    },
    {
      name: "freePeoples",
      type: "number",
      options: {},
      label: "Количество человек",
      placeholder: "Количество бесплатных сопровождающих",
      helper: "Можете указать при блезительное количество",
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
      placeholder: "Напишите город",
      helper: "Это необходимо для расчета стоимости переезда",
    },
  ],
  [
    {
      type: "radioGroup",
      name: "duration",
      options: {
        dictionary: [
          "Тур на 1 день",
          "Тур на 2 дня",
          "Тур на 3 дня",
          "Тур на 4 дня",
          "Тур на 5 дней",
          "Пока не определились",
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
          "Бюджетный номер",
          "Комфортный номер",
          "Номер класса люкс",
          "Пока не определились",
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
      label: "Дата старта тура",
      helper: "Можете ввести приблизительную дату",
    },
  ],
  [
    {
      type: "string",
      name: "email",
      options: {},
      label: "Почта",
      placeholder: "Email",
      helper: "Внимательно проверьте почту",
      rules: [{ required: true, message: "Это поле обязательно" }],
    },
  ],
];
