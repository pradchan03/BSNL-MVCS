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
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonChip,
} from '@ionic/react';
import React, { useState } from 'react';
import './CreateConference.scss'
import { add, closeCircle } from 'ionicons/icons';
import { Value } from 'sass';

const inputStyles = {
  border: '1px solid #d9d9d9',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  textIndent: '12px',
};

  const CreateConference: React.FC = () => {
  
    const [subject, setSubject] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [timeValue, setTimeValue] = useState<string>('');
    const [durationValue, setDurationValue] = useState<string>('');
    const [contacts, setContacts] = useState<string[]>([]);
    const [groups, setGroups] = useState<string[]>([]);
    const [participants, setParticipants] = useState<string[]>([]);
    const [externalParticipantName, setExternalParticipantName] = useState<string>('');
    const [externalParticipantPhone, setExternalParticipantPhone] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    
    const handleScheduleClick = () => {
      console.log('Meeting Scheduled');
    }

    const handleAddContactGroup = () => {
      setParticipants((prevParticipants) => [...prevParticipants, ...contacts, ...groups]);
      setContacts([])
      setGroups([])
    };
      
    const handleAddExternalParticipant = () => {
      setShowAlert(true);
    };

    const handleAlertCancel = () => {
      setShowAlert(false);
      setExternalParticipantName('');
      setExternalParticipantPhone('');
    };

    const handleAlertConfirm = (data: string) => {
      console.log(externalParticipantName)
      if (externalParticipantName && externalParticipantPhone) {
        const participant = `${externalParticipantName} - ${externalParticipantPhone}`;
        setParticipants((prevParticipants) => [...prevParticipants, participant]);
        setExternalParticipantName('');
        setExternalParticipantPhone('');
      }
      setShowAlert(false);
    };

    const handleRemoveParticipant = (index: number) => {
      const updatedParticipants = [...participants];
      updatedParticipants.splice(index, 1);
      setParticipants(updatedParticipants);
    };

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
            value={subject}
            style={inputStyles}
            placeholder="Enter subject"
            onIonChange={(event) => setSubject(event.detail.value! as string)}
          />
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Date</b></IonLabel>
          <IonInput
            value={date}
            style={inputStyles}
            type="date"
            onIonChange={(event) => setDate(event.detail.value! as string)}
          />
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Start Time</b></IonLabel>
          <IonInput
            style={inputStyles}
            type="time"
            value={timeValue}
            placeholder="HH:MM"
            onIonChange={(event) => setTimeValue(event.detail.value! as string)}
          />
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Duration</b></IonLabel>
          <IonSelect
            style={inputStyles}
            placeholder="Select Duration"
            value={durationValue}
            onIonChange={(event) => setDurationValue(event.detail.value! as string)}
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
            style={inputStyles}
            placeholder="Number of Participants"
          >
            <IonSelectOption value="3">3</IonSelectOption>
            <IonSelectOption value="4">4</IonSelectOption>
            <IonSelectOption value="5">5</IonSelectOption>
            <IonSelectOption value="6">6</IonSelectOption>
            <IonSelectOption value="7">7</IonSelectOption>
            <IonSelectOption value="8">8</IonSelectOption>
            <IonSelectOption value="9">9</IonSelectOption>
            <IonSelectOption value="10">10</IonSelectOption>            
          </IonSelect>
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Add Contacts</b></IonLabel>
          <IonSelect
            value={contacts}
            style={inputStyles}
            placeholder="Select Contacts"
            multiple={true}
            onIonChange={(event) => setContacts(event.detail.value!)}
          >
            <IonSelectOption>Neerali</IonSelectOption>
            <IonSelectOption>Krishnali</IonSelectOption>
            <IonSelectOption>Asoon</IonSelectOption>
            <IonSelectOption>Assaai Mon</IonSelectOption>
            <IonSelectOption>Njandu</IonSelectOption>
            <IonSelectOption>Scambot</IonSelectOption>
            <IonSelectOption>Ardraali</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className='item'>
          <IonLabel position='stacked'><b>Add Groups</b></IonLabel>
          <IonSelect
            value={groups}
            style={inputStyles}
            placeholder="Select Groups"
            multiple={true}
            onIonChange={(event) => setGroups(event.detail.value)}
          >
            <IonSelectOption>Group 1</IonSelectOption>
            <IonSelectOption>Group 2</IonSelectOption>
            <IonSelectOption>Group 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol size='6'>
              <IonButton      
                className='add-participants-btn'            
                onClick={handleAddContactGroup}>Add Contacts/<br />Groups</IonButton>
            </IonCol> 
            <IonCol size='6'>        
              <IonButton      
                className='add-participants-btn'                
                onClick={handleAddExternalParticipant}>
                  Add External<br /> Participant
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

           <h2 style={{fontFamily:'system-ui'}}>Participants:</h2>
           <IonContent className='ion-padding participants-box'>
            {participants.map((participant, index) => (
            <IonChip key={index}>
              <IonLabel>{participant}</IonLabel>
              <IonIcon 
              icon={closeCircle}
              onClick={() => handleRemoveParticipant(index)} />
            </IonChip>
           ))}
           </IonContent>
           {/* Alert Box */}
        <IonAlert
          isOpen={showAlert}
          header='Add Participant'
          inputs={[
            {
              name: 'name',
              type: 'text',
              placeholder: 'Name',
              value: externalParticipantName.toString,
              handler: (event) => setExternalParticipantName(event.target.value! as string)
            },
            {
              name: 'phone',
              type: 'text',
              placeholder: 'Phone Number',
              value: externalParticipantPhone,
            },
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: handleAlertCancel,
            },
            {
              text: 'Add',
              handler: (data) => handleAlertConfirm(data),
            },
          ]}
        />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={handleScheduleClick}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default CreateConference;