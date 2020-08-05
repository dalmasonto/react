import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdPersonAdd, IoIosPersonAdd, IoIosKey, IoIosLogIn } from 'react-icons/io';
import { IonButton, IonInput, IonLabel, IonItem, IonCard, IonRippleEffect, IonSegment, IonSegmentButton } from '@ionic/react';
import Nav from '../components/Nav';
import Signup from '../components/Signup';
import LoginComponent from '../components/Login';

let action = "login";



// function renderNavState(actionState) {
//  setactionbtn(actionState)
// }

function Login() {
  const [actionbtn, setactionbtn] = useState('login');

  const login = () => {
    setactionbtn('login');
  }

  const signup = () => {
    setactionbtn('signup');
  }

  return (
    <>
      <Nav page={actionbtn === 'login' ? 'Login | Sign up' : 'Sign up | Login'} />

      <div className="container">

        <IonSegment mode="md" value={actionbtn}>

          <IonSegmentButton value="login" onClick={login}>
            <IonLabel> Login </IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="signup" onClick={signup}>
            <IonLabel> Sign Up </IonLabel>
          </IonSegmentButton>

        </IonSegment>
      </div>
      {
        actionbtn === 'login' ? <LoginComponent /> : <Signup />
      }
    </>
  )
}


export default Login
