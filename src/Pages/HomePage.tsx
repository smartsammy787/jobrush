import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import Features from "../LandingPage/Features";
import JobCategory from "../LandingPage/JobCategory";
import Newsletter from "../LandingPage/Newsletter";
import Testimonials from "../LandingPage/Testimonials";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <DreamJob />
      <Companies />
      <JobCategory />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;
