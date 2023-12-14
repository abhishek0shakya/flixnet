<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAoX_uwS_SjsPcnvrrqPIJF4KPZum58hbA",
    authDomain: "flixnet-by-abhi.firebaseapp.com",
    projectId: "flixnet-by-abhi",
    storageBucket: "flixnet-by-abhi.appspot.com",
    messagingSenderId: "854146770863",
    appId: "1:854146770863:web:550d0b667c9f6f8b44715a",
    measurementId: "G-Y4EKPWQNX8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>