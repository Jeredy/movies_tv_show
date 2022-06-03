import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { menuData } from "../../constants/menu";
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
  const { setPageDetails } = React.useContext(GeneralContext);
  const navigate = useNavigate();
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

  const showModalPage = (title: string) => {
    switch (title.toLowerCase()) {
      case "add movie":
        return setPageDetails?.({
          route: "movies",
          action: "addStreaming",
        });
      case "add tv shows":
        return setPageDetails?.({
          route: "tv_shows",
          action: "addStreaming",
        });
      case "categories":
        return setPageDetails?.({
          route: "categories",
          action: "categoryDetail",
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
              key={index}
              selected={selected === subItem.id}
              onClick={
                subItem.link
                  ? () => {
                      setSelected(subItem.id);
                      showModalPage(subItem.title);
                      navigate(subItem.link);
                    }
                  : () => {
                      showModalPage(subItem.title);
                    }
              }
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
