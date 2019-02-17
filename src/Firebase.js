import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
	apiKey: "AIzaSyAgh4BdiJvYtXem7lDUXBrHnwMo6WJAidA",
    authDomain: "blog-51cff.firebaseapp.com",
    databaseURL: "https://blog-51cff.firebaseio.com",
    projectId: "blog-51cff",
    storageBucket: "blog-51cff.appspot.com",
    messagingSenderId: "567220063461"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;