import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  width: 200px;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  overflow: hidden;
  transition: 0.1s ease-in-out;
  position: relative;

  &.active {
    width: 50px;
    transition: 0.3s ease-in-out;

    p {
      display: none;
    }
  }
`;
