import React from 'react'
import { IonCard, IonCardHeader, IonCardContent, IonAvatar, IonCardTitle, IonText, IonItem, IonLabel, IonImg, IonRippleEffect, IonButton, IonFabButton, IonFab } from '@ionic/react'
import Nav from '../components/Nav';

import { Link } from 'react-router-dom';
import { IoIosHeart } from 'react-icons/io';

function HomeBlog({ children, update }) {
  let url = `/news/${update.title}`;
  // let date = update.date.toString().substr(0, 16);
  
  return (
    <>
      <div className="col-md-4 col-sm-12 ion-margin-bottom">
        <IonCard className="ion-no-padding ion-no-margin" color="">
          <IonRippleEffect />
          <IonCardHeader className="overflow">

            <h3> {update.title} </h3>

            <IonItem lines="" color="">
              <IonAvatar className="homeBlogImg" slot="start">
                <img src={update.urlToImage} />
              </IonAvatar>
              <IonLabel>
                
                <p> Author: {update.author} </p>
                <p> Dated: {update.publishedAt} </p>
                {/* <p> Category: { update.category } </p> */}
              </IonLabel>
            </IonItem>

          </IonCardHeader>
          <IonCardContent>

            {children}
            <div className="container">
              <h5 className="w-100 text-center"> Description </h5>
              {update.description}
            </div>

            <IonFab horizontal="end" vertical="bottom" >
              <IonFabButton >
                <IoIosHeart className="nav-icon" />
              </IonFabButton>
            </IonFab>

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
