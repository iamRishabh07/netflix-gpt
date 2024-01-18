// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDBP7zbEUR8-Pb6yBD3NqZcFLMMkcTKRs',
  authDomain: 'netflixgpt-e05eb.firebaseapp.com',
  projectId: 'netflixgpt-e05eb',
  storageBucket: 'netflixgpt-e05eb.appspot.com',
  messagingSenderId: '635164937888',
  appId: '1:635164937888:web:6091ab7cbe555faf8083c5',
  measurementId: 'G-177WJ9J3P3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
