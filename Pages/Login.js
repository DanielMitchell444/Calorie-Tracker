
import styles from '../App.module.css'
import logo from '../Assets/logo.png'
const Login = () => {

 return(
  <>
<div className= {styles.wrappedContainer}>
<div className= {styles.logoStuff}>
  <img src = {logo} className= {styles.logo} />
  </div>
<div className =  {styles.containerSignUp}>
 <div className= {styles.content}>
   <h1>Welcome Back!</h1>
   </div>
   <form 
   className= {styles.form}
   >
    <>
    <div className= {styles.inputFields2}>
      <input type = "email" placeholder="Enter Email"
       required 
       name = "Email"
       />
    </div>
    <div className= {styles.inputFields}>
      <input type = "submit" value= "Continue" 
      className= {styles.login}
      />
    </div>
    <div className= {styles.account}>
        <p>Don't have an account? 
         Sign Up
          
          </p>
      </div>
      <div className= {styles.or}>
        <hr className= {styles.thing}></hr>
        <h2>Or</h2>
        <hr className= {styles.thing}></hr>
      </div>
      <div className= {styles.alternativeSignIn}>
        <button type = "button"
        className= {styles.googleSignInButton}
        >
       Sign in with Google
        </button>
        <button type = "button"
        className= {styles.microsoftSignInButton}
        >
         Sign in with Microsoft
        </button>
        <button type = "button"
        className= {styles.googleSignInButton}
        >
         Sign in with Memes
        </button>
      </div>
      </>
   </form>
 </div>

</div>
</>
 )
}

export default Login