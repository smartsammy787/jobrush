import { Button, Divider } from "@mantine/core";
import PJobs from "../Components/PostJob/PJobs";
import { IconArrowLeft, IconBrandSwift } from "@tabler/icons-react";
import SignUp from "../Components/SignUp&Login/SignUp";
import Login from "../Components/SignUp&Login/Login";
import { useLocation, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden relative">
      <Button
        onClick={() => navigate("/")}
        leftSection={<IconArrowLeft size={20} />}
        className="!absolute left-5 z-10"
        color="brightSun.4"
        my="md"
        variant="light"
      >
        Home
      </Button>
      <div
        className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0  ${
          location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`w-1/2 h-full bg-mine-shaft-900 
            transition-all duration-1000 ease-in-out
            ${
              location.pathname == "/signup"
                ? "rounded-r-[200px]"
                : "rounded-l-[200px]"
            } flex items-center justify-center gap-5 flex-col`}
        >
          <div className="flex gap-1 text-bright-sun-500">
            <IconBrandSwift className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold">Job RUSH</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find your dream job
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
