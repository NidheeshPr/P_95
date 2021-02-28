//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAIzEfxWqNM7NUEg3rF_LYT6bVg0tb1gQM",
    authDomain: "kwitter-5b927.firebaseapp.com",
    projectId: "kwitter-5b927",
    storageBucket: "kwitter-5b927.appspot.com",
    messagingSenderId: "919403504856",
    appId: "1:919403504856:web:6881ebcf404e54143823ad",
    measurementId: "G-SYLXB2YTQ9"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,message:msg,like:0
    });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
