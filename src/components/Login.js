import React, { Component, useRef, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { IoMdPersonAdd, IoIosPersonAdd, IoIosKey, IoIosLogIn } from 'react-icons/io';
import { IonButton, IonInput, IonLabel, IonItem, IonCard, IonRippleEffect, IonSegment, IonSegmentButton, IonAlert } from '@ionic/react';

import { Applicationcontext } from '../providers/Application';


export default class Login extends Component {

  constructor(props) {
    super(props)

    this.login_username = React.createRef()
    this.login_password = React.createRef()

    this.state = {
      userdata: {
        username: this.login_username.current === null ? '' : '',
        password: this.login_username.current === null ? '' : ''
      },
      loggedIn: false,
      alertState: false,

    }

  }

  static contextType = Applicationcontext


  render() {

    const { userLogin } = this.context;

    const buttons = [
      {
        text: 'Ok',
        role: 'destructive',
        handler: () => {
          this.setState({
            alertState: false
          });
          console.log('state changedokay');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.setState({
            alertState: false
          });
          console.log('state changed cancel');
        }
      }
    ]


    const checkSetStateuname = () => {
      return this.setState({
        userData: {
          Username: this.login_username.current.value,
          password: this.login_password.current.value
        }
      })
    }

    const checkSetStatepsw = () => {
      return this.setState({
        userData: {
          Username: this.login_username.current.value,
          password: this.login_password.current.value
        }
      })
    }

    const logMeIn = () => {
      const pass = this.login_password.current.value;
      const username = this.login_username.current.value
      const backgroundData = userLogin(username, pass);
      // console.log('Data from the backend ', backgroundData)
      if (backgroundData === 'username does not exist or password mismatch') {
        // this.setState({
        //   ...this.state.userdata,
        //   loggedIn: true,
        // })
        //   if(this.state.loggedIn === true){
        //   window.location.href = '/home/'
        //   // return <Redirect to="/profile/" />
        // }
        console.log(backgroundData)
      }
      else {
        console.log('Error loging in');
        this.setState({
          alertState: true,
        })
      }
    }


    return (
      <>
        <IonAlert isOpen={this.state.alertState}
          message="Login in error"
          cssClass="danger"
          buttons={buttons}
          mode="ios"
          header="Signing in error!!"
          subHeader="Either username does not exist or wrong password"
        />

        <div className="container">
          <h2 className="text-center"> Login </h2>
          <div className="">
            <p>Please log in to your account.</p>
            <form className="form">

              <div className="form-row">

                <div className="col-md-6 col-sm-12">

                  <IonItem>
                    <IonLabel position="floating"> Username </IonLabel>
                    <IonInput type="text" ref={this.login_username} onIonInput={checkSetStateuname} />
                  </IonItem>

                </div>

                <div className="col-md-6 col-sm-12">
                  <IonItem>
                    <IonLabel position="floating"> Password </IonLabel>
                    <IonInput type="password" ref={this.login_password} onIonInput={checkSetStatepsw} />
                  </IonItem>
                </div>

              </div>

              <div className="form-row mt-2">

                <div className="col">
                  <IonButton onClick={logMeIn} fill="outline" expand="block" >
                    {/* disabled={this.state.userdata.password === "" || this.state.userdata.username === "" ? true : true} */}
                    <IonRippleEffect />
                    <IoIosLogIn className="nav-icon" slot="start" />
                Login
              </IonButton>
                </div>

              </div>
              <hr />
              <p> Don't have an account?
            <Link to="/login/"> Sign up <IoIosPersonAdd /> </Link>
              </p>

            </form>
          </div>
        </div>
      </>
    )
  }
}
