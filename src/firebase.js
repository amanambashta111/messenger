import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDFGF_iI0Xu2GeP00cGOMqUujmvyyWIx_Q",
        authDomain: "messenger-8a58a.firebaseapp.com",
        databaseURL: "https://messenger-8a58a.firebaseio.com",
        projectId: "messenger-8a58a",
        storageBucket: "messenger-8a58a.appspot.com",
        messagingSenderId: "436331548925",
        appId: "1:436331548925:web:f84ab7b9f893a923172e94",
        measurementId: "G-PJCD3C1B6R"
      
});

const db = firebaseApp.firestore();
export default db;