import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job" },
    { name: "Posted Job", url: "/posted-job" },
    { name: "Job History", url: "/job-history" },
    { name: "SignUp", url: "/signup" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {links.map((link, index) => (
        <div
          key={index}
          className={`h-full flex items-center relative ${
            location.pathname === link.url ? "text-bright-sun-400" : ""
          }`}
        >
          <Link
            to={link.url}
            className={`h-full flex items-center px-1 ${
              location.pathname === link.url
                ? "before:content-[''] before:absolute before:-top-6 before:left-0 before:right-0 before:h-1 before:bg-bright-sun-400"
                : ""
            }`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
