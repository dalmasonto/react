import React, { Component, useRef } from 'react'
import { Link } from 'react-router-dom';
import { IoMdPersonAdd, IoIosPersonAdd, IoIosKey, IoIosLogIn } from 'react-icons/io';
import { IonButton, IonInput, IonLabel, IonItem, IonCard, IonRippleEffect, IonSegment, IonSegmentButton, IonContent, IonPage } from '@ionic/react';
import HomeBlog from './HomeBlog';
import Home from '../pages/Home';
import Margin from './Margin';

import { Applicationcontext } from '../providers/Application';

class SignupComponent extends Component {
  static contextType = Applicationcontext
  constructor(props){
    super(props)
    this.state = {
      username: '',
      loggedIn: '',
    }

    this.unameRef = React.createRef()
    this.fnRef = React.createRef()
    this.lnRef = React.createRef()
    this.emailRef = React.createRef()
    this.pass1Ref = React.createRef()
    this.pass2Ref = React.createRef()

  }

  render() {

    // const unameRef = React.useRef()
    // const fnRef = React.useRef()
    // const lnRef = React.useRef()
    // const emailRef = React.useRef()
    // const pass1Ref = React.useRef()
    // const pass2Ref = React.useRef()


    const { userSignup } = this.context
   
    const meSignup = (event) => {
      event.preventDefault();
      const userDetails = {
        'first_name': this.fnRef.current.value,
        'last_name': this.lnRef.current.value,
        'username': this.unameRef.current.value,
        'email': this.emailRef.current.value,
        'password': this.pass1Ref.current.value
      }

      console.log('ALL DATA ', userDetails )

      if (this.pass1Ref.current.value !== this.pass2Ref.current.value){
        return;
      }

      userSignup(userDetails);
    }

    return (
      <>
        <IonContent className="ion-margin-bottom">

          <div className="container">

            <h2 className="text-center"> Signup </h2>
            <div className="">
              <p>Please fill in this form to create an account.</p>
              <form className="form">

                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="fn">FirstName</label>
                    <input id="fn" type="text" className="form-control" placeholder="FirstName" ref={this.fnRef} required />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="sn">Last name</label>
                    <input id="ln" type="text" className="form-control" placeholder="SecondName" ref={this.lnRef} required />
                  </div>
                </div>

                <div>
                  <label htmlFor="un">Username</label>
                  <input id="un" type="text" className="form-control" placeholder="Username" ref={this.unameRef} required />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-control" placeholder="email" ref={this.emailRef} required />
                </div>

                <div>
                  <label htmlFor="pass1">Password</label>
                  <input id="pass1" type="Password" className="form-control" placeholder=" Enter Password" ref={this.pass1Ref} required />
                </div>

                <div>
                  <label htmlFor="pass2">Repeat password</label>
                  <input id="pass2" type="Password" className="form-control" placeholder=" Repeat Password" ref={this.pass2Ref} required />
                </div>

                <hr />
                <p>By creating an account you agree to our <a href="JavaScriptVoid(0)">Terms  privacy</a>.</p>

                <div className="form-row">
                  <div className="col">
                    <IonButton expand="block" fill="outline" onClick={meSignup}>
                      <IonRippleEffect />
                      <IoMdPersonAdd />
                      Sign up
                    </IonButton>
                  </div>
                </div>

                <p> Already have an account?
                  <Link to="/login/"> Log in <IoIosLogIn /> </Link>
                </p>

              </form>
            </div>
          </div>
          <Margin />
        </IonContent>


      </>
    )
  }
}

export default SignupComponent