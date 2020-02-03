import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAmQhxU_ghDdyI4EKzb5Wx1MxvJQ43r2aw",
    authDomain: "authfib.firebaseapp.com",
    databaseURL: "https://authfib.firebaseio.com",
    projectId: "authfib",
    storageBucket: "authfib.appspot.com",
    messagingSenderId: "651755352191",
    appId: "1:651755352191:web:b89f6f402c577fb19d0f4a",
    measurementId: "G-PJJ6DZLK83"
  };
  const fire = firebase.initializeApp(config);

export default (fire);
