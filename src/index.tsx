import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WbQuiz from "./WbForms/WbQuiz";
import reportWebVitals from "./reportWebVitals";
import { QuizContextProvider } from "./context/QuizContext";
import RequestForm from "./WbForms/RequestForm";
import AskQuestion from "./WbForms/AskQuestion";
import CallRequest from "./WbForms/CallRequest";
import VoRequestFormBelarus from "./VoForms/VoRequestFormBelarus";
import VoRequestTour from "./VoForms/VoRequestTour";
import { VoQuizOpened } from "./VoForms/VoQuizOpened/VoQuizOpened";
import WbPlQuiz from "./WbForms/WbPlQuiz";
import RequestFormWbPl from "./WbForms/RequestFormWbPl";

//wb
const wbQuizContainer = document.getElementById("wbQuiz") as HTMLElement;
if (wbQuizContainer) {
  const root = ReactDOM.createRoot(wbQuizContainer);

  root.render(
    <QuizContextProvider>
      <React.StrictMode>
        <WbQuiz />
      </React.StrictMode>
    </QuizContextProvider>
  );
}

const requestFormWBContainer = document.getElementById(
  "requestForm"
) as HTMLElement;
if (requestFormWBContainer) {
  const requestForm = ReactDOM.createRoot(requestFormWBContainer);
  requestForm.render(
    <React.StrictMode>
      <RequestForm />
    </React.StrictMode>
  );
}

const requestFormSecondContainer = document.getElementById(
  "requestFormSecond"
) as HTMLElement;
if (requestFormSecondContainer) {
  const requestFormSecond = ReactDOM.createRoot(requestFormSecondContainer);

  requestFormSecond.render(
    <React.StrictMode>
      <RequestForm />
    </React.StrictMode>
  );
}

const askQuestionContainer = document.getElementById(
  "askQuestion"
) as HTMLElement;
if (askQuestionContainer) {
  const askQuestion = ReactDOM.createRoot(askQuestionContainer);
  askQuestion.render(
    <React.StrictMode>
      <AskQuestion />
    </React.StrictMode>
  );
}

const callRequestContainer = document.getElementById(
  "callRequest"
) as HTMLElement;
if (callRequestContainer) {
  const callRequest = ReactDOM.createRoot(callRequestContainer);

  callRequest.render(
    <React.StrictMode>
      <CallRequest />
    </React.StrictMode>
  );
}

// vo tours on wb
const voRequestFormBelarusContainer = document.getElementById(
  "voRequestFormBelarus"
) as HTMLElement;
if (voRequestFormBelarusContainer) {
  const callRequest = ReactDOM.createRoot(voRequestFormBelarusContainer);

  callRequest.render(
    <React.StrictMode>
      <VoRequestFormBelarus />
    </React.StrictMode>
  );
}

const voRequestFormContainer = document.getElementById(
  "voRequestForm"
) as HTMLElement;
if (voRequestFormContainer) {
  const callRequest = ReactDOM.createRoot(voRequestFormContainer);

  callRequest.render(
    <React.StrictMode>
      <VoRequestTour />
    </React.StrictMode>
  );
}

const voRequestFormSecond = document.getElementById(
  "voRequestFormSecond"
) as HTMLElement;
if (voRequestFormSecond) {
  const callRequest = ReactDOM.createRoot(voRequestFormSecond);

  callRequest.render(
    <React.StrictMode>
      <VoRequestTour />
    </React.StrictMode>
  );
}

const voQuiz = document.getElementById("voQuiz") as HTMLElement;
if (voQuiz) {
  const callRequest = ReactDOM.createRoot(voQuiz);

  callRequest.render(
    <QuizContextProvider>
      <React.StrictMode>
        <VoQuizOpened />
      </React.StrictMode>
    </QuizContextProvider>
  );
}
// wb pl
const wbPlQuizContainer = document.getElementById("wbPlQuiz") as HTMLElement;
if (wbPlQuizContainer) {
  const root = ReactDOM.createRoot(wbPlQuizContainer);

  root.render(
    <QuizContextProvider>
      <React.StrictMode>
        <WbPlQuiz />
      </React.StrictMode>
    </QuizContextProvider>
  );
}

const requestFormWBPlContainer = document.getElementById(
  "requestFormWbPl"
) as HTMLElement;
if (requestFormWBPlContainer) {
  const requestForm = ReactDOM.createRoot(requestFormWBPlContainer);
  requestForm.render(
    <React.StrictMode>
      <RequestFormWbPl />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
