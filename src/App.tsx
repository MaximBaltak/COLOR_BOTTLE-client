import React from "react";
import "./App.scss";
import Animation from "./components/Animation/Animation";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import NotFound from "./pages/NotFoundPage/NotFound";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import RestoringPage from "./pages/RestoringPage/RestoringPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";

function App() {
  return (
    <>
      <Navigation />
       <Animation />
      {/* <MainPage /> */}
      {/*<ProfilePage />*/}
      {/*  <AuthorizationPage/>
      {/*  <MessagesPage/>*/}
      {/*  <NotFound/>*/}
      {/*  <ConfirmPage/>*/}
      {/*  <RestoringPage/>*/}
        <StatisticsPage/>
    </>
  );
}

export default App;
