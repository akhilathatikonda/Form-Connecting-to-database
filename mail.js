const firebaseConfig = {
    apiKey: "AIzaSyD9yYnPmMq4j4aEfERERof2MsOIo4py01k",
    authDomain: "globun8-53e71.firebaseapp.com",
    databaseURL: "https://globun8-53e71-default-rtdb.firebaseio.com",
    projectId: "globun8-53e71",
    storageBucket: "globun8-53e71.appspot.com",
    messagingSenderId: "1087980700113",
    appId: "1:1087980700113:web:057c1bc9e0d862e36ae0f0"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactform");
  
  document.getElementById("contactform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactform").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };







 