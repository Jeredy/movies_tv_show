import React from "react";
import { useLocation } from "react-router-dom";
import { GeneralContext } from "../../context/generalContext";
import { CardProps } from "../../types/card";
import { Container, CardContainer, Image, Text } from "./card.styles";

const CardComponent: React.FC<CardProps> = ({ id, name, image, index }) => {
  const { setPageDetails } = React.useContext(GeneralContext);
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  return (
    <Container
      index={index}
      onClick={() =>
        setPageDetails?.({
          action: "streamingDetail",
          route: currentPage,
          id,
        })
      }
    >
      <CardContainer index={index}>
        <Image src={image} />
      </CardContainer>
      <Text>{name}</Text>
    </Container>
  );
};

export default CardComponent;
