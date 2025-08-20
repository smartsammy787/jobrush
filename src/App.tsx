import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";

// Only import these if you actually use these components
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css"; // Only if using <Carousel>
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
