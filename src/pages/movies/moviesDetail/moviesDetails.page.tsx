import React from "react";
import ReactPlayer from "react-player";
import Alert from "../../../components/alert/alert.component";

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
  const { movies, pageDetails, setPageDetails, deleteMovie, setEditData } =
    React.useContext(GeneralContext);
  const [data, setData] = React.useState<MoviesModel>();
  const [play, setPlay] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showCautionAlert, setShowCautionAlert] = React.useState(false);
  const { id } = pageDetails;

  React.useEffect(() => {
    movies.forEach((element) =>
      element.data.forEach((movie) => {
        if (movie.id === id) {
          return setData(movie);
        }
      })
    );
  });

  const deleteData = (id: number, category: string) => {
    setIsLoading(true);
    deleteMovie?.(id, category);

    console.log("movie:", id);
    setTimeout(() => {
      setPageDetails?.({});
      setIsLoading(false);
    }, 2500);
  };

  return (
    <Container>
      <SubContainer isPlaying={play} image={data?.image}>
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
            <Button
              title="Play"
              inverterColor
              clickFunction={() => setPlay(true)}
            />
            <Button
              title="Edit"
              clickFunction={() => (
                setEditData?.({ id: id }),
                setPageDetails?.({ id: data?.id, route: "addMovie" })
              )}
            />
            <Button
              title="Delete"
              customColor="#F24C4C"
              clickFunction={() => setShowCautionAlert(true)}
            />
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
      {showCautionAlert && (
        <Alert
          text={`Você está prestes a deletar esse filme:${data?.name}`}
          buttonText="Deletar"
          clickFunction={() => setShowCautionAlert(false)}
          cautionFunction={() => deleteData(data?.id!, data?.category!)}
          isLoading={isLoading}
          isCaution={true}
        />
      )}
    </Container>
  );
};

export default MovieDetailPage;
