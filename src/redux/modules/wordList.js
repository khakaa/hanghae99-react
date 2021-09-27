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
const LOAD_WORD = "word/LOAD";
const CREATE_WORD = "word/CREATE";
const SELECT_WORD = "word/SELECT";
const UPDATE_WORD = "word/UPDATE";
const DELETE_WORD = "word/DELETE";

// state
const initialState = {
  list: [],
  selectedWord: {},
};

// action make function
export const loadWord = (wordList) => {
  return { type: LOAD_WORD, wordList };
};

export const createWord = (word) => {
  return { type: CREATE_WORD, word };
};

export const selectWord = (word) => {
  return { type: SELECT_WORD, word };
};

export const updateWord = (updatedWord) => {
  return { type: UPDATE_WORD, updatedWord };
};

export const deleteWord = (targetIndex) => {
  return { type: DELETE_WORD, targetIndex };
};

// 파이어베이스와 통신
export const loadWordListFB = () => {
  return async function (dispatch) {
    const wordData = await getDocs(collection(db, "dictionary"));

    // console.log(wordData);
    let wordList = [];

    wordData.forEach((word) => {
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

export const updateWordFB = (updatedWord) => {
  return async function (dispatch, getState) {
    // console.log(updatedWord.id);
    const docRef = doc(db, "dictionary", updatedWord.id);
    await updateDoc(docRef, {
      id: updatedWord.id,
      word: updatedWord.word,
      desc: updatedWord.desc,
      ex: updatedWord.ex,
    });

    dispatch(updateWord(updatedWord));
  };
};

export const deletewordFB = (targetId) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", targetId);
    await deleteDoc(docRef);

    console.log(getState().wordList);
    const wordList = getState().wordList.list;
    const targetIndex = wordList.findIndex((l) => {
      return l.id === targetId;
    });
    // console.log(targetIndex);
    dispatch(deleteWord(targetIndex));
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
      // console.log(newWordList);
      return { ...state, list: newWordList };
    }
    case "word/SELECT": {
      return { ...state, selectedWord: action.word };
    }
    case "word/UPDATE": {
      const newWordList = state.list.map((l, idx) => {
        if (l.id === action.updatedWord.id) return action.updatedWord;
        else {
          return l;
        }
      });
      console.log(newWordList);
      return { list: newWordList };
    }
    case "word/DELETE": {
      const remainigList = state.list.filter((list, idx) => {
        return 1 * action.targetIndex !== idx;
      });
      return { ...state, list: remainigList };
    }
    default:
      return state;
  }
}
