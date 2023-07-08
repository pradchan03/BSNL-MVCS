import React, { useState } from 'react';
import { IonList, IonItem, IonText, IonIcon, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonContent } from '@ionic/react';
import { call, mic, micOff, person, trash } from 'ionicons/icons';

interface ContactListProps {
  participants: { name: string; phoneNumber: number }[];
  onDeleteParticipant: (index: number) => void;
}

const inStyles = {
  fontSize: '1.2rem',
  fontWeight: '700',
  position: 'relative',
  top: '10px',
  zIndex: '1'
}

const ContactList: React.FC<ContactListProps> = ({ participants, onDeleteParticipant }) => {

  const [activeCallIconIndexes, setActiveCallIconIndexes] = useState<number[]>([]);
  const [activeMuteIconIndexes, setActiveMuteIconIndexes] = useState<number[]>([]);

  const handleCallParticipant = (index: number) => {
    if (!activeCallIconIndexes.includes(index)) {
      setActiveCallIconIndexes(prevIndexes => [...prevIndexes, index]);
    }
  }

  const handleEndCallParticipant = (index: number) => {
    setActiveCallIconIndexes(prevIndexes => prevIndexes.filter(idx => idx !== index));
  }

  const handleMute = (index: number) => {
    if (!activeMuteIconIndexes.includes(index)) {
      setActiveMuteIconIndexes(prevIndexes => [...prevIndexes, index]);
    }  }

  const handleUnmute = (index: number) => {
    setActiveMuteIconIndexes(prevIndexes => prevIndexes.filter(idx => idx !== index));
  }

  const handleDeleteParticipant = (index: number) => {
    onDeleteParticipant(index);
  }

  return (    
    <IonContent scrollY={true}>
      <IonText className='ion-padding ion-no-margin' style={inStyles}>Participants List</IonText>
      <IonList className='ion-margin-top'>
        {participants.map((participant, index) => (
          <IonItem key={index}>
            {activeCallIconIndexes.includes(index)?
            (<IonButtons className='ion-padding' slot='end'>
              <IonIcon color='danger' style={{fontSize:'1.5rem'}} icon='../public/assets/icon/call_end_FILL1_wght400_GRAD0_opsz48.svg' onClick={() => handleEndCallParticipant(index)} />
            </IonButtons>):
            (<IonButtons className='ion-padding' style={{padding:'20px'}} slot='end'>
              <IonIcon color='success' icon={call} onClick={() => handleCallParticipant(index)} />
            </IonButtons>)}
            {activeMuteIconIndexes.includes(index)?
            <IonButtons className='ion-padding' slot='end'>
              <IonIcon icon={micOff} onClick={() => handleUnmute(index)} />
            </IonButtons>:
            <IonButtons className='ion-padding' slot='end'>
              <IonIcon icon={mic} onClick={() => handleMute(index)} />
            </IonButtons>}
            <IonButtons className='ion-padding' slot='end' onClick={() => handleDeleteParticipant(index)}>
              <IonIcon icon={trash} />
            </IonButtons>
            <IonIcon slot="start" icon={person}></IonIcon>
            {/* <IonLabel> */}
            <IonText>
              <IonLabel style={{fontWeight:'600', paddingBottom:'5px'}}>{participant.name}</IonLabel>
              <IonLabel style={{fontSize:'12px'}}>Phone: {participant.phoneNumber}</IonLabel>
            </IonText>
            {/* </IonLabel> */}
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default ContactList;
