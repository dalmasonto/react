import React, { useRef, useState, Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { IoMdPersonAdd, IoIosPersonAdd, IoIosKey, IoIosLogIn } from 'react-icons/io';
import { IonButton, IonInput, IonLabel, IonItem, IonCard, IonRippleEffect, IonSegment, IonSegmentButton } from '@ionic/react';
import Nav from '../components/Nav';
import LoginComponent from '../components/Login';
import SignupComponent from '../components/Signup';

import { Applicationcontext } from '../providers/Application';

export default class Login extends Component {
  
  static contextType = Applicationcontext;

  state = {
    actionBtn: 'login',
    redirect: '',
  }

  login = () => {
    this.setState({
      actionBtn: 'login',
      redirect: ''
    })
  }

  signup_ = () => {
    this.setState({
      actionBtn: 'signup',
      redirect: ''
    })
  }


  render() {

    const { loggedIn } = this.context;
    
    const loggedInStatus = JSON.parse(loggedIn)
    if (loggedInStatus.loggedInStatus === true){
      this.setState({
        actionBtn: this.state.actionBtn,
        redirect: '/home/',
      })
      if(this.state.redirect !== ''){
        // return <Redirect to="/home/"/>
        return window.location.href = '/home/';
      }
    }

    return (
      <>
        <Nav page={this.state.actionBtn === 'login' ? 'Login | Sign up' : 'Sign up | Login'} />

        <div className="container">

          <IonSegment mode="md" value={this.state.actionBtn}>

            <IonSegmentButton value="login" onClick={this.login}>
              <IonLabel> Login </IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="signup" onClick={this.signup_}>
              <IonLabel> Sign Up </IonLabel>
            </IonSegmentButton>

          </IonSegment>
        </div>
        {
          this.state.actionBtn === 'login' ? <LoginComponent /> : <SignupComponent />
        }
      </>
    )
  }
}
