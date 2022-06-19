import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBwi4o1cwpgs_DOVMCx-yhiBBNKobYWnw",
  authDomain: "react-learning-db-6bd2b.firebaseapp.com",
  projectId: "react-learning-db-6bd2b",
  storageBucket: "react-learning-db-6bd2b.appspot.com",
  messagingSenderId: "395482290171",
  appId: "1:395482290171:web:dbe9bbb928100054eedd5e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error while creating the user in db', error.message);
    }
  }

  return userDocRef;
};
