import React from "react";
import "./App.scss";
import Animation from "./components/Animation/Animation";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";

function App() {
  return (
    <>
      <Navigation />
      {/* <Animation /> */}
      {/* <MainPage /> */}
      {/*<ProfilePage />*/}
        <AuthorizationPage/>
    </>
  );
}

export default App;
