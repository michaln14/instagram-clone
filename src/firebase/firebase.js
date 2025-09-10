import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDGhG41a9IUV7roQfbCF7rrUGS2wZ_nkjw",
    authDomain: "instagram-clone-883ef.firebaseapp.com",
    projectId: "instagram-clone-883ef",
    storageBucket: "instagram-clone-883ef.appspot.com",
    messagingSenderId: "270528301654",
    appId: "1:270528301654:web:d3a1d1fe4494c3209b49f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };