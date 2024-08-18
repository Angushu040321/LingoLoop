import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHvIEQyBJKIr_YfiIqil9NhXGaMVu0fxs",
    authDomain: "place-56334.firebaseapp.com",
    projectId: "place-56334",
    storageBucket: "place-56334.appspot.com",
    messagingSenderId: "599492031043",
    appId: "1:599492031043:web:591ac07fe8362278831af6",
    measurementId: "G-84S04RM0X5"
};

let auth, db, analytics;
if (typeof window !== "undefined") {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    auth = getAuth(app);
    db = getFirestore(app);
    analytics = getAnalytics(app);
}

export { auth, db, analytics };