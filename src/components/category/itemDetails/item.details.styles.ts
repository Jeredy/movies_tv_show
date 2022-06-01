import styled, { css } from "styled-components";
import { ReactComponent as Trash } from "../../../assets/icons/trash_full.svg";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";
import { ReactComponent as Check } from "../../../assets/icons/check.svg";

import { w, ww } from "../../../styles/responsive";

export const Container = styled.div`
  display: flex;
  height: 100%;
  min-width: 100%;
  padding: ${w(9, 0)};

  * {
    margin: 0;
  }
`;

export const SubContainer = styled.div`
  display: flex;
`;

export const Title = styled.p`
  display: flex;
  font-size: ${ww(8)}px;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: left;
  color: #3b4ba2;
  margin-bottom: ${ww(2)}px;
  text-transform: capitalize;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const iconStyle = css`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const EditIcon = styled(Edit).attrs({
  width: ww(9),
  height: ww(10),
})`
  ${iconStyle}
`;

export const TrashIcon = styled(Trash).attrs({
  width: ww(11),
  height: ww(11),
})`
  ${iconStyle}
  margin-left: ${ww(4)}px;
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
  margin-left: ${ww(4)}px;
`;
