import React, { Component } from 'react'
import Nav from '../components/Nav'
import { IonContent, IonCard, IonCardHeader, IonCardContent, IonList, IonListHeader, IonTitle, IonItemSliding, IonItem, IonItemOptions, IonItemOption } from '@ionic/react'

import Margin from '../components/Margin';

// import favImage from '../magazine/M5.jpg';
import { IoIosAlarm, IoMdPerson } from 'react-icons/io';

class Fav extends Component {



  render() {

    return (
      <>
        <Nav page="Favourites" />
        <IonContent className="fav-page">

            <IonCard>
              <IonCardHeader> The header </IonCardHeader>
              <IonCardContent>
              <IonItemSliding>

                <IonItemOptions side="start">
                  <IonItemOption>
                    <IoIosAlarm />
                    <IoMdPerson />
                  </IonItemOption>
                </IonItemOptions>

                <IonItem>
                  CONTENT
                </IonItem>

              </IonItemSliding>
              </IonCardContent>
            </IonCard>



          <IonCard>
            <IonCardHeader> The header </IonCardHeader>
            <IonCardContent>
              <p> content </p>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader> The header </IonCardHeader>
            <IonCardContent>
              <p> content </p>
            </IonCardContent>
          </IonCard>



        </IonContent>
        <Margin />
      </>
    )
  }
}


export default Fav
