// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQwg5Mw6ZviY1Lw49NQgqqgC03KA16ur0',
  authDomain: 'badminton-app-3b9a7.firebaseapp.com',
  projectId: 'badminton-app-3b9a7',
  storageBucket: 'badminton-app-3b9a7.firebasestorage.app',
  messagingSenderId: '137747960634',
  appId: '1:137747960634:web:3411086492eecae9513603',
  measurementId: 'G-B3HQLJFQTM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
// const analytics = getAnalytics(app);
