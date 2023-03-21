
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
document.getElementById("user_name").innerHTML="Hi"+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
       
      
      //End code
      });});}
getData();
function redirectToRoomName(name) {
   console.log(name); 
   localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; }