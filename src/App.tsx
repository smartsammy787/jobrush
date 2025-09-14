import "./App.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";

// Only import these if you actually use these components
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css"; // Only if using <Carousel>
import "@mantine/dates/styles.css";
import HomePage from "./Pages/HomePage";
import "@mantine/tiptap/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindJobs from "./Pages/FindJobs";
import FindTalent from "./Pages/FindTalent";
import TalentProfile from "./Pages/TalentProfile";
import PostJob from "./Pages/PostJob";
import JobDescPage from "./Pages/JobDescPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  // const theme = {
  //   colors: {
  //     // Add your color
  //     deepBlue: [
  //       '#eef3ff',
  //       '#dce4f5',
  //       '#b9c7e2',
  //       '#94a8d0',
  //       '#748dc1',
  //       '#5f7cb8',
  //       '#5474b4',
  //       '#44639f',
  //       '#39588f',
  //       '#2d4b81',
  //     ],
  //     // or replace default theme color
  //     blue: [
  //       '#eef3ff',
  //       '#dee2f2',
  //       '#bdc2de',
  //       '#98a0ca',
  //       '#7a84ba',
  //       '#6672b0',
  //       '#5c68ac',
  //       '#4c5897',
  //       '#424e88',
  //       '#364379',
  //     ],
  //   },

  // };

  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider mx="md" size="xs" />
          <Routes>
            <Route path="/talent-profile" element={<TalentProfile />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/jobs" element={<JobDescPage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/job-history" element={<JobHistoryPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/find-talent" element={<FindTalent />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
