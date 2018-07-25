import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCQ8COeWvOyfckH7gFsmoPvWz4qDW33Nuo",
    authDomain: "newnew-d30fb.firebaseapp.com",
    databaseURL: "https://newnew-d30fb.firebaseio.com",
    projectId: "newnew-d30fb",
    storageBucket: "newnew-d30fb.appspot.com",
    messagingSenderId: "848352384120"
};

const fire = firebase.initializeApp(config);

export default fire;