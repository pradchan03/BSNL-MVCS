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
} from '@ionic/react';

interface ModalCallProps {
  isOpen: boolean;
  onAddParticipant: (name: string, phoneNumber: string) => void;
  onClose: () => void;
}

const ModalCall: React.FC<ModalCallProps> = ({
  isOpen,
  onAddParticipant,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddParticipant = () => {
    onAddParticipant(name, phoneNumber);
    setName('');
    setPhoneNumber('');
    onClose();
  };

  return (
    <IonModal isOpen={isOpen}>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            type="text"
            value={name}
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Phone Number</IonLabel>
          <IonInput
            type="text"
            value={phoneNumber}
            onIonChange={(e) => setPhoneNumber(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={handleAddParticipant}>
          Add Participant
        </IonButton>
        <IonButton expand="block" color="danger" onClick={onClose}>
          Close
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default ModalCall;
