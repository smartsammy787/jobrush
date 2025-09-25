import {
  Button,
  Modal,
  PasswordInput,
  PinInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React, { useState } from "react";
import { changePassword, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() => {
    if (seconds === 0) {
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    } else setSeconds((s) => s - 1);
  }, 1000);
  const [resentLoader, setResendLoader] = useState(false);

  const handleSendOtp = () => {
    setOtpSending(true);
    sendOtp(email)
      .then((res) => {
        console.log(res);
        successNotification("OTP Sent Successfully", "Enter OTP to reset");
        setOtpSent(true);
        setOtpSending(false);
        setResendLoader(true);
        interval.start();
      })
      .catch((err) => {
        console.log(err);
        errorNotification("OTP Sending Failed", err.response.data.errorMessage);
        setOtpSending(false);
      });
  };

  const handleVerifyOtp = (otp: string) => {
    verifyOtp(email, otp)
      .then((res) => {
        console.log(res);
        successNotification("OTP Verified", "Enter new password.");
        setVerified(true);
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "OTP Verification Failed",
          err.response.data.errorMessage
        );
      });
  };

  const resendOtp = () => {
    if (resentLoader) return;
    handleSendOtp();
  };
  const changeEmail = () => {
    setOtpSent(false);
    setResendLoader(false);
    setSeconds(60);
    setVerified(false);
    interval.stop();
  };

  const handleResetPassword = () => {
    changePassword(email, password)
      .then((res) => {
        console.log(res);
        successNotification("Password Changed", " Login with new password.");
        props.close();
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "Password Reset Failed",
          err.response.data.errorMessage
        );
      });
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div className="flex flex-col gap-6">
        <TextInput
          value={email}
          withAsterisk
          size="md"
          leftSection={<IconAt size={16} />}
          label="Email"
          rightSection={
            <Button
              loading={otpSending && !otpSent}
              size="xs"
              className="mr-1"
              onClick={handleSendOtp}
              autoContrast
              disabled={email === "" || otpSent}
              variant="filled"
            >
              Login
            </Button>
          }
          rightSectionWidth="xl"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Your email"
        />
        {otpSent && (
          <PinInput
            onComplete={handleVerifyOtp}
            type="number"
            className="mx-auto"
            size="md"
            gap="lg"
            length={6}
          />
        )}

        {otpSent && !verified && (
          <div className="flex gap-2">
            <Button
              loading={otpSending}
              onClick={resendOtp}
              autoContrast
              fullWidth
              color="brightSun.4"
              variant="light"
            >
              {resentLoader ? seconds : "Resend"}
            </Button>
            <Button
              fullWidth
              onClick={changeEmail}
              autoContrast
              variant="filled"
            >
              Change Email
            </Button>
          </div>
        )}
        {verified && (
          <PasswordInput
            leftSection={<IconLock size={18} stroke={1.5} />}
            withAsterisk
            label="Password"
            error={passErr}
            onChange={(e) => {
              setPassword(e.target.value);
              setPassErr(signupValidation("password", e.target.value));
            }}
            name="password"
            placeholder="Password"
          />
        )}

        {verified && (
          <Button
            fullWidth
            onClick={handleResetPassword}
            autoContrast
            variant="filled"
          >
            Change Password
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
