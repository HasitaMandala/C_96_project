
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCDWm15E5XDmNXhF5cdSaMsmBiXhpW4Xy8",
  authDomain: "kwitter94.firebaseapp.com",
  projectId: "kwitter94",
  storageBucket: "kwitter94.appspot.com",
  messagingSenderId: "241383960733",
  appId: "1:241383960733:web:5fb39d418506f435dd2474"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room name: "+ Room_names);
  row = "<div class='room_name' id="+Room_names" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html"
}