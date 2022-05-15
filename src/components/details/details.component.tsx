import React from "react";
import Button from "../button/button.components";
import {
  Container,
  Details,
  SubContainer,
  Title,
  Text,
  TopMenu,
  About,
  IconFullScreen,
  ButtonContainer,
} from "./details.styles";

const DetailsComponent: React.FC = () => {
  return (
    <Container className="menu">
      <TopMenu>
        <Text>Movies</Text>
        <IconFullScreen />
      </TopMenu>
      <SubContainer>
        <Title>Ullamco exercitation </Title>
        <Details>
          <Text>2016</Text>
          <Text>2h 25m</Text>
          <Text>Science Fiction</Text>
        </Details>
        <About>
          Est eu elit Lorem eu. Occaecat incididunt qui consectetur in esse eu
          commodo aute. Fugiat sint do elit exercitation id. Est eu elit Lorem
          eu. Occaecat incididunt qui consectetur in esse eu commodo aute.
          Fugiat sint do elit exercitation id. Est eu elit Lorem eu.
        </About>
        <ButtonContainer>
          <Button title="Watch it!" />
          <Button title="Info" invertedColor={true} />
        </ButtonContainer>
      </SubContainer>
    </Container>
  );
};

export default DetailsComponent;
