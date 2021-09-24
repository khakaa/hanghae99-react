// action
const ADD_WORD = "word/ADD";

// action make function
export const addWord = (wordList) => {
  return { type: ADD_WORD, wordList };
};

// state
const initialState = {
  list: [{ word: "hello", desc: "안녕이라는 뜻", ex: "hello world" }],
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/ADD": {
      const newWordList = [...state.list, action.wordList];
      console.log(newWordList);
      return { list: newWordList };
    }
    default:
      return state;
  }
}
