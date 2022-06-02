import styled from "styled-components";
import { ww } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${ww(2)}px;
  height: 100%;
  width: 100%;
`;

export const Text = styled.p`
  font-weight: 400;
  color: #fff;
  margin-left: ${ww(5)}px;
  font-size: ${ww(7)}px;
`;
