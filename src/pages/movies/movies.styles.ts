import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.p`
  margin-bottom: 55px;
  font-size: 36px;
  font-weight: 500px;
  color: #4b4b4b;
  margin-right: auto;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 800px;
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
