import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/chevron_big_right.svg";
import { ReactComponent as Expand } from "../../assets/icons/expand.svg";
import { w, ww } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: ${ww(199.5)}px;
  max-height: ${ww(199.5)}px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url(https://i.pinimg.com/originals/3b/97/b0/3b97b0ab8ef4d7de00ee4a1852b32d8a.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 888;

  &:before {
    content: "";
    display: flex;
    width: 100%;
    height: ${ww(199.5)}px;
    position: absolute;

    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 1%,
      rgba(20, 20, 71, 0.7) 30%,
      rgba(90, 122, 164, 0.21) 63%,
      rgba(15, 10, 92, 0) 99%
    );
    z-index: 1;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  max-width: ${ww(313.5)}px;
  flex-direction: column;
  padding-left: ${ww(9)}px;
  z-index: 888;
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${w(13, 15)};
  z-index: 888;

  p {
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: ${ww(23)}px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: space-around;
  width: 100%;
  margin: ${w(2, 0, 9, 0)};

  p {
    font-weight: 400;
  }
`;

export const About = styled.p`
  color: #fff;
  font-size: ${ww(9)}px;
  font-weight: 400;
  max-length: 200;
`;

export const Text = styled.p`
  display: flex;
  margin-right: 1rem;
  color: #c7c7c7;
  font-size: ${ww(8)}px;
  font-weight: 200;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${ww(210)}px;
  margin-top: ${ww(18)}px;

  button {
    width: ${ww(97)}px;
  }
`;

export const Icon = styled(Arrow)`
  transform: rotate(180deg);
`;

export const IconFullScreen = styled(Expand)`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;
