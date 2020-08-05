
import React, { Component } from 'react'
import Navbar from '../components/Nav';
import { Applicationcontext } from '../providers/Application';
import Error from '../pages/Error';
import { IonCard, IonCardHeader, IonCardSubtitle, IonImg, IonContent, IonPage, IonCardContent, IonButton } from '@ionic/react';
import Margin from '../components/Margin';

export default class componentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: decodeURIComponent(this.props.match.params.view),
    }
  }

  static contextType = Applicationcontext;

  render() {
    const { getUpdate } = this.context;
    const newsUpdate = getUpdate(this.state.title);
    console.log('The update is', newsUpdate)
    return (
      <>
        {
          newsUpdate === undefined ? (
            <>
              <Error />
            </>
          ) : (
              <>
                <Navbar page={newsUpdate.title} />             

                <IonContent>
                  <IonCard className="ion-no-margin">
                    <IonCardHeader>

                      <h4 className="text-center text-dark">{newsUpdate.title} </h4>
                    </IonCardHeader>
                    <hr style={{ background: '#131419' }} />
                    <IonImg src={newsUpdate.urlToImage} />
                    <IonCardContent>
                      <p> Author: {newsUpdate.author} </p>
                      <p> Dated: {newsUpdate.publishedAt} </p>
                      <h2 className="text-center"> Description </h2> <hr />
                      <div className="container">
                        { newsUpdate.description }
                      </div>
                      <div className="container mt-2">
                        <h1 className="text-center"> Content </h1>
                        <hr />
                        {newsUpdate.content}
                      </div>
                    </IonCardContent>
                  </IonCard>
                  <IonButton expand="block" fill="outline">
                    <a href={newsUpdate.utl}> Read more at {newsUpdate.source.name} </a>
                  </IonButton>
                  <Margin />
                </IonContent>

              </>
            )
        }

      </>
    )
  }
}
