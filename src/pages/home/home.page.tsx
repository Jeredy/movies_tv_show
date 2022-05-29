import React from "react";

import Menu from "../../components/menu/menu.components";
import { Route, Routes } from "react-router-dom";

import { Container, Page, IconContainer, Icon } from "./home.styles";
import TVShowPage from "../tv_show/tv_show.page";
import MoviesIndex from "../movies";
import DetailsPageModal from "../details-modal/details-modal.page";

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
      <DetailsPageModal />
      <Page>
        <Routes>
          <Route path="/*" element={<MoviesIndex />} />
          <Route path="tv_show" element={<TVShowPage />} />
          <Route path="another-page" element={<AnotherPage />} />
        </Routes>
      </Page>
    </Container>
  );
};

export default HomePage;
