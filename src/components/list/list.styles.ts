import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 45px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0px 0px 20px;
  text-transform: cappitalize;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: calc(100% + 30px);
  max-width: calc(100vw - 100px);
  overflow-x: scroll;
`;
