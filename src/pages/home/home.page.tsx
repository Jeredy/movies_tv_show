import React from "react";

import Menu from "../../components/menu/menu.components";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../movies/movies.page";

import { Container, Page, IconContainer, Icon } from "./home.styles";

const AnotherPage = () => {
  return (
    <div>
      <h1>Another Page</h1>
    </div>
  );
};

const HomePage: React.FC = () => {
  const toggleSize = () => {
    const reveals = document.querySelectorAll(".menu");

    for (let i = 0; i < reveals.length; i++) {
      if (reveals[i].classList.contains("active")) {
        reveals[i].classList.remove("active");
      } else {
        reveals[i].classList.add("active");
      }
    }
  };

  return (
    <Container>
      <Menu />
      <IconContainer className="menu" onClick={toggleSize}>
        <Icon />
      </IconContainer>
      <Page>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="another-page" element={<AnotherPage />} />
        </Routes>
      </Page>
    </Container>
  );
};

export default HomePage;
