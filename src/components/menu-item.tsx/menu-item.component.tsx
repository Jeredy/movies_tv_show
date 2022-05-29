import React from "react";
import { useLocation } from "react-router-dom";

import { menuData } from "../../constants/menu";
import { AuthContext } from "../../context/authContext";
import { GeneralContext } from "../../context/generalContext";
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
  const { setAdmin, setAuthenticated } = React.useContext(AuthContext);
  const { setPageDetails } = React.useContext(GeneralContext);

  const location = useLocation();

  const currentRoute = location.pathname.split("/")[1];

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

  const showModalPage = (title: string) => {
    switch (title.toLowerCase()) {
      case "add movie":
        return setPageDetails?.({
          route: "addMovie",
          id: 0,
        });
      default:
        return;
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
                showModalPage(subItem.title);
              }}
            >
              <subItem.icon color={selected === subItem.id ? "#069A8E" : ""} />
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
