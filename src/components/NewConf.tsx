//we reach this page after clicking the new fab button
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonNav,
  IonBackButton,
  IonButtons,
  IonListHeader,
} from '@ionic/react';
import SchedulePage from '../pages/SchedulePage';
import Contacts from './Contacts';
import { useHistory } from 'react-router-dom';
const NewConf: React.FC = () => {
  const history = useHistory();
  const handleStartConfClick = () => {
    history.push('/instant-conf');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
          </IonButtons>
          <IonTitle>Create Conference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar placeholder="Search" />

        <IonButton expand="block" onClick={handleStartConfClick}>
          Start Conference
        </IonButton>
        <IonButton expand="block">Schedule in Calendar</IonButton>
        <IonButton expand="block">Create group</IonButton>
        {/* <IonList> */}
        {/* <IonListHeader>
            <IonLabel>Video Games</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem> */}
        <Contacts />
        {/* </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default NewConf;
