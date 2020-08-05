import React from 'react'
import { IonCard, IonCardHeader, IonCardContent, IonAvatar, IonCardTitle, IonText, IonItem, IonLabel, IonImg, IonRippleEffect, IonButton } from '@ionic/react'
import Nav from '../components/Nav';

import { Link } from 'react-router-dom';

function HomeBlog({ children, update }) {
  let url = `/news/${update.title}`;
  
  return (
    <>
      <div className="col-md-4 col-sm-12">
        <IonCard className="ion-no-padding" color="">
          <IonRippleEffect />
          <IonCardHeader className="overflow">

            <IonItem lines="" color="">
              <IonAvatar className="homeBlogImg" slot="start">
                <img src={update.urlToImage} />
              </IonAvatar>
              <IonLabel>
                <IonCardTitle> {update.title} </IonCardTitle>
                <p> Author: {update.author} </p>
                <p> Dated: {update.publishedAt} </p>
                <p> Category: { update.category } </p>
              </IonLabel>
            </IonItem>

          </IonCardHeader>
          <IonCardContent>

            {children}
            <div className="container">
              {update.description}
            </div>

          </IonCardContent>
          <div className="row">
            <div className="col">
              <Link to={url}>
                <IonButton color="primary" fill="clear" expand="block" mode="md"> Read More... </IonButton>
              </Link>
            </div>
          </div>
        </IonCard>
      </div>
    </>
  )
}

export default HomeBlog
