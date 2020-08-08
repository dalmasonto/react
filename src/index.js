import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import './styles/bootstrap.css';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { IonApp, IonContent, IonSplitPane, IonHeader, IonToolbar, IonMenu, IonTitle, IonPage, IonList, IonItem, IonLabel } from '@ionic/react'
import { IoIosHome, IoIosLogIn, IoIosPersonAdd, IoIosNotifications, IoIosHeart, IoIosPerson } from 'react-icons/io';

import { Applicationprovider } from './providers/Application';

ReactDOM.render(

  <Applicationprovider>
    <IonApp className="" color="dark" dark-theme="" >
      <App />
    </IonApp>
  </Applicationprovider>

  ,
  document.getElementById('root')
);

serviceWorker.register();
