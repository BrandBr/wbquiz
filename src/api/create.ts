import { nanoid } from "nanoid";
import { FormValues } from "../Form/Form";
import { message } from "antd";

export enum TableName {
  WB_Quiz = "WB_Quiz",
  VO_Quiz = "VO_Quiz",
}

export enum Endpoints {
  Create = "https://welcome-belarus.ru/wp-content/uploads/crm/requests/create.php",
  CreateVo = "https://welcome-belarus.ru/wp-content/uploads/crm/requests/createVo.php",
}

export const addDocument = async (
  table: TableName,
  data: FormValues,
  secret: string,
  isVo?: boolean
) => {
  const uuid = nanoid();
  const body = JSON.stringify({
    uuid,
    data: {
      ...data,
      uuid,
      createdAt: new Date().getTime(),
    },
    table,
    secret,
  });
  const requestOptions = {
    method: "post",
    body,
  };

  try {
    await fetch(isVo ? Endpoints.CreateVo : Endpoints.Create, requestOptions);
  } catch {
    message.error(
      "Ошибка, заявка не сохранена, пожалуйста, свяжитесь с менеджеромю"
    );
  }
};
