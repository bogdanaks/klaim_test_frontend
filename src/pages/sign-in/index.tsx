import React from "react"
import { Form, Input, Button } from "antd"
import { Wrapper } from "shared/ui"

const SignInPage = () => {
  const [form] = Form.useForm()

  const onFormChange = (e: any) => {
    console.log(e)
  }

  return (
    <Wrapper title="Sign in">
      <Form
        layout="vertical"
        form={form}
        initialValues={{ layout: "vertical" }}
        onValuesChange={onFormChange}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="Email address"
          help={"We'll never share your email with anyone else."}
          style={{ marginBottom: "36px" }}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default SignInPage
