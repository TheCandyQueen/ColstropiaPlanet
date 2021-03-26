//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC69FUziXQrGKeJabdazl7mcc_PAw1widI",
      authDomain: "colstropia-planet-main-chat.firebaseapp.com",
      databaseURL: "https://colstropia-planet-main-chat-default-rtdb.firebaseio.com",
      projectId: "colstropia-planet-main-chat",
      storageBucket: "colstropia-planet-main-chat.appspot.com",
      messagingSenderId: "689052748195",
      appId: "1:689052748195:web:c0dbdbbc53721524993216"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //end of firebase thing
    document.getElementById("username").innerHTML = "Welcome " + username + "!";

    function addRoom() {
      RoomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomName", roomName);
      window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room_names");
            row = "<div class = 'roomName' id = " + Room_names + "onclick = 'redict_2_room_name(.id)'> #" + Room_names + "</div>";
      //End code
      });});}
getData();

//logout button
function redict_2_room_name(name) {
      console.log(name);
      localStorage.setItem("roomName", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
            window.location = "index.html";
}