import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

interface ModalCallProps {
  isOpen: boolean;
  onAddParticipant: (name: string, phoneNumber: number, smsPhoneNumber:any, emailId:string) => void;
  onClose: () => void;
}

const ModalCall: React.FC<ModalCallProps> = ({
  isOpen,
  onAddParticipant,
  onClose,
}) => {

  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>(null);
  const [smsPhoneNumber, setSmsPhoneNumber] = useState<number>(null);
  const [emailId, setEmailId] = useState<string>('');


  const handleAddParticipant = () => {
    onAddParticipant(name, phoneNumber,smsPhoneNumber,emailId);
    setName('');
    setPhoneNumber(null);
    setSmsPhoneNumber(null);
    setEmailId('');
    onClose();
  };

  const inputStyles = {
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textIndent: '12px',
  };

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Participant</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position="stacked"><b>Name</b></IonLabel>
          <IonInput
            style={inputStyles}
            type="text"
            value={name}
            onIonChange={(e) => setName(e.detail.value! as string)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked"><b>Phone Number</b></IonLabel>
          <IonInput
            style={inputStyles}
            type='tel'
            value={phoneNumber}
            onIonChange={(e) => setPhoneNumber(e.detail.value! as number)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked"><b>SMS Phone Number</b></IonLabel>
          <IonInput
            style={inputStyles}
            type="tel"
            value={smsPhoneNumber}
            onIonChange={(e) => setSmsPhoneNumber(e.detail.value! as number)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked"><b>Email Id</b></IonLabel>
          <IonInput
            style={inputStyles}
            type="email"
            value={emailId}
            onIonChange={(e) => setEmailId(e.detail.value! as string)}
          ></IonInput>
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleAddParticipant}>
                Add Participant
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" color="danger" onClick={onClose}>
                Close
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default ModalCall;
