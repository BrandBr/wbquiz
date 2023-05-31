import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QuizContextProvider } from "./context/QuizContext";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
