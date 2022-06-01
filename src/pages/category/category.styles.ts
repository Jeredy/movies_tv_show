import styled, { css } from "styled-components";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Check } from "../../assets/icons/check.svg";

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
  z-index: 9999;
`;

export const Text = styled.p`
  font-size: ${ww(8)}px;
  text-align: center;
  font-weight: 400;
  color: #3b4ba2;
  margin-bottom: ${ww(11)}px;
`;

export const Title = styled.p`
  display: flex;
  font-size: ${ww(12)}px;
  font-weight: 700;
  text-align: left;
  color: #3b4ba2;
  margin-bottom: ${ww(6)}px;
`;

export const StatusContainer = styled.div`
  display: flex;
  width: ${ww(100)}px;
  height: ${ww(17)}px;
  padding: ${w(6, 0)};
  align-items: center;
  justify-content: center;
  background: #596cd4;
  margin-right: auto;
  margin-bottom: ${ww(9)}px;
  border-radius: ${ww(3)}px;

  p {
    font-size: ${ww(7)}px;
    font-weight: 400;
    color: #fff;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  border-radius: ${ww(3)}px;
  width: ${ww(210)}px;
  max-height: ${ww(382)}px;
  padding: ${w(20, 17, 14, 17)};
  position: relative;
`;

export const AnnotationContainer = styled.div`
  display: flex;
  width: calc(100% + ${ww(34)}px);
  margin-left: -${ww(17)}px;
  flex-direction: column;
  max-height: ${ww(256)}px;
  overflow-y: scroll;
  padding: ${w(0, 14)};
`;

export const IconContainer = styled.div`
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

export const Icon = styled(Close).attrs({
  width: w(14),
  height: w(14),
})`
  display: flex;
`;

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  margin: ${w(6, 0)};
  justify-content: space-between;
  align-items: center;

  button {
    width: 70px;
  }
`;

export const Divisor = styled.div`
  height: 1px;
  width: calc(100% + ${ww(34)}px);
  transform: translateX(-${ww(17)}px);
  border-bottom: 1px solid #e5e5e5;
`;

export const SubContainer = styled.div`
  display: flex;
  margin-bottom: ${ww(10)}px;
  height: 100%;
  align-items: center;

  * {
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const iconStyle = css`
  display: flex;
  margin: ${w(0, 0, 4, 4)};

  &:hover {
    cursor: pointer;
  }
`;

export const CloseIcon = styled(Close).attrs({
  width: w(11),
  height: w(11),
})`
  ${iconStyle}
`;

export const CheckIcon = styled(Check).attrs({
  width: w(11),
  height: w(11),
})`
  ${iconStyle}
`;
