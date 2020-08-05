import React from 'react';
import Nav from '../components/Nav';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonTitle, IonText, IonContent } from '@ionic/react';
import { FaQuestion } from 'react-icons/fa';

function Error() {
  return (
    <React.Fragment>
      <Nav page="Page not found" />
      <IonContent fullscreen="true">
        <IonCard className="justify-center text-center">

          <IonCardHeader>
            <FaQuestion className="large-icon" />
            <hr className="bg-danger" />
            <IonTitle> Page not found </IonTitle>
          </IonCardHeader>

          <IonCardContent>

            <IonText>
              The requested page was not found on the server
          </IonText>

          </IonCardContent>

        </IonCard>


      </IonContent>
    </React.Fragment>
  )
}

export default Error
