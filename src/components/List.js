import React from "react";
// import { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const List = (props) => {
  const wordList = useSelector((state) => state.wordList.list);
  const history = useHistory();
  const plusButtonStyle = {
    fontSize: "40px",
    textDecoration: "bold",
    color: "white",
    cursor: "pointer",
  };
  // console.log(wordList);

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
        <Tooltip title="add">
          <IconButton
            style={{ padding: "4px", position: "relative", right: "10px" }}
          >
            <AddIcon
              style={plusButtonStyle}
              onClick={() => {
                history.push("/word");
              }}
            ></AddIcon>
          </IconButton>
        </Tooltip>
      </TopBar>

      <Wrap>
        {wordList.map((l, idx) => {
          return (
            <ListWrap
              key={idx}
              onClick={() => {
                // console.log(idx);
                history.push("/detail/" + idx);
              }}
            >
              <div>
                <p>{l.word}</p>
              </div>

              <Line />

              <div>
                <p>{l.desc}</p>
              </div>

              <Line />

              <div>
                <p style={{ color: "#387bca" }}>{l.ex}</p>
              </div>
            </ListWrap>
          );
        })}
      </Wrap>
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
  z-index: 200;
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

const Wrap = styled.div`
  height: inherit;
  z-index: 1;
  position: relative;
  padding-top: 10vh;
  overflow-y: scroll;
  height: calc(100vh - 10vh);
`;

const ListWrap = styled.div`
  border: 3px solid #fedb6c;
  border-radius: 3px;
  margin: 15px;
  background: white;

  & > div > p {
    font-family: "Libre Baskerville", serif;
    padding: 0px 10px 0px 10px;
    word-break: break-all;
    word-wrap: normal;
  }
  &:hover {
    background-color: #fae9b5;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    position: relative;
    top: 3px;
    left: 3px;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #fedb6c;
`;
export default List;
