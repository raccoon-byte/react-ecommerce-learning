import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
