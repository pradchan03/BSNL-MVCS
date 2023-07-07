// import React, { useState } from 'react';
// import {
//   IonModal,
//   IonContent,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonInput,
//   IonButton,
// } from '@ionic/react';

// interface ParticipantDetailsModalProps {
//   showModal: boolean;
//   onClose: () => void;
//   onStartCall: (name: string, phoneNumber: string) => void;
// }

// const ParticipantDetailsModal: React.FC<ParticipantDetailsModalProps> = ({
//   showModal,
//   onClose,
//   onStartCall,
// }) => {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleStartCall = () => {
//     onStartCall(name, phoneNumber);
//   };

//   return (
//     <IonModal isOpen={showModal} onDidDismiss={onClose}>
//       <IonContent>
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Participant Details</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonInput
//           type="text"
//           value={name}
//           placeholder="Name"
//           onIonChange={(e) => setName(e.detail.value!)}
//         />
//         <IonInput
//           type="tel"
//           value={phoneNumber}
//           placeholder="Phone Number"
//           onIonChange={(e) => setPhoneNumber(e.detail.value!)}
//         />
//         <IonButton onClick={handleStartCall}>Add Participant</IonButton>
//       </IonContent>
//     </IonModal>
//   );
// };

// export default ParticipantDetailsModal;

import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
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
  onAddParticipant: (name: string, phoneNumber: any) => void;
  onClose: () => void;
}

const ModalCall: React.FC<ModalCallProps> = ({
  isOpen,
  onAddParticipant,
  onClose,
}) => {

  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>(null);

  const handleAddParticipant = () => {
    onAddParticipant(name, phoneNumber);
    setName('');
    setPhoneNumber(null);
    onClose();
  };

  const inputStyles = {
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textIndent: '12px',
    // Add any other styles as needed
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
            type="text"
            value={phoneNumber}
            onIonChange={(e) => setPhoneNumber(e.detail.value! as any)}
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
