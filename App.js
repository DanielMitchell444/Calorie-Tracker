import logo from './logo.svg';
import styles from '../src/App.module.css'
import SignUp from './Pages/Sigup';
import axios from 'axios';
import { use, useState } from 'react';
import {auth, googleProvider, signInWithPopup} from '../src/Services/firebase'
import Login from '../src/Pages/Login'
function App() {



  const [steps, nextSteps] = useState(1)
  const [signUpData, setSignUpData] = useState({
   email: "",
   password: "",
   age: "",
   height: "",
   weight: "",
   preferences: ""
  })

  const [errors, setErrors] = useState({})


  const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const token = await result.user.getIdToken();
        const response = await fetch("http://localhost:8000/auth/google/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        const data = await response.json();
        console.log("Backend Response:", data);
        
        if (data.is_first_time_login) {
          // Handle first-time login, e.g., redirect to a setup page or show a welcome message
          window.location.href = "/Setup";
        } else {
          window.location.href = "/Dashboard";  // Normal redirect to the dashboard
        }
    
      } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    };


    const handleSignUp = async (e) => {
      e.preventDefault();
    
      if (steps === 1) {
        try {
          const response = await axios.post("http://localhost:8000/api/register_email/", {
            email: signUpData.email,
          });
    
          console.log(response.data); // Logs success data
          nextSteps(next => next + 1); // Moves to step 2 (steps will be incremented by 1)
          console.log(steps)
        } catch (error) {
          setErrors(error.response?.data || { general: 'Registration failed' });
          console.log('This did not work!', error);
        }
    
       } else if (steps === 2) {
        try {
          const response = await axios.post("http://localhost:8000/api/register_details/", {
            email: signUpData.email,
            password: signUpData.password,
          });
    
          console.log(response.data); // Logs success data
          nextSteps(steps + 1); // Moves to step 3
          console.log(steps)
        } catch (error) {
          setErrors(error.response?.data || { general: 'Details registration failed' });
          console.log('This does not work', error);
        }
      }
    };
  const handleNext = () => {
    nextSteps(steps + 1)
  }

  const handleBack = () => {
    nextSteps(steps - 1);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
};

  return (
    <div className="App">
     <SignUp
     handleNext={handleNext}
     steps = {steps}
     data = {signUpData}
     handleChange = {handleChange}
     handleSignUp = {handleSignUp}
     handleGoogleSignIn = {handleGoogleSignIn}
     />
    </div>
  );
}

export default App;
