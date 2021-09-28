import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Start = (props) => {
  const history = useHistory();

  return (
    <StartWrap>
      <Title>MY DICTIONARY</Title>
      <SubTitle>YOU CAN ALWAYS BETTER</SubTitle>

      <StartButton onClick={() => history.push("/list")}>START</StartButton>
    </StartWrap>
  );
};

const StartWrap = styled.div`
  background: #7eaafe;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-size: 45px;
  color: #fedb6c;
  position: relative;
  top: 20vh;
`;

const SubTitle = styled.p`
  font-family: "Abril Fatface", cursive;
  color: #fedb6c;
  position: relative;
  top: 14vh;
  font-size: 1.1em;
`;

const StartButton = styled.button`
  background: #fedb6c;
  font-family: "Abril Fatface", cursive;
  font-size: 30px;
  color: #7eaafe;
  border: none;
  position: relative;
  top: 40vh;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    color: #3860ac;
    position: relative;
    top: 40.1vh;
    left: 1px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
export default Start;
