import React from 'react';
import styles from '../App.module.css';
import logo from '../Assets/logo.png';

const SignUp = ({
  handleNext,
  steps,
  handleGoogleSignIn,
  data,
  handleChange,
  handleSignUp,
  handleBack, // Add a handler for the "Go Back" button
}) => {
  return (
    <div className={styles.wrappedContainer}>
      <div className={styles.logoStuff}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>
      <div className={styles.containerSignUp}>
        <div className={styles.content}>
          <h1>Create an Account</h1>
        </div>
        <form className={styles.form} onSubmit={handleSignUp}>
          {steps === 1 && (
            <>
              <div className={styles.inputFields2}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputFields}>
                <input
                  type="submit"
                  value="Continue"
                  className={styles.login}
                />
              </div>
              <div className={styles.account}>
                <p className={styles.linkSign}>
                  Already have an account? Log In
                </p>
              </div>
              <div className={styles.or}>
                <hr className={styles.thing} />
                <h2>Or</h2>
                <hr className={styles.thing} />
              </div>
              <div className={styles.alternativeSignIn}>
                <button
                  type="button"
                  className={styles.googleSignInButton}
                  onClick={handleGoogleSignIn}
                >
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className={styles.microsoftSignInButton}
                >
                  Sign up with Microsoft
                </button>
                <button
                  type="button"
                  className={styles.googleSignInButton}
                >
                  Sign in with Memes
                </button>
              </div>
            </>
          )}
          {steps === 2 && (
            <>
              <div className={styles.inputFields2}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputFields2}>
                <input
                  type="password"
                  placeholder="Password"
                  name="email"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputFields}>
                <input
                  type="submit"
                  value="Continue"
                  className={styles.login}
                />
              </div>
              <div className={styles.account}>
                <p className={styles.linkSign}>
                  Already have an account? Log In
                </p>
              </div>
              <footer>
               <a href = "">Terms of Service</a>
               <hr></hr>
               <a href = "">Privacy Policy</a>
              </footer>
            </>
          )}

{steps === 3 && (
            <>
              <div className={styles.inputFields2}>
                <input
                  type="text"
                  placeholder="Confirm Email"
                  name="age"
                  value={data.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputFields2}>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputFields}>
                <input
                  type="submit"
                  value="Continue"
                  className={styles.login}
                />
              </div>
              <div className={styles.account}>
                <p
                  className={styles.linkBack}
                  onClick={handleBack} // Handle step navigation
                >
                  Go Back
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;


