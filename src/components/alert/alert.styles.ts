import styled from "styled-components";

import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Trash } from "../../assets/icons/trash_full.svg";
import { AlertStyleProps } from "../../types/alert";
import { w, ww } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000000bb;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
`;

export const Text = styled.p`
  font-size: ${ww(8)}px;
  color: #4b4b4b;
  margin-bottom: ${ww(5)}px;
  text-align: center;
`;

export const Box = styled.div<AlertStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ isCaution }) => (isCaution ? "#F24C4C" : "#64bc47")};
  background: #ffffff;
  border-radius: ${ww(3)}px;
  width: ${ww(181)}px;
  padding: ${w(7, 16, 10, 16)};

  & :nth-child(4) {
    margin-top: ${ww(11)}px;
  }
`;

export const IconContainer = styled.div`
  margin-bottom: ${ww(10)}px;
`;

export const Icon = styled(Check).attrs({
  width: w(16),
  height: w(16),
})``;

export const TrashIcon = styled(Trash).attrs({
  width: w(18),
  height: w(18),
})``;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${ww(23)}px;
  width: 100%;
  margin-top: ${ww(6)}px;

  &:hover {
    cursor: pointer;
  }

  p {
    font-size: ${ww(7)}px;
    color: #3b4ba2;
    margin-bottom: 0px;
  }
`;
