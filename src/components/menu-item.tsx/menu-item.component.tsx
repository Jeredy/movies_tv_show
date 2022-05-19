import React from "react";
import { useLocation } from "react-router-dom";

import { menuData } from "../../constants/menu";
import { Context } from "../../context/authContext";
import {
  Container,
  Title,
  Text,
  ItemContainer,
  Divisor,
  TitleContainer,
} from "./menu-item.styles";

const MenuItem: React.FC = () => {
  const [selected, setSelected] = React.useState(0);
  const { setAdmin, setAuthenticated } = React.useContext(Context);

  const location = useLocation();

  const currentRoute = location.pathname.split("/")[2];

  React.useEffect(() => {
    if (!currentRoute) {
      setSelected(10);
    }

    menuData.map((item) => {
      item.data.map((subItem: any) => {
        if (subItem.link === currentRoute) {
          setSelected(subItem.id);
        }
      });
    });
  }, [currentRoute]);

  const logout = (id: number) => {
    if (id === 42) {
      setAuthenticated?.(false);
      setAdmin?.(null);
    }
  };

  return (
    <Container>
      {menuData.map((item, index) => (
        <>
          <TitleContainer key={index}>
            <Title>{item.title}</Title>
          </TitleContainer>
          {item.data.map((subItem, index) => (
            <ItemContainer
              to={subItem.link}
              key={index}
              selected={selected === subItem.id}
              onClick={() => {
                setSelected(subItem.id);
                logout(subItem.id);
              }}
            >
              <subItem.icon color={selected === subItem.id ? "#dc8665" : ""} />
              <Text selected={selected === subItem.id}>{subItem.title}</Text>
            </ItemContainer>
          ))}
          <Divisor />
        </>
      ))}
    </Container>
  );
};

export default MenuItem;
