import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [value, setValue] = useState("react");
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();

  const [data, setData] = useState<{ [key: string]: string }>(form);

  const handleChange = (event: any) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }
    let name = event.target.name,
      value = event.target.value;
    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });

    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "Passwords do not match.";
      setFormError({
        ...formError,
        [name]: signupValidation(name, value),
        confirmPassword: err,
      });
    }

    if (name === "confirmPassword") {
      if (data.password !== value) {
        setFormError({ ...formError, [name]: "Passwords do not match." });
      } else {
        setFormError({ ...formError, confirmPassword: "" });
      }
    }
  };

  const handleSubmit = (event: any) => {
    let valid = true,
      newFormError: { [key: string]: string } = {};

    for (let key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = signupValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "Passwords do not match.";

      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    console.log(valid);

    if (valid === true) {
      registerUser(data)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Registered Successfully",
            message: "Redirecting to login page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          console.log(err.response.data);
          notifications.show({
            title: "Registeration Failed",
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
        value={data.name}
        error={formError.name}
        name="name"
        withAsterisk
        onChange={handleChange}
        label="Full Name"
        placeholder="Your Name"
      />
      <TextInput
        withAsterisk
        onChange={handleChange}
        name="email"
        error={formError.email}
        value={data.email}
        leftSection={<IconAt size={16} />}
        label="Email"
        placeholder="Your email"
      />
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        withAsterisk
        error={formError.password}
        name="password"
        onChange={handleChange}
        value={data.password}
        label="Password"
        placeholder="Password"
      />
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        value={data.confirmPassword}
        name="confirmPassword"
        error={formError.confirmPassword}
        onChange={handleChange}
        withAsterisk
        label="Confirm Password"
        placeholder="Confirm Password"
      />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="Are you ?"
        description="This is anonymous"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            autoContrast
            className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            autoContrast
            className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>
          </>
        }
      />
      <Button onClick={handleSubmit} autoContrast variant="filled">
        Sign Up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <span
          onClick={() => {
            navigate("/login");
            setData(form);
            setFormError(form);
          }}
          className="text-bright-sun-400 hover:underline cursor-pointer"
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;
