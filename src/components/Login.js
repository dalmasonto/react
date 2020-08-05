import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdPersonAdd, IoIosPersonAdd, IoIosKey, IoIosLogIn } from 'react-icons/io';
import { IonButton, IonInput, IonLabel, IonItem, IonCard, IonRippleEffect, IonSegment, IonSegmentButton } from '@ionic/react';


function Login() {
  let login_password = useRef()
  let login_username = useRef()

  let state = {
    username: login_username === undefined ? "" : "",
    password: login_password === undefined ? "" : ""
  }
  console.log(state)

  const [ getstate, setstate ] = useState(state);
  console.log(getstate.password)
  const checkSetState = () => {
    state = {
      username: login_username.current,
      password: login_password.current
    }
    setstate(state)
    console.log(getstate.password.value)
  }

  return (
    <div className="container">
      <h2 className="text-center"> Login </h2>
      <div className="">
        <p>Please log in to your account.</p>
        <form className="form">

          <div className="form-row">

            <div className="col-md-6 col-sm-12">
              {/* <label htmlFor="un">Username</label>
              <input id="un" type="text" className="form-control" placeholder="Username" required /> */}

              <IonItem>
                {/* <IoIosKey/> */}
                <IonLabel position="floating"> Username </IonLabel>
                <IonInput type="text" ref={login_username} onIonInput={checkSetState}/>
              </IonItem>

            </div>

            <div className="col-md-6 col-sm-12">
              {/* <label htmlFor="pass">Password</label>
              <input id="pass" type="Password" className="form-control" placeholder=" Enter Password" required /> */}
              <IonItem>
                <IonLabel position="floating"> Password </IonLabel>
                <IonInput type="password" ref={login_password} onIonInput={ checkSetState }/>
              </IonItem>
            </div>

          </div>

          <div className="form-row mt-2">

            <div className="col">
              <IonButton fill="outline" expand="block" disabled={getstate.password === "" && getstate.username === "" ? true : false }>
                <IonRippleEffect />
                <IoIosLogIn className="nav-icon"  slot="start" />
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
  )
}

export default Login
