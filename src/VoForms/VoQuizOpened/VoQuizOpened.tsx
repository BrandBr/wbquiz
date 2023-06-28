import { TableName } from "../../api/create";
import { Quiz } from "../../components/Quiz/Quiz";
import React from "react";
import { VoQuizConfig, VoQuizTitles } from "./VoQuizOpened.config";
import css from "./VoQuizOpened.module.css";

export const VoQuizOpened = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Quiz
          config={VoQuizConfig}
          table={TableName.VO_Quiz}
          titles={VoQuizTitles}
          isVo={true}
        />
      </div>
    </div>
  );
};
