import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const List = (props) => {
  const wordList = useSelector((state) => state.wordList.list);
  console.log(wordList);
  const history = useHistory();
  return (
    <>
      <TopBar>
        <p
          onClick={() => {
            console.log("clicked");
            history.push("/");
          }}
        >
          MY DICTIONAY
        </p>
        <PlusButton
          onClick={() => {
            history.push("/word");
          }}
        >
          +
        </PlusButton>
      </TopBar>

      <Wrap>
        {wordList.map((l, idx) => {
          return (
            <ListWrap>
              <div>
                <Paragraph>단어</Paragraph>
                <p>{l.word}</p>
              </div>

              <Line />

              <div>
                <Paragraph>설명</Paragraph>
                <p>{l.desc}</p>
              </div>

              <Line />

              <div>
                <Paragraph>예시</Paragraph>
                <p style={{ color: "#387bca" }}>{l.ex}</p>
              </div>
            </ListWrap>
          );
        })}
      </Wrap>
    </>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7eaafe;
  padding: 5px 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: inherit;
  z-index: 200;
  & > p {
    font-family: "Abril Fatface", cursive;
    margin: 10px 20px;
    color: #fedb6c;
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
      color: #eebe27;
    }
    &:active {
      position: relative;
      top: 1px;
      right: 1px;
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;

const PlusButton = styled.button`
  font-size: 30px;
  border: none;
  background-color: #fedb6c;
  color: white;
  margin: 0px 15px;
  padding: 0 7px;
  cursor: pointer;
  &:hover {
    background-color: #eebe27;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  &:active {
    position: relative;
    top: 1px;
    right: 1px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Wrap = styled.div`
  z-index: 1;
  position: relative;
  /* overflow: scroll; */
  /* top: 75px; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const ListWrap = styled.div`
  border: 3px solid #fedb6c;
  border-radius: 3px;
  margin: 15px;
  position: relative;
  top: 60px;
  background: white;

  & > div > p {
    padding: 0px 10px 0px 10px;
    word-break: break-all;
    word-wrap: normal;
  }
`;

const Paragraph = styled.p`
  text-decoration: underline;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 1px solid #fedb6c;
`;
export default List;
