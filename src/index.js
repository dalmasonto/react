import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet, IonReorder } from '@ionic/react'

import Home from './pages/Home';
import Login from './pages/Login';
import Fav from './pages/Fav';
import Error from './pages/Error';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Sorted from './pages/Sorted';
import View from './pages/View';


import Nav from './components/Nav';

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

import Navbar from './components/Nav'

import { IonApp, IonContent, IonSplitPane, IonHeader, IonToolbar, IonMenu, IonTitle, IonPage, IonList, IonItem, IonLabel } from '@ionic/react'
import { IoIosHome, IoIosLogIn, IoIosPersonAdd, IoIosNotifications, IoIosHeart, IoIosPerson } from 'react-icons/io';

import { Applicationprovider } from './providers/Application';

ReactDOM.render(

  <Applicationprovider>
    <IonApp className="" color="dark" dark-theme="" >
      <IonSplitPane contentId="main" when="xs" disabled="true" color="">
        <IonMenu contentId="main" className="new-pane" menuId="avocadoMenu" side="start" type="overlay" mode="ios" color="">
          <IonHeader>
            <IonToolbar>
              <IonTitle> The Blogger </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="menu-center" color="">
            <IonList color="dark">

              <IonItem routerLink="/home" color="">
                <IoIosHome className="nav-icon" slot="start" />
                <IonLabel>
                  Home
                </IonLabel>
              </IonItem>

              <IonItem routerLink="/login" color="">
                <IoIosLogIn className="nav-icon" slot="start" />
                <IonLabel>
                  Login | Sign Up
                </IonLabel>
              </IonItem>

              <IonItem routerLink="/notifications" color="">
                <IoIosNotifications slot="start" className="nav-icon" />
                <IonLabel>
                  Notifications
                </IonLabel>
              </IonItem>

              <IonItem routerLink="/notifications" color="">
                <IoIosHeart slot="start" className="nav-icon" />
                <IonLabel>
                  Favourites
                </IonLabel>
              </IonItem>

              <IonItem routerLink="/profile/" color="">
                <IoIosPerson slot="start" className="nav-icon" />
                <IonLabel>
                  Profile
                </IonLabel>
              </IonItem>

              <IonItem routerLink="/categories" color="">
                <IonReorder slot="start" className="nav-icon" />
                <IonLabel>
                  Categories
            </IonLabel>
              </IonItem>



            </IonList>
          </IonContent>
        </IonMenu>



        <IonReactRouter>
          <IonRouterOutlet id="main">

            <Switch>

              <Route path="/home" component={Home} />
              <Route path="/home/?:segment/" component={Home} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route exact path='/login/' component={Login} />

              <Route exact path='/signup/' component={Signup} />
              <Route exact path='/favorites/' component={Fav} />
              <Route exact path='/notifications/' component={Notifications} />
              <Route exact path='/profile/' component={Profile} />
              <Route exact path='/categories/' component={Sorted} />
              <Route exact path='/news/:view/' component={View} />
              <Route component={Error} />

              <Route component={Error} />

            </Switch>

          </IonRouterOutlet>
        </IonReactRouter>
      </IonSplitPane>
    </IonApp>
  </Applicationprovider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
