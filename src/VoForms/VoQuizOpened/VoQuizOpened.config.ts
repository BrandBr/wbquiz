import { FormFieldType } from "../../Form/Form";

export const VoQuizTitles = [
  "Сколько ночей планируете отдыхать?",
  "Кто летит на отдых?",
  "Планируемый бюджет на отдых за всех",
  "Какой отдых рассматриваете?",
  "В какой стране планируете отдохнуть?",
  "На какую дату планируете тур?",
  "Откуда рассматриваете вылет?",
  "Есть ли у вас какие-то особые пожелания к отдыху?",
  "Как вам выслать подборку?",
];

export const VoQuizConfig: FormFieldType[][] = [
  [
    {
      type: "radioGroup",
      name: "duration",
      options: {
        dictionary: ["до 7 дней", "7-10 дней", "10-14 дней", "более 14 лней"],
      },
      label: "Длительность",
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
      type: "radioGroup",
      name: "peoples",
      options: {
        dictionary: [
          "1 взрослый",
          "2 взрослых",
          "3 взрослых",
          "2 взрослых + 1ребенок",
          "2 взрослых + 2ребенка",
          "у нас большая дружная компания =)",
        ],
      },
      label: "Люди",
    },
  ],
  [
    {
      type: "radioGroup",
      name: "budget",
      options: {
        dictionary: [
          "До 2000 USD",
          "от 2000 до 3000 USD",
          "от 3000 до 5000 USD",
          "более 5000 USD",
        ],
      },
      label: "Бюджет",
    },
  ],
  [
    {
      type: "radioGroup",
      name: "country",
      options: {
        dictionary: [
          "Турция",
          "Грузия",
          "ОАЭ",
          "Египет",
          "Шри-Ланка",
          "Мальдивы",
          "Катар",
          "Не знаю, помогите определиться.",
          "Мне везде будет хорошо",
        ],
      },
      label: "Страна",
    },
  ],
  [
    {
      type: "date",
      name: "startDate",
      options: {},
      label: "Дата старта тура",
      helper: "Ориентировочные даты, в которые вы можете вылететь.",
    },
  ],
  [
    {
      type: "radioGroup",
      name: "city",
      options: {
        dictionary: ["Минск", "Москва", "Другое"],
      },
      label: "Город вылета",
    },
  ],
  [
    {
      type: "textArea",
      name: "comment",
      options: {},
      label: "Комментарий",
      placeholder: "пожелания",
    },
  ],
  [
    {
      type: "select",
      name: "contactType",
      options: {
        dictionary: ["Viber", "Telegram", "WhatsApp", "Email", "Телефон"],
      },
      label: "Тип тура",
      helper: "Как с вами связаться",
    },
    {
      name: "contact",
      type: "string",
      options: {},
      label: "Контактные данные",
      placeholder: "Контактные данные",
      helper: "Ваш номер телефона - мессенджера*",
      rules: [{ required: true, message: "Это поле обязательно" }],
    },
  ],
];
