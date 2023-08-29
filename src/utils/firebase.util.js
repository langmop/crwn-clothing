// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPjQXOcRq7PVAJDji88F0ZgfXPGLqiWVw",
  authDomain: "crwn-clothing-db-b1bee.firebaseapp.com",
  projectId: "crwn-clothing-db-b1bee",
  storageBucket: "crwn-clothing-db-b1bee.appspot.com",
  messagingSenderId: "1047354476260",
  appId: "1:1047354476260:web:a9f20a030523fe603dcef1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const twitterProvider = new TwitterAuthProvider();
twitterProvider.setCustomParameters({
  lang: "es",
});

export const auth = getAuth();
auth.languageCode = "it";

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithTwitterPopup = () =>
  signInWithPopup(auth, twitterProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  const isUserExist = userSnapShot.exists();

  if (!isUserExist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating the user", err);
    }
  }

  return userDocRef;
};
