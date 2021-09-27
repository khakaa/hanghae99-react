import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../firebase";

// action
const CREATE_WORD = "word/CREATE";
const LOAD_WORD = "word/LOAD";

// state
const initialState = {
  list: [],
};

// action make function
export const loadWord = (wordList) => {
  return { type: LOAD_WORD, wordList };
};

export const createWord = (word) => {
  return { type: CREATE_WORD, word };
};

// 파이어베이스와 통신
export const loadWordListFB = () => {
  return async function (dispatch) {
    const wordData = await getDocs(collection(db, "dictionary"));

    let wordList = [];

    wordData.forEach((word) => {
      // console.log(word.id, word.data());
      wordList.push({ id: word.id, ...word.data() });
    });

    // console.log(wordList);
    dispatch(loadWord(wordList));
  };
};

export const createWordFB = (myWord) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), myWord);
    const newWord = { id: docRef.id, ...myWord };
    dispatch(createWord(newWord));
  };
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.wordList };
    }
    case "word/CREATE": {
      const newWordList = [...state.list, action.word];
      console.log(newWordList);
      return { ...state, list: newWordList };
    }
    default:
      return state;
  }
}
