import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import logo2 from '../../Image/logo2.png';
import { useHistory, useLocation } from 'react-router';
import App, { userContext } from '../../App';
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';

const Login = () => {
    if (App.length === true) {
        firebase.initializeApp(firebaseConfig);
    }
    const { logIn } = useContext(userContext);
    const [log] = logIn;
    const [errormsg, setErrormsg] = useState();
    const [formHandle, setFormHandle] = useState(true);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();


    //google login
    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                log.email = result.user.email;
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                setErrormsg(errorMessage);
            });

    }
    
    //email/password login
    const onSubmit = data => {
        if (formHandle) {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    log.email = user.email;
                    history.replace(from);
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    setErrormsg(errorMessage);
                });
        }
        if (!formHandle) {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    log.email = user.email;
                    history.replace(from);
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    setErrormsg(errorMessage);
                });
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <div className="highlightPhoto">
                <img src={logo2}></img>
            </div>
            <p style={{ marginTop: '2%', color: 'red' }}>{errormsg}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    formHandle && <div>
                        <input className="inputHighlight" name="nameValue" placeholder="Name" ref={register({ required: true })} />
                        {errors.nameValue && <span style={{ color: 'red' }}>Enter the correct name</span>}<br></br>

                        <input className="inputHighlight" name="email" placeholder="Email" ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                        {errors.email && <span style={{ color: 'red' }}>enter the correct email</span>}   <br />

                        <input className="inputHighlight" name="password" placeholder="Password" ref={register({ required: true })} />
                        {errors.password && <span style={{ color: 'red' }}> enter the correct Password</span>}<br />

                        <input className="inputHighlight" name="confirmPassword" placeholder="confirm Password" ref={register({ required: true })} />
                        {errors.confirmPassword && <span style={{ color: 'red' }}> enter the correct Password</span>}<br />
                        <input id="buttonHighlight" type="submit" />
                        <br></br>
                        <button id="account" onClick={() => setFormHandle(false)}>already has account</button>
                    </div>
                }
                {
                    !formHandle && <div>
                        <input className="inputHighlight" name="email" placeholder="Email" ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                        {errors.email && <span style={{ color: 'red' }}>enter the correct email</span>}   <br />

                        <input className="inputHighlight" name="password" placeholder="Password" ref={register({ required: true })} />
                        {errors.password && <span style={{ color: 'red' }}> enter the correct Password</span>}<br />
                        <input id="buttonHighlight" type="submit" /> <br></br>
                        <button id="account" onClick={() => setFormHandle(true)}> Create account?</button>
                    </div>
                }
            </form>
            <button id="googleSignIn" onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Continue with Google</button>
        </div>
    )
}
export default Login;