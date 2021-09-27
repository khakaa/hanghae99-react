import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { createWordFB, updateWordFB } from "../redux/modules/wordList";
import { queryEqual } from "@firebase/firestore";

const Word = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const wordRef = React.useRef(null);
  const descRef = React.useRef(null);
  const exRef = React.useRef(null);
  const selectWord = useSelector((state) => state.wordList.selectedWord);

  // console.log(selectWord);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const isEditMode = query.get("edit");

  // console.log(isEditMode);

  return (
    <>
      <TopBar>
        <p
          onClick={() => {
            history.push("/");
          }}
        >
          MY DICTIONAY
        </p>
        <ButtonToComplete
          onClick={() => {
            // 수정
            // console.log(
            //   wordRef.current.value,
            //   descRef.current.value,
            //   exRef.current.value
            // );
            if (isEditMode === "true") {
              dispatch(
                updateWordFB({
                  id: selectWord.id,
                  word: wordRef.current.value,
                  desc: descRef.current.value,
                  ex: exRef.current.value,
                })
              );
            }
            // 작성
            else {
              dispatch(
                createWordFB({
                  word: wordRef.current.value,
                  desc: descRef.current.value,
                  ex: exRef.current.value,
                })
              );
            }
            history.push("/list");
          }}
        >
          save
        </ButtonToComplete>
      </TopBar>
      <WordWrap>
        <Title style={{ textAlign: "center" }}>New Word</Title>
        <InputBox>
          <Text
            placeholder="word"
            defaultValue={isEditMode ? selectWord.word : ""}
            ref={wordRef}
          ></Text>

          <Text
            style={{ height: "150px" }}
            placeholder="description"
            defaultValue={isEditMode ? selectWord.desc : ""}
            ref={descRef}
          ></Text>

          <Text
            style={{ height: "150px" }}
            placeholder="example"
            defaultValue={isEditMode ? selectWord.ex : ""}
            ref={exRef}
          ></Text>
        </InputBox>
      </WordWrap>
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
  & > p {
    font-family: "Abril Fatface", cursive;
    margin: 10px 20px;
    color: #fedb6c;
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
      color: #eebe27;
      position: relative;
      top: 2px;
      left: 2px;
    }
    &:active {
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;

const ButtonToComplete = styled.button`
  font-family: "Abril Fatface", cursive;
  font-size: 20px;
  border: none;
  margin: 0px 15px;
  background-color: #fedb6c;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #eebe27;
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const WordWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 100px;
  /* border: 2px solid #7eaafe; */
  margin: 15px;
  padding-bottom: 16px;
  position: relative;

  & > div > input {
    width: 80vw;
    height: 6vh;
  }
`;

const Title = styled.h2`
  font-family: "Abril Fatface", cursive;
  color: #626262;
`;
const InputBox = styled.div`
  border: 3px solid #fedb6c;
  padding: 16px 16px 0px 16px;
  background: #fedb6c;
  border-radius: 5px;
`;

const Text = styled.textarea`
  width: -webkit-fill-available;
  height: 50px;
  margin-bottom: 15px;
  &::placeholder {
    font-family: "Abril Fatface", cursive;
    font-size: 1.3em;
  }
`;

export default Word;
