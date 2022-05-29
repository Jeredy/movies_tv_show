import React from "react";
import ReactPlayer from "react-player";

import Button from "../../../components/button/button.components";
import { GeneralContext } from "../../../context/generalContext";
import { MoviesModel } from "../../../models/movies";
import { w, ww } from "../../../styles/responsive";

// Render a YouTube video player
import {
  About,
  ButtonContainer,
  Container,
  Details,
  SubContainer,
  Text,
  Title,
  CloseIconContainer,
  CloseIcon,
  DetailContainer,
} from "./moviesDetails.styles";

const MovieDetailPage: React.FC = () => {
  const { movies, pageDetails, setPageDetails } =
    React.useContext(GeneralContext);
  const [data, setData] = React.useState<MoviesModel>();
  const [play, setPlay] = React.useState(false);
  const { id } = pageDetails;
  console.log(id);
  React.useEffect(() => {
    movies.forEach((element) =>
      element.data.forEach((movie) => {
        if (movie.id === 10) {
          return setData(movie);
        }
      })
    );
  });

  console.log(data);

  return (
    <Container>
      <SubContainer isPlaying={play}>
        <CloseIconContainer
          className="closeButton"
          onClick={() => setPageDetails?.({})}
        >
          <CloseIcon />
        </CloseIconContainer>
        <DetailContainer isPlaying={play}>
          <Title>{data?.name}</Title>
          <Details>
            <Text>{data?.year}</Text>
            <Text>{data?.duration}</Text>
            <Text>{data?.category}</Text>
          </Details>
          <About>{data?.description}</About>
          <ButtonContainer>
            <Button title="Play" clickFunction={() => setPlay(true)} />
            <Button title="Delete" customColor="#F24C4C" />
          </ButtonContainer>
        </DetailContainer>
        <ReactPlayer
          url={data?.video}
          width={ww(452)}
          height={ww(250)}
          playing={play}
          style={{
            margin: w(-18, 0, 0, -16),
            position: "absolute",
            opacity: play ? 1 : 0,
            transition: "1.5s ease-in-out",
          }}
        />
      </SubContainer>
    </Container>
  );
};

export default MovieDetailPage;
