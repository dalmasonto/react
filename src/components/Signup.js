import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdPersonAdd, IoIosPersonAdd, IoIosKey, IoIosLogIn } from 'react-icons/io';
import { IonButton, IonInput, IonLabel, IonItem, IonCard, IonRippleEffect, IonSegment, IonSegmentButton, IonContent, IonPage } from '@ionic/react';
import HomeBlog from './HomeBlog';
import Home from '../pages/Home';
import Margin from './Margin';

function Signup() {
  return (

    <>
      <IonContent className="">

        <div className="container">

          <h2 className="text-center"> Signup </h2>
          <div className="">
            <p>Please fill in this form to create an account.</p>
            <form className="form">

              <div className="form-row">
                <div className="col-md-6 form-group">
                  <label htmlFor="fn">FirstName</label>
                  <input id="fn" type="text" className="form-control" placeholder="FirstName" required />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="sn">SecondName</label>
                  <input id="sn" type="text" className="form-control" placeholder="SecondName" required />
                </div>
              </div>

              <div>
                <label htmlFor="un">Usename</label>
                <input id="un" type="text" className="form-control" placeholder="Username" required />
              </div>

              <div>
                <label htmlFor="pass">Password</label>
                <input id="pass" type="Password" className="form-control" placeholder=" Enter Password" required />
              </div>

              <div>
                <label htmlFor="psw">Repeat password</label>
                <input id="psw-repeat" type="Password" className="form-control" placeholder=" Repeat Password" required />
              </div>

              <div>
                <label htmlFor="mail">Email</label>
                <input id="mail" type="email" className="form-control" placeholder="email" required />
              </div>

              <hr />
              <p>By creating an account you agree to our <a href="JavaScriptVoid(0)">Terms  privacy</a>.</p>

              <div className="form-row">
                <div className="col">
                  <IonButton expand="block" fill="outline">
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

export default Signup
