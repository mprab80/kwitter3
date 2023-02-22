var firebaseConfig = {
  apiKey: "AIzaSyCAV-Cd_uhbI38LVR3DUmrnpgW0_cWpYcw",
  authDomain: "kwitter-a8aad.firebaseapp.com",
  databaseURL: "https://kwitter-a8aad-default-rtdb.firebaseio.com",
  projectId: "kwitter-a8aad",
  storageBucket: "kwitter-a8aad.appspot.com",
  messagingSenderId: "706443830091",
  appId: "1:706443830091:web:a75a0898159ca5b05ebece"
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);





username=localStorage.getItem("username");
console.log(username);
document.getElementById("username1").innerHTML=username;


function addroom(){
window.location="kwitter_page.html"
roomname=localStorage.setItem("roomname", roomname);
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("roomname").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
});
});
}
