const firebaseConfig = {
    apiKey: "AIzaSyD5fc53eo6gEXJ2pqmxk3EBtja-0WCjsP8",
    authDomain: "project-687de.firebaseapp.com",
    databaseURL: "https://project-687de-default-rtdb.firebaseio.com",
    projectId: "project-687de",
    storageBucket: "project-687de.appspot.com",
    messagingSenderId: "304263375919",
    appId: "1:304263375919:web:6cb4b76deed0b4e2222ada",
    measurementId: "G-60J28LHKHG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function addRoom(){
    room_name = document.getElementById("Room_Name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "Messa_page.html";
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Messa_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}