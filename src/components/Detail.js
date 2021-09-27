import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import { deletewordFB, selectWord } from "../redux/modules/wordList";

const Detail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const wordIndex = params.index;
  const wordList = useSelector((state) => state.wordList.list);

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

        <DriveFileRenameOutlineOutlinedIcon
          style={{
            position: "relative",
            left: "50px",
            color: "white",
            fontSize: "40px",
            margin: "0px 10px 0px 0px",
            padding: "2px",
          }}
          onClick={() => {
            dispatch(selectWord(wordList[wordIndex]));
            history.push("/word/?edit=true");
          }}
        ></DriveFileRenameOutlineOutlinedIcon>

        <DeleteForeverOutlinedIcon
          style={{
            color: "white",
            fontSize: "40px",
            margin: "0px 15px 0px 0px",
            padding: "2px",
          }}
          onClick={() => {
            dispatch(deletewordFB(wordList[wordIndex].id));
            history.push("/list");
          }}
        ></DeleteForeverOutlinedIcon>
      </TopBar>

      <DetailWrap>
        <p>{wordList[wordIndex].word}</p>
        <p>{wordList[wordIndex].desc}</p>
        <p>{wordList[wordIndex].ex}</p>
      </DetailWrap>
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

const Button = styled.button`
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

const DetailWrap = styled.div`
  padding-top: 60px;
`;
export default Detail;
