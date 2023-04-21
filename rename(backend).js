const firebaseConfig = {
    apiKey: "AIzaSyC8I9sdvelK62GyvJZKHsU08uPnwcSJY58",
    authDomain: "foodies-39b82.firebaseapp.com",
    databaseURL: "https://foodies-39b82-default-rtdb.firebaseio.com",
    projectId: "foodies-39b82",
    storageBucket: "foodies-39b82.appspot.com",
    messagingSenderId: "35944411756",
    appId: "1:35944411756:web:408927207823aee5991e49"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var emailformDB = firebase.database().ref("emailform");

document.getElementById("emailform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var emailid = getElementVal("emailid");
    saveMessages(emailid);

    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("emailform").reset();
  }
  
  const saveMessages = (emailid) => {
    var newemailform = emailformDB.push();
  
    newemailform.set({
      emailid: emailid
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


 