//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxp89NbO4NjLtk4MA_zfgH8Vrvz_LwDxQ",
    authDomain: "colstropiaplanetmainchatroom.firebaseapp.com",
    databaseURL: "https://colstropiaplanetmainchatroom-default-rtdb.firebaseio.com",
    projectId: "colstropiaplanetmainchatroom",
    storageBucket: "colstropiaplanetmainchatroom.appspot.com",
    messagingSenderId: "199871280150",
    appId: "1:199871280150:web:37f0aca86e88a6c0f3b137"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      var username = document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({

        purpose: "adding user"
      });
  }