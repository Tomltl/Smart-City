import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBctv41kPtDehwITRGq_RpnZyOhHZD_nng';



const firebaseConfig = {
  apiKey: "AIzaSyBaKOUdQLFtoQORJry1qfdon1w6eb61LjQ",
  authDomain: "bordeaux-info.firebaseapp.com",
  projectId: "bordeaux-info",
  storageBucket: "bordeaux-info.appspot.com",
  messagingSenderId: "152913148374",
  appId: "1:152913148374:web:874f2342935a34e909cc77",
  measurementId: "G-K6CK7JG298"
};

if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };