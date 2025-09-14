import {
  ActionIcon,
  Button,
  Divider,
  TagsInput,
  Textarea,
} from "@mantine/core";
import {
  IconAdjustments,
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import TalentExperienceCard from "./TalentExperienceCard";
import CertificationCard from "./CertificationCard";
import { useState } from "react";
import SelectProfileInput from "./SelectProfileInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";

const Profile = (props: any) => {
  const select = fields;
  const [addCert, setAddCert] = useState(false);
  const [addExp, setAddExp] = useState(false);
  const [skills, setSkills] = useState([
    "React",
    "Spring Boot",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "Express",
    "Django",
    "PostgreSQL",
  ]);
  const [about, setAbout] = useState(props.about);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handleEdit = (index: any) => {
    const tempEdit = [...edit];
    tempEdit[index] = !tempEdit[index];
    setEdit(tempEdit);
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
          src="/avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-20">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <ActionIcon
            onClick={() => handleEdit(0)}
            size="lg"
            color="brightSun.4"
            variant="subtle"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectProfileInput {...select[0]} />
              <SelectProfileInput {...select[1]} />
            </div>
            <SelectProfileInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase className="h-5 w-5" stroke={1.5} />
              {props.role} &bull; {props.company}
            </div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
              <IconMapPin className="h-5 w-5" stroke={1.5} />
              {props.location}
            </div>
          </>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About
          <ActionIcon
            onClick={() => handleEdit(1)}
            size="lg"
            color="brightSun.4"
            variant="subtle"
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            autosize
            minRows={3}
            placeholder="Enter about yourself..."
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {about}
          </div>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills
          <ActionIcon
            onClick={() => handleEdit(2)}
            size="lg"
            color="brightSun.4"
            variant="subtle"
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add skill"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setAddExp(true)}
              size="lg"
              color="brightSun.4"
              variant="subtle"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleEdit(3)}
              size="lg"
              color="brightSun.4"
              variant="subtle"
            >
              {edit[3] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <TalentExperienceCard key={index} {...exp} edit={edit[3]} />
          ))}
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications{" "}
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setAddCert(true)}
              size="lg"
              color="brightSun.4"
              variant="subtle"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleEdit(4)}
              size="lg"
              color="brightSun.4"
              variant="subtle"
            >
              {edit[4] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((cert: any, index: any) => (
            <CertificationCard key={index} edit={edit[4]} {...cert} />
          ))}
          {addCert && <CertInput setEdit={setAddCert} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
