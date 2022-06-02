import styled from "styled-components";
import { ww } from "../../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
`;

export const Title = styled.p`
  margin-bottom: ${ww(31)}px;
  font-size: ${ww(20)}px;
  font-weight: ${ww(285)}px;
  color: #4b4b4b;
  margin-right: auto;
`;

export const FirstMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const SecondMenu = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;
