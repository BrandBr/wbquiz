import React from "react";
import "../App.css";
import { CtaButton } from "../components/CtaButton/CtaButton";
import { ModalWindow } from "../components/ModalWindow/ModalWindow";
import { Quiz } from "../components/Quiz/Quiz";
import { WbQuizConfig, WbQuizTitles } from "../components/Quiz/WbQuizConfig";
import { TableName } from "../api/create";

function WbQuiz() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div style={{ padding: 6, position: "relative" }}>
      <CtaButton onClick={() => setIsOpen(true)} />

      <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Quiz
          config={WbQuizConfig}
          table={TableName.WB_Quiz}
          titles={WbQuizTitles}
        />
      </ModalWindow>
    </div>
  );
}

export default WbQuiz;
