import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QuizContextProvider } from "./context/QuizContext";
import RequestForm from "./RequestForm";
import AskQuestion from "./AskQuestion";
import CallRequest from "./CallRequest";

const root = ReactDOM.createRoot(
  document.getElementById("wbQuiz") as HTMLElement
);
root.render(
  <QuizContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuizContextProvider>
);

const requestForm = ReactDOM.createRoot(
  document.getElementById("requestForm") as HTMLElement
);
requestForm.render(
  <React.StrictMode>
    <RequestForm />
  </React.StrictMode>
);

const askQuestion = ReactDOM.createRoot(
  document.getElementById("askQuestion") as HTMLElement
);
askQuestion.render(
  <React.StrictMode>
    <AskQuestion />
  </React.StrictMode>
);

const callRequest = ReactDOM.createRoot(
  document.getElementById("callRequest") as HTMLElement
);
callRequest.render(
  <React.StrictMode>
    <CallRequest />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
