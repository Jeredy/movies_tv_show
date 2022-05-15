import React from "react";
import MenuItem from "../menu-item.tsx/menu-item.component";
import { Container } from "./menu.styles";

const Menu: React.FC = () => {
  return (
    <Container className="menu">
      <MenuItem />
    </Container>
  );
};

export default Menu;
