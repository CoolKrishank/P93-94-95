var firebaseConfig = {
      apiKey: "AIzaSyCjMtOqDG8asMpaiy8AdkIgZ1sEfqGaepY",
      authDomain: "kwitter-f0b94.firebaseapp.com",
      databaseURL: "https://kwitter-f0b94-default-rtdb.firebaseio.com/",
      projectId: "kwitter-f0b94",
      storageBucket: "kwitter-f0b94.appspot.com",
      messagingSenderId: "64624072692",
      appId: "1:64624072692:web:dc0cf7b4abb72fb99d0ba1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row="<div id="+ Room_names +" class='room_name' onclick='redirecttoroomname(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}