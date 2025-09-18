import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";
import Company from "../Components/CompanyProfile/Company";
import SimilarCompanies from "../Components/CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Button
        onClick={() => navigate(-1)}
        leftSection={<IconArrowLeft size={20} />}
        color="brightSun.4"
        my="md"
        variant="light"
      >
        Back
      </Button>

      <div className="flex gap-5 justify-evenly">
        <Company />
        <SimilarCompanies />
      </div>
    </div>
  );
};

export default CompanyPage;
