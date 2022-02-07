import React from "react";

import "./App.scss";
import Animation from "./components/Animation/Animation";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./pages/MainPage/MainPage";
function App() {
  return (
    <>
      <Navigation />
      <Animation />
      <MainPage />
    </>
  );
}

export default App;
