import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config.js';

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { globalContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig)

const Account = () => {
    const googleProvider = new GoogleAuthProvider();
    document.title = 'doctor HM/account'
    const [signUp, setSignUp] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    })
    // context api
    const [loggedInUser, setLoggedInUser] = useContext(globalContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // signIn with google start
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);
                // console.log(displayName, email, photoURL)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }
    // signIn with google end


    // handle blur start
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
            const passwordLength = event.target.value.length > 6;
            const passwordValidation = /\d{1}/.test(event.target.value);
            isFieldValid = passwordLength && passwordValidation
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
        // console.log(`${event.target.name} = ${event.target.value}` )
    }

    // form submit start
    const handleFormSubmit = (e) => {
        // create user
        if (signUp && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        // signIn user
        if (!signUp && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log(res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                });
        }
        e.preventDefault();
    }
    // form submit end


    // handle signUp & login start
    const handleSignUp = () => {
        setSignUp(!signUp)
    }
    const handleLogin = () => {
        setSignUp(!signUp)
    }
    // handle signUp & login end


    // update user name start
    const updateUserName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('user name update successfully')
        }).catch((error) => {
            console.log(error)
        });
    }
    // update user name end
    return (
        <div>
            <div className="login container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 shadow p-5">

                    {/* form start */}
                    <form onSubmit={handleFormSubmit}>
                        <legend>
                            {
                                signUp ?
                                    <h1 className="text-center mb-5">Sign Up</h1> :
                                    <h1 className="text-center mb-5">Login</h1>
                            }
                        </legend>

                        <div className="form-group mb-3">
                            {
                                signUp && <input type="text" className="form-control py-2" name="name" placeholder="Enter Name" onBlur={handleBlur} required />
                            }
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control py-2" name="email" placeholder="Enter Email" onBlur={handleBlur} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control py-2" name="password" placeholder="Enter Password" onBlur={handleBlur} required />
                        </div>
                        <div className="form-group">
                            {
                                signUp ?
                                    <input type="submit" className="btn btn-primary btn-block py-2 text-capitalize" value="signUp" /> :
                                    <input type="submit" className="btn btn-primary btn-block py-2 text-capitalize" value="login" />
                            }

                        </div>
                    </form>
                    {/* form end */}

                    {/* toggle signUp & login button start */}
                    <div>
                        {
                            signUp ?
                                <div className="text-center">
                                    <span className="text-capitalize text-success">all ready have an account?</span>
                                    <span className="btn ms-3" style={{cursor:'pointer'}} onClick={handleLogin}>Login</span>
                                </div> :
                                <div className="text-center">
                                    <span className="text-capitalize text-danger">don't have an account?</span>
                                    <span className="btn ms-3" style={{cursor:'pointer'}} onClick={handleSignUp}>signUp</span>
                                </div>
                        }
                    </div>

                    {/* show error & success message start */}
                    <p className="text-center text-danger text-capitalize mt-4">{user.error}</p>
                    {
                        user.success && <p className="text-center text-success text-capitalize mt-4">user {signUp ? "created successfully" : "loggedIn successfully"}</p>
                    }


                    {/* continue with google btn start */}
                    <div className='text-center'>
                        <p className='mb-0'>------------- or -----------</p>
                        <button className="btn btn-dark btn-block py-2 text-capitalize mt-4 px-3" onClick={handleGoogleSignIn}>continue with google</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Account;