import React, { Component } from 'react';

import { IonApp, IonContent, IonSplitPane, IonHeader, IonToolbar, IonMenu, IonTitle, IonPage, IonList, IonItem, IonLabel, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react'
import { IoIosHome, IoIosLogIn, IoIosPersonAdd, IoIosNotifications, IoIosHeart, IoIosPerson, IoIosLogOut, IoIosReorder } from 'react-icons/io';


import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet, IonReorder } from '@ionic/react'

import Home from './pages/Home';
import Login from './pages/Login';
import Fav from './pages/Fav';
import Error from './pages/Error';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Sorted from './pages/Sorted';
import View from './pages/View';



import { Applicationcontext } from './providers/Application';

export default class App extends Component {

  static contextType = Applicationcontext;

  constructor(props) {
    super(props);
  }


  state = {
    loggedIn: false,
  }

  async componentDidMount() {
    this.getStatusUpdate();
    // const { loggedIn } = this.context;
    // await this.setState({
    //   loggedIn: JSON.parse(loggedIn),
    // })
  }


  getStatusUpdate() {
    const { checkStatus, loggedIn } = this.context;
    const userLoginStatus = checkStatus()
    this.setState({
      loggedIn: JSON.parse(loggedIn)
    })
    console.log('NAVBAR STATUSAHK', loggedIn);
  }

  logoutuser = () => {
    const { userLogout } = this.context;
    userLogout();
    this.setState({
      loggedIn: false,
    })
  }


  render() {

    console.log('ION b]nava state', this.state.loggedIn);


    return (
      <>
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


                {
                  this.state.loggedIn.loggedInStatus === true ?
                    <>
                      <IonItem routerLink="/profile/" color="">
                        <IoIosPerson slot="start" className="nav-icon" />
                        <IonLabel>
                          Profile
                        </IonLabel>
                      </IonItem>

                      <IonItem routerLink="/notifications" color="">
                        <IoIosNotifications slot="start" className="nav-icon" />
                        <IonLabel>
                          Notifications
                        </IonLabel>
                      </IonItem>

                      <IonItem routerLink="/favourites/" color="">
                        <IoIosHeart slot="start" className="nav-icon text-danger danger" color="danger" />
                        <IonLabel>
                          Favourites
                        </IonLabel>
                      </IonItem>

                      <IonItem color="">
                        <IoIosLogOut slot="start" className="nav-icon" />
                        <IonGrid className="ion-no-padding ion-no-margin">
                          <IonRow className="ion-no-padding ion-no-margin">
                            <IonCol className="ion-no-padding ion-no-margin">
                              <IonButton fill="solid" expand="block" onclick={this.logoutuser}>
                                
                                <IonLabel className="ion-padding">
                                  Logout
                                </IonLabel>

                              </IonButton>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonItem>


                    </> :
                    <>
                      <IonItem routerLink="/login" color="">
                        <IoIosLogIn className="nav-icon" slot="start" />
                        <IonLabel>
                          Login | Sign Up
                        </IonLabel>
                      </IonItem>

                    </>

                }


                <IonItem routerLink="/categories" color="">
                  <IoIosReorder slot="start" className="nav-icon" />
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

                <Route exact path="/home" component={Home} />
                <Route exact path="/home/?:segment/" component={Home} />
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route exact path='/login/' component={Login} />
                <Route exact path='/favourites/' component={Fav} />
                <Route exact path='/notifications/' component={Notifications} />
                <Route exact path='/profile/' component={Profile} />
                <Route exact path='/categories/' component={Sorted} />
                <Route exact path='/news/:view/' component={View} />
                <Route component={Error} />

              </Switch>

            </IonRouterOutlet>
          </IonReactRouter>
        </IonSplitPane>
      </>
    )
  }
}

