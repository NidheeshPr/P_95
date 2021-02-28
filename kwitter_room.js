
//ADD YOUR FIREBASE LINKS HERE
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
  user_name = localStorage.getItem('user_name');
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  function addroom(){
        room_name = document.getElementById("room_name").Value;
        firebase.database ().ref("/").child("room_name").update({purpose:"adding room name"});
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name:"+Room_names);
row="<div class='room_name'id="+Room_names+" onclick='redirectroomname(this.id)' > #"+Room_names+" </div> <hr> ";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function LogOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}