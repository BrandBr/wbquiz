import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QuizContextProvider } from "./context/QuizContext";
import RequestForm from "./RequestForm";
import AskQuestion from "./AskQuestion";
import CallRequest from "./CallRequest";

const rootContainer = document.getElementById("wbQuiz") as HTMLElement;

if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);

  root.render(
    <QuizContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QuizContextProvider>
  );
}

const requestFormContainer = document.getElementById(
  "requestForm"
) as HTMLElement;

if (requestFormContainer) {
  const requestForm = ReactDOM.createRoot(requestFormContainer);
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
