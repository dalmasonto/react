import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

import { FaHome, FaHeart } from "react-icons/fa";
import { IoIosLogIn, IoIosPersonAdd, IoIosPerson } from 'react-icons/io'
import { IonToolbar, IonHeader, IonTitle, IonButtons, IonMenuButton, IonLabel, IonBackButton } from '@ionic/react';

function toggleShow(){
  document.querySelector('.inner-ul').classList.toggle('show');
}

function Nav({page, children}) {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">

          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
            <IonBackButton defaultHref="/home/"></IonBackButton>
          </IonButtons>


          <div className="banner-b">
            <Link className="a" to='/'> <h4> {page} </h4> </Link>
          </div>

          <IonTitle className="">
            
            <ul className="inner-ul">

              <li className="links"> <Link className="a" to='/' onClick={toggleShow}> <FaHome className="nav-icons" /> Home </Link> </li>

              <li className="links"> <Link className="a" to='/favorites/' onClick={toggleShow}> <FaHeart className="nav-icons" /> Favourites </Link> </li>

              <li className="links"> <Link className="a" to='/login/' onClick={toggleShow}> <IoIosLogIn className="nav-icons" /> Login | Sign Up </Link> </li>


              <li className="links"> <Link className="a" to='/profile/' onClick={toggleShow}> <IoIosPerson className="nav-icons" /> Profile </Link> </li>

              <li className="links"> <Link className="a" to='/categories/' onClick={toggleShow}> Categories </Link> </li>

            </ul>

          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  )
}

export default Nav
