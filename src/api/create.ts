import { nanoid } from "nanoid";
import { FormValues } from "../Form/Form";
import { message } from "antd";

export enum TableName {
  WB_Quiz = "WB_Quiz",
}

export enum Endpoints {
  Create = "https://welcome-belarus.ru/wp-content/uploads/crm/requests/create.php",
}

export const addDocument = async (
  table: TableName,
  data: FormValues,
  secret: string
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
    await fetch(Endpoints.Create, requestOptions);
    message.success("Document created!");
  } catch {
    message.error("Creation failed!");
  }
};
