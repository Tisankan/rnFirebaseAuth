// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCC7jIiUssVOkTbREmCwNWllUMWS9-W7EU",
    authDomain: "login-510ec.firebaseapp.com",
    databaseURL: "https://login-510ec.firebaseio.com",
    projectId: "login-510ec",
    storageBucket: "login-510ec.appspot.com",
    messagingSenderId: "610655044422",
    appId: "1:610655044422:web:4ce7108e4b6ae29b9bdb47",
    measurementId: "G-R60PL4W3PQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;