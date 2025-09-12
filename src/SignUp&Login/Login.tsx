import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder="Your Name" />
      <TextInput
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Email"
        placeholder="Your email"
      />
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        withAsterisk
        label="Password"
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
      <Button autoContrast variant="filled">
        Sign Up
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link to="/signup" className="text-bright-sun-400 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
