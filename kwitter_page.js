//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDkw_l5mBtz5PvzmkwDzqtRL7kt5iQlD2A",
      authDomain: "kwitter-cf3df.firebaseapp.com",
      databaseURL: "https://kwitter-cf3df-default-rtdb.firebaseio.com",
      projectId: "kwitter-cf3df",
      storageBucket: "kwitter-cf3df.appspot.com",
      messagingSenderId: "732350834496",
      appId: "1:732350834496:web:0a63df4afef04ea4cc7ca5"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorag.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            }
      );
      document.getElementById("msg").value="";
}