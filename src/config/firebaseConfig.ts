import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FRIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FRIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FRIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FRIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FRIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FRIREBASE_APPID,
};


const app = initializeApp(firebaseConfig);
export const FireStoreDb = getFirestore(app);