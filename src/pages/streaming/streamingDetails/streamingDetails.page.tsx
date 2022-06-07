import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import Alert from "../../../components/alert/alert.component";

import Button from "../../../components/button/button.components";
import { GeneralContext } from "../../../context/generalContext";
import { StreamingModel } from "../../../models/streaming";
import { w, ww } from "../../../styles/responsive";

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
} from "./streamingDetails.styles";

const StreamingDetailPage: React.FC = () => {
  const {
    movies,
    tvShows,
    pageDetails,
    setPageDetails,
    categories,
    deleteMovie,
    setEditData,
  } = React.useContext(GeneralContext);
  const [data, setData] = React.useState<StreamingModel>();
  const [play, setPlay] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showCautionAlert, setShowCautionAlert] = React.useState(false);
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];
  const { id } = pageDetails;

  React.useEffect(() => {
    const currentData = currentPage.search("movies") > -1 ? movies : tvShows;

    currentData.forEach((streaming) => {
      if (streaming.id === id) {
        return setData(streaming);
      }
    });
  });

  const deleteData = (id: number) => {
    setIsLoading(true);
    deleteMovie?.(id, currentPage.search("movies") > -1 ? "movies" : "tvShows");

    setTimeout(() => {
      setPageDetails?.({});
      setIsLoading(false);
      setShowCautionAlert(false);
    }, 1500);
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
            <Text>
              {
                categories[
                  categories.findIndex(
                    (categoria) => categoria.id === data?.category
                  )
                ]?.title
              }
            </Text>
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
                setPageDetails?.({
                  id: data?.id,
                  action: "addStreaming",
                  route: currentPage,
                })
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
          cautionFunction={() => deleteData(data?.id!)}
          isLoading={isLoading}
          isCaution={true}
        />
      )}
    </Container>
  );
};

export default StreamingDetailPage;
