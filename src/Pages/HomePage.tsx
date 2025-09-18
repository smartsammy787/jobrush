import Companies from "../Components/LandingPage/Companies";
import DreamJob from "../Components/LandingPage/DreamJob";
import Features from "../Components/LandingPage/Features";
import JobCategory from "../Components/LandingPage/JobCategory";
import Newsletter from "../Components/LandingPage/Newsletter";
import Testimonials from "../Components/LandingPage/Testimonials";

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
