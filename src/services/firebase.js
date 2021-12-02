import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
 } from "firebase/auth";

 import { getDatabase, ref } from 'firebase/database';
 
const firebaseConfig = {
  apiKey: "AIzaSyBx_PLvuv8Zwg_W98Gwh45h7Wut6pAsH60",
  authDomain: "star-ship-b1606.firebaseapp.com",
  projectId: "star-ship-b1606",
  storageBucket: "star-ship-b1606.appspot.com",
  messagingSenderId: "491416999478",
  appId: "1:491416999478:web:b726fc967ee1d070a5aa97"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const signUp = async (email, pass) => 
    await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) => 
    await signInWithEmailAndPassword(auth, email, pass);    

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsRefById = (id) => ref(db, `messages/${id}`);