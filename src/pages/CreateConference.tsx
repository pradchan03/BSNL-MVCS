import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenuButton,
  IonList,
  IonItem,
  IonInput,
  IonDatetime,
  IonSelectOption,
  IonSelect,
  IonLabel,
} from '@ionic/react';
import React, { useState } from 'react';
import './CreateConference.scss'

const CreateConference: React.FC = () => {
  const [timeValue, setTimeValue] = useState<string>('');
  const [durationValue, setDurationValue] = useState<string>('');

  const handleTimeChange = (event: CustomEvent<any>) => {
    setTimeValue(event.detail.value);
  };
  const handleDurationChange = (event: CustomEvent<any>) => {
    setDurationValue(event.detail.value);
  };
  const handleScheduleClick = () => {
    console.log('Meeting Scheduled');
  }

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonMenuButton slot="start"></IonMenuButton>
          <IonTitle className='create-conf-title'>Create Conference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={false} className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Create Conference</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Subject</b></IonLabel>
          <IonInput
            style={{backgroundColor:'#fff'}}
            placeholder="Enter subject"
          />
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Date</b></IonLabel>
          <IonInput
            style={{backgroundColor:'#fff'}}
            type="date"
          />
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Time</b></IonLabel>
          <IonInput
            style={{backgroundColor:'#fff'}}
            type="time"
            value={timeValue}
            placeholder="HH:MM"
            onIonChange={handleTimeChange}
          />
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Duration</b></IonLabel>
          <IonSelect
            style={{backgroundColor:'#fff'}}
            placeholder="Select Duration"
            value={durationValue}
            onIonChange={handleDurationChange}
          >
            <IonSelectOption value="15">15 minutes</IonSelectOption>
            <IonSelectOption value="30">30 minutes</IonSelectOption>
            <IonSelectOption value="60">1 hour</IonSelectOption>
            <IonSelectOption value="90">1 hour 30 minutes</IonSelectOption>
            <IonSelectOption value="120">2 hours</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Participants</b></IonLabel>
          <IonSelect
            style={{backgroundColor:'#fff'}}
            placeholder="Number of Participants"
          >
            <IonSelectOption value="1">1</IonSelectOption>
            <IonSelectOption value="2">2</IonSelectOption>
            <IonSelectOption value="3">3</IonSelectOption>
            <IonSelectOption value="4">4</IonSelectOption>
            <IonSelectOption value="5">5</IonSelectOption>
            <IonSelectOption value="6">6</IonSelectOption>
            <IonSelectOption value="7">7</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Add Contacts</b></IonLabel>
          <IonSelect
            style={{backgroundColor:'#fff'}}
            aria-label="Contacts"
            placeholder="Select Contacts"
            multiple={true}
          >
            <IonSelectOption value="C1">Contacts 1</IonSelectOption>
            <IonSelectOption value="C2">Contacts 2</IonSelectOption>
            <IonSelectOption value="C3">Contacts 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Add Groups</b></IonLabel>
          <IonSelect
            style={{backgroundColor:'#fff'}}
            aria-label="Fruit"
            placeholder="Select Groups"
            multiple={true}
          >
            <IonSelectOption value="C1">Group 1</IonSelectOption>
            <IonSelectOption value="C2">Group 2</IonSelectOption>
            <IonSelectOption value="C3">Group 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton expand="block" onClick={handleScheduleClick}>Schedule</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateConference;
