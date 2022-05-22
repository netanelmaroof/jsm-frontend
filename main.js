// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPOqTRcK_ynJlj363UjASIJve6zGEbjok",
  authDomain: "jsm-backend.firebaseapp.com",
  projectId: "jsm-backend",
  storageBucket: "jsm-backend.appspot.com",
  messagingSenderId: "1065854504667",
  appId: "1:1065854504667:web:8b959c014b101fe544c6fe",
  measurementId: "G-B3QNRJRS1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);


async function addToEmailList() { 
   
   const emailInput = document.getElementById("cta-input")
   const button = document.getElementById("cta-button")


   if (emailInput.value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
       button.innerText = "Signing You Up..."
       button.setAttribute('disabled', 'disabled')
       emailInput.setAttribute('disabled', 'disabled')
       try {
           await setDoc(doc(db, "email_list", emailInput.value), {});
       } catch(err) {
           button.innerText = "There was an error, try again."
           button.setAttribute('disabled', false)
           emailInput.setAttribute('disabled', false)
       }
       button.innerText = "Notified!"
   } else {
       console.log("error")
   }
}

document.getElementById("cta-button").addEventListener("click", await addToEmailList)