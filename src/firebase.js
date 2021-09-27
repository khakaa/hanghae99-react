// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpX_kSxIUZvqDMcp4V7PBTg9-kF85NVM0",
  authDomain: "my-dictionary-aefef.firebaseapp.com",
  projectId: "my-dictionary-aefef",
  storageBucket: "my-dictionary-aefef.appspot.com",
  messagingSenderId: "140924957374",
  appId: "1:140924957374:web:61c8caa385186feba2a4ef",
  measurementId: "G-DJHFR0CY91",
};
// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebase의 firesotre 인스턴스를 변수에 저장
// 필요한 곳에서 사용할 수 있도록 내보내기
export const db = getFirestore();
