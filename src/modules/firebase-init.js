import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBOZE5slxahmV8HgxOZILbDP_MBa5nIEwI",
    authDomain: "cinecon-be402.firebaseapp.com",
    // databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "cinecon-be402",
    storageBucket: "cinecon-be402.appspot.com",
    // messagingSenderId: "<SENDER_ID>",
}

firebase.initializeApp(config);

export default firebase