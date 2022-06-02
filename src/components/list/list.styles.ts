import styled from "styled-components";
import { w, ww } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${ww(25)}px;
`;

export const Title = styled.p`
  font-size: ${ww(11)}px;
  font-weight: 600;
  padding: ${w(11, 0, 0, 11)};
  text-transform: cappitalize;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: calc(100% + ${ww(17)}px);
  max-width: calc(100vw - ${ww(57)}px);
  overflow-x: scroll;
`;
