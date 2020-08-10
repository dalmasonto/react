import React, { useContext, Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

import { FaHome, FaHeart } from "react-icons/fa";
import { IoIosLogIn, IoIosPersonAdd, IoIosPerson, IoIosLogOut } from 'react-icons/io'
import { IonToolbar, IonHeader, IonTitle, IonButtons, IonMenuButton, IonLabel, IonBackButton } from '@ionic/react';

import { Applicationcontext } from '../providers/Application';
import { logout } from '../providers/UserData';

function toggleShow(){
  document.querySelector('.inner-ul').classList.toggle('show');
}



export default class Nav extends Component {

  constructor(props){
    super(props);
  }

  static contextType = Applicationcontext;

  // state = {
  //   loggedIn: false,
  // }

  // async componentDidMount(){
  //   const { loggedIn } = this.context;
  //   // console.log('waiting state', loggedIn);
  //   await this.setState({
  //     loggedIn: JSON.parse(loggedIn),
  //   })
  // }

  render() {

    // const { checkStatus, userLogout } = this.context;
    // const answer = JSON.parse(checkStatus())
    // console.log('sattst', answer)

    // console.log('Nav state ', this.state)

    // const username = answer.username;
    // const loggedInStatus = answer.loggedInStatus;

    // const Logout = () => {
    //   userLogout();
    //   this.setState({
    //     loggedIn: false,
    //   })
    // } 

    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">

            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
              <IonBackButton defaultHref="/home/"></IonBackButton>
            </IonButtons>


            <div className="banner-b">
              <Link className="a" to='/'> <h4> {this.props.page} </h4> </Link>
            </div>

            <IonTitle className="">

              <ul className="inner-ul">

                <li className="links"> <Link className="a" to='/' onClick={toggleShow}> <FaHome className="nav-icons" /> Home </Link> </li>


               
                    <li className="links"> <Link className="a" to='/profile/' onClick={toggleShow}> <IoIosPerson className="nav-icons" /> Profile </Link> </li>

                    <li className="links"> <Link className="a" to='/favourites/' onClick={toggleShow}> <FaHeart className="nav-icons" /> Favourites </Link> </li>

                    <li className="links">  <IoIosLogOut /> Logout </li>

                      <li className="links"> <Link className="a" to='/login/' onClick={toggleShow}> <IoIosLogIn className="nav-icons" /> Login | Sign Up </Link> </li>
              
                
                <li className="links"> <Link className="a" to='/categories/' onClick={toggleShow}> Categories </Link> </li>
              </ul>

            </IonTitle>
          </IonToolbar>
        </IonHeader>
      </>
    )
  }
}

