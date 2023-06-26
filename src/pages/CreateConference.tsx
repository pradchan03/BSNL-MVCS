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
} from '@ionic/react';
import React, { useState } from 'react';

const CreateConference: React.FC = () => {
  const [timeValue, setTimeValue] = useState<string>('');
  const [durationValue, setDurationValue] = useState<string>('');

  const handleTimeChange = (event: CustomEvent<any>) => {
    setTimeValue(event.detail.value);
  };
  const handleDurationChange = (event: CustomEvent<any>) => {
    setDurationValue(event.detail.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start"></IonMenuButton>
          <IonTitle>Create Conference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList>
        <IonItem>
          <IonInput
            label="Subject"
            labelPlacement="stacked"
            placeholder="Enter text"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Date"
            labelPlacement="stacked"
            type="date"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Time"
            labelPlacement="stacked"
            type="time"
            value={timeValue}
            placeholder="HH:MM"
            onIonChange={handleTimeChange}
          ></IonInput>
        </IonItem>
        {/* <IonItem>
          <IonInput
            label="Duration"
            labelPlacement="stacked"
            type="time"
            display-format="h:mm A"
            picker-format="h:mm A"
            placeholder="HH:MM"
            value={durationValue}
            onIonChange={handleDurationChange}
          ></IonInput>
        </IonItem> */}
        <IonItem>
          <IonSelect
            label="Duration"
            labelPlacement="fixed"
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
        <IonItem>
          {/* <IonInput
            label="Number of Participants"
            labelPlacement="stacked"
          ></IonInput> */}
          <IonSelect
            label="Participants"
            labelPlacement="fixed"
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
        <IonItem>
          <IonSelect
            label="Add Contacts"
            aria-label="Contacts"
            placeholder="Select Contacts"
            multiple={true}
          >
            <IonSelectOption value="C1">Contacts 1</IonSelectOption>
            <IonSelectOption value="C2">Contacts 2</IonSelectOption>
            <IonSelectOption value="C3">Contacts 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonSelect
            label="Add Groups"
            aria-label="Fruit"
            placeholder="Select Groups"
            multiple={true}
          >
            <IonSelectOption value="C1">Group 1</IonSelectOption>
            <IonSelectOption value="C2">Group 2</IonSelectOption>
            <IonSelectOption value="C3">Group 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton expand="block">Schedule</IonButton>
      </IonList>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default CreateConference;
