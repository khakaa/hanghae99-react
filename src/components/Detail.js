import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { deletewordFB, selectWord } from "../redux/modules/wordList";

const Detail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const wordIndex = params.index;
  const wordList = useSelector((state) => state.wordList.list);

  const updateButtonStyle = {
    color: "white",
    fontSize: "40px",
    padding: "2px",
  };

  const deleteButtonStyle = {
    color: "white",
    fontSize: "40px",
    padding: "2px",
  };
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
        <Tooltip title="edit">
          <IconButton
            style={{ padding: "4px", position: "relative", left: "35px" }}
          >
            <DriveFileRenameOutlineOutlinedIcon
              style={updateButtonStyle}
              onClick={() => {
                dispatch(selectWord(wordList[wordIndex]));
                history.push("/word/?edit=true");
              }}
            ></DriveFileRenameOutlineOutlinedIcon>
          </IconButton>
        </Tooltip>

        <Tooltip title="delete">
          <IconButton
            style={{ padding: "4px", position: "relative", right: "10px" }}
          >
            <DeleteForeverOutlinedIcon
              style={deleteButtonStyle}
              onClick={() => {
                window.alert("삭제 하시겠습니까?");
                dispatch(deletewordFB(wordList[wordIndex].id));
                history.push("/list");
              }}
            ></DeleteForeverOutlinedIcon>
          </IconButton>
        </Tooltip>
      </TopBar>

      <div style={{ paddingTop: "50px", margin: "15px" }}>
        <Title>Detail Page</Title>
        <DetailWrap>
          <p>{wordList[wordIndex] ? wordList[wordIndex].word : ""}</p>
          <p>{wordList[wordIndex] ? wordList[wordIndex].desc : ""}</p>
          <p>{wordList[wordIndex] ? wordList[wordIndex].ex : ""}</p>
        </DetailWrap>
      </div>
    </>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7eaafe;
  position: fixed;
  top: 0px;
  padding: 4px 0px;
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

const Title = styled.h2`
  font-family: "Abril Fatface", cursive;
  text-align: center;
  color: #626262;
`;

const DetailWrap = styled.div`
  border: 16px solid #fedb6c;
  border-radius: 5px;
  padding: 100px 0px;
  /* background-color: #fae9b5; */
  & > p {
    font-family: "Libre Baskerville", serif;
    font-size: 18px;
    text-align: center;
    padding: 0px 30px;
    margin: 50px 0px;
    word-break: break-all;
    word-wrap: normal;
  }
`;
export default Detail;
