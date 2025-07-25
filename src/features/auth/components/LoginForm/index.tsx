import { Button, Form, Input } from "antd";
import { StyledForm } from "./style";
import { useLogin } from "../../hooks";

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { mutate, isPending } = useLogin();
  const [form] = Form.useForm();
  const onFinish = (values: LoginFormValues) => {
    const data = {
      username: values.username,
      password: values.password,
    };

    mutate(data, {
      onError: (error: any) => {
        if (
          error.status === 404 ||
          error.status === 401 ||
          error.status === 403
        ) {
          form.setFields([
            {
              name: "username",
              errors: ["Username yoki parol noto'g'ri"],
              value: "",
            },
            {
              name: "password",
              errors: [""],
              value: "",
            },
          ]);
        }
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledForm>
      <div className="login_form">
        <div className="login_form__inner">
          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Iltimos, foydalanuvchi nomini kiriting",
                },
                {
                  min: 3,
                  message:
                    "Username kamida 3 ta belgidan iborat bo‘lishi kerak",
                },
              ]}
            >
              <Input
                className="login_form__input_name"
                type="text"
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Iltimos, parolni kiriting" },
                {
                  min: 6,
                  message: "Parol kamida 6 ta belgidan iborat bo‘lishi kerak",
                },
              ]}
            >
              <Input.Password
                className="login_form__input_password"
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Button
              loading={isPending}
              disabled={isPending}
              className="login_form__button"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </StyledForm>
  );
};

export default LoginForm;
