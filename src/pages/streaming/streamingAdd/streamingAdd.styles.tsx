import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../../assets/icons/chevron_big_right.svg";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";

import { ww } from "../../../styles/responsive";

export const MainContainer = styled.div`
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
  z-index: 9999;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${ww(205)}px;
  background-color: #fff;
  padding: ${ww(15)}px;
  border-radius: ${ww(11)}px;
  position: absolute;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-bottom: ${ww(24)}px;
`;

export const Logo = styled.img`
  width: ${ww(165)}px;
  height: ${ww(55)}px;
`;

export const InputLink = styled(Link)`
  margin-top: ${ww(13)}px;
  text-transform: capitalize;
  color: #3b4ba2;
`;

export const MainLabel = styled.p`
  font-weight: 700;
  line-height: ${ww(11)}px;
  color: #4b4b4b;
  margin-bottom: ${ww(13)}px;
  margin-right: auto;
`;

export const SubLabel = styled.p`
  font-size: ${ww(8)}px;
  font-weight: 400;
  text-align: left;
  color: #4b4b4b;
  margin-bottom: ${ww(6)}px;
  margin-right: auto;
`;

export const TextError = styled.p`
  font-size: ${ww(6)}px;
  color: #f31;
  margin-bottom: ${ww(6)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  margin-bottom: ${ww(11)}px;
  overflow-y: scroll;
  max-height: ${ww(252)}px;
`;

export const Form = styled.form``;

export const Title = styled.p`
  font-size: ${ww(15)}px;
  color: #005555;
  font-weight: 700;
  margin-bottom: ${ww(6)}px;
  align-self: flex-start;
`;

export const CancelButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${ww(5)}px;
`;

export const CloseIconContainer = styled.div`
  display: flex;
  width: ${ww(17)}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${ww(6)}px;
  right: ${ww(6)}px;

  &:hover {
    cursor: pointer;
  }
`;

export const CloseIcon = styled(Close).attrs({
  width: ww(14),
  height: ww(14),
})`
  display: flex;
`;

export const ArrowDownIcon = styled(ArrowDown).attrs({
  width: ww(11),
  height: ww(12),
})`
  transform: rotate(90deg);
`;
