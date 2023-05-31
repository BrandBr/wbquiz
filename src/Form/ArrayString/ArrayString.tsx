import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import css from "./ArrayString.module.css";
import { FormFieldType } from "../Form";

export type ArrayStringProps = Pick<FormFieldType, "name">;
export const ArrayString = ({ name }: ArrayStringProps): JSX.Element => {
  return (
    <Space>
      <Form.List name={name}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => {
              return (
                <Space className={css.inputWithPrefixContainer} key={index}>
                  <Space className={css.prefix}>{index + 1}: </Space>
                  <Space key={key} className={css.space} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name]}
                      rules={[
                        { required: true, message: "Это поле обязательно" },
                      ]}
                    >
                      <Input placeholder="Введите строку" />
                    </Form.Item>
                    <Button
                      icon={<MinusCircleOutlined />}
                      onClick={() => remove(name)}
                      danger
                    />
                  </Space>
                </Space>
              );
            })}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Добавить
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Space>
  );
};
