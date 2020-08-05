import React, { Component } from 'react'

import Navbar from '../components/Nav';
import { IonPopover, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { IoIosAdd, IoIosTrash, IoIosAlert, IoIosAperture } from 'react-icons/io';

export default class Sorted extends Component {
  render() {
    return (
      <>
        <Navbar page="Categories" />
        <IonFab horizontal="end" vertical="bottom">
          <IonFabButton>
            <IoIosAdd className="nav-icon" />
          </IonFabButton>

          <IonFabList side="top">
            <IonFabButton>
              <IoIosTrash className="nav-icon" />
            </IonFabButton>

            <IonFabButton>
              <IoIosAlert className="nav-icon" />
            </IonFabButton>

            <IonFabButton>
              <IoIosAperture className="nav-icon" />
            </IonFabButton>

          </IonFabList>

        </IonFab>
      </>
    )
  }
}
