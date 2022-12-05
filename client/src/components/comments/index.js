import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';

const { TextArea } = Input;

const Comment = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setComponentDisabled(disabled);
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >

        <Form.Item >
          <TextArea rows={6} />
        </Form.Item>
        <Form.Item label="">
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <Comment />;