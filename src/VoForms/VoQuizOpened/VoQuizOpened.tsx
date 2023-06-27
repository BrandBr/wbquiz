import { TableName } from "../../api/create";
import { Quiz } from "../../components/Quiz/Quiz";
import React from "react";
import { VoQuizConfig, VoQuizTitles } from "./VoQuizOpened.config";

export const VoQuizOpened = () => {
  return (
    <div>
      <Quiz
        config={VoQuizConfig}
        table={TableName.VO_Quiz}
        titles={VoQuizTitles}
        isVo={true}
      />
    </div>
  );
};
