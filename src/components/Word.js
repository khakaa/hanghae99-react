import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import { createWordFB, updateWordFB } from "../redux/modules/wordList";

const Word = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const wordRef = React.useRef(null);
  const descRef = React.useRef(null);
  const exRef = React.useRef(null);
  const selectWord = useSelector((state) => state.wordList.selectedWord);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const isEditMode = query.get("edit");

  return (
    <div style={{ height: "inherit" }}>
      <TopBar>
        <p
          onClick={() => {
            history.push("/");
          }}
        >
          MY DICTIONARY
        </p>
        <Tooltip title="save" style={{ position: "relative", right: "10px" }}>
          <IconButton>
            <SaveAltIcon
              style={{ fontSize: "33px", color: "white" }}
              onClick={() => {
                // 수정
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
            ></SaveAltIcon>
          </IconButton>
        </Tooltip>
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
    </div>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7eaafe;
  padding: 4px 0px;
  position: fixed;
  top: 0px;
  width: 375px;
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

const WordWrap = styled.div`
  padding-top: 80px;
  margin: 0px 15px;
  height: calc(100vh - 80px);
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
