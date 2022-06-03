import styled from "styled-components";
import { ww } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100vw - ${ww(114)}px);

  &.active {
    max-width: 100%;
  }
`;
