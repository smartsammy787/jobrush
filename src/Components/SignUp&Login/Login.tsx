import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUsers, registerUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [value, setValue] = useState("react");
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  const [data, setData] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    let valid = true,
      newFormError: { [key: string]: string } = {};

    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);

      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    console.log(valid);
    if (valid) {
      loginUsers(data)
        .then((res) => {
          console.log(res);
          notifications.show({
            title: "Logged In Successfully",
            message: "Redirecting to Homepage...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            navigate("/");
          }, 4000);
        })
        .catch((err) => {
          console.log(err.response.data);
          notifications.show({
            title: "Login Failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>

      <TextInput
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Email"
        error={formError.email}
        onChange={handleChange}
        name="email"
        placeholder="Your email"
      />
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        withAsterisk
        label="Password"
        error={formError.password}
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />

      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>
          </>
        }
      />
      <Button onClick={handleSubmit} autoContrast variant="filled">
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?
        <span
          onClick={() => {
            navigate("/signup");
            setData(form);
            setFormError(form);
          }}
          className="text-bright-sun-400 hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
