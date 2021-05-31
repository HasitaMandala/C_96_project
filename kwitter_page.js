//YOUR FIREBASE LINKS
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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
