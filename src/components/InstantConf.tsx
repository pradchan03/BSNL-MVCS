// import React from 'react';
// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonToolbar,
//   IonButtons,
//   IonBackButton,
//   IonTitle,
//   IonSearchbar,
//   IonIcon,
//   IonLabel,
//   IonSegment,
//   IonSegmentButton,
//   IonSelectOption,
// } from '@ionic/react';
// import {
//   call,
//   heart,
//   pin,
//   personAdd,
//   peopleCircle,
//   personRemove,
//   volumeMute,
//   people,
// } from 'ionicons/icons';

// const InstantConf: React.FC = () => {
//   return (
//     <>
//       <IonPage>
//         <IonHeader>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonBackButton defaultHref="/" />
//             </IonButtons>
//             <IonTitle>Start Conference</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonSearchbar placeholder="Search" />
//           <IonSegment value="functions">
//             <IonSegmentButton value="call">
//               <IonLabel>Call</IonLabel>
//               <IonIcon icon={personAdd}></IonIcon>
//             </IonSegmentButton>
//             <IonSegmentButton value="heart">
//               <IonLabel>Add Groups</IonLabel>
//               <IonIcon icon={peopleCircle}></IonIcon>
//             </IonSegmentButton>
//             <IonSegmentButton value="absent">
//               <IonLabel>Call Absent</IonLabel>
//               <IonIcon icon={call}></IonIcon>
//             </IonSegmentButton>
//             <IonSegmentButton value="mute">
//               <IonLabel>Mute All</IonLabel>
//               <IonIcon icon={volumeMute}></IonIcon>
//             </IonSegmentButton>
//             <IonSegmentButton value="subconf">
//               <IonLabel> Create Sub</IonLabel>
//               <IonLabel>Conference</IonLabel>
//               <IonIcon icon={people}></IonIcon>
//             </IonSegmentButton>
//           </IonSegment>
//         </IonContent>
//       </IonPage>
//     </>
//   );
// };

// export default InstantConf;

// import React, { useState } from 'react';
// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonToolbar,
//   IonButtons,
//   IonBackButton,
//   IonTitle,
//   IonSearchbar,
//   IonIcon,
//   IonLabel,
//   IonSegment,
//   IonSegmentButton,
//   IonModal,
//   IonButton,
//   IonInput,
// } from '@ionic/react';
// import {
//   call,
//   personAdd,
//   peopleCircle,
//   volumeMute,
//   people,
// } from 'ionicons/icons';
// import ContactList from './ContactList';

// const InstantConf: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleCallButtonClick = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   const handleStartCall = () => {
//     // Handle the start call action with the entered name and phone number
//     console.log('Name:', name);
//     console.log('Phone number:', phoneNumber);

//     // Perform any additional actions as needed

//     // Close the modal
//     setShowModal(false);
//   };

//   return (
//     <>
//       <IonPage>
//         <IonHeader>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonBackButton defaultHref="/" />
//             </IonButtons>
//             <IonTitle>Start Conference</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonSearchbar placeholder="Search" />
//           <IonSegment value="functions">
//             <IonSegmentButton value="call" onClick={handleCallButtonClick}>
//               <IonLabel>Call</IonLabel>
//               <IonIcon icon={personAdd} />
//             </IonSegmentButton>
//             <IonSegmentButton value="heart">
//               <IonLabel>Add Groups</IonLabel>
//               <IonIcon icon={peopleCircle} />
//             </IonSegmentButton>
//             <IonSegmentButton value="absent">
//               <IonLabel>Call Absent</IonLabel>
//               <IonIcon icon={call} />
//             </IonSegmentButton>
//             <IonSegmentButton value="mute">
//               <IonLabel>Mute All</IonLabel>
//               <IonIcon icon={volumeMute} />
//             </IonSegmentButton>
//             <IonSegmentButton value="subconf">
//               <IonLabel>Create Sub</IonLabel>
//               <IonLabel>Conference</IonLabel>
//               <IonIcon icon={people} />
//             </IonSegmentButton>
//           </IonSegment>
//           <ContactList />
//         </IonContent>
//       </IonPage>

//       <IonModal isOpen={showModal} onDidDismiss={handleModalClose}>
//         <IonContent>
//           <IonHeader>
//             <IonToolbar>
//               <IonTitle>Participant Details</IonTitle>
//             </IonToolbar>
//           </IonHeader>
//           <IonInput
//             type="text"
//             value={name}
//             placeholder="Name"
//             onIonChange={(e) => setName(e.detail.value!)}
//           />
//           <IonInput
//             type="number"
//             value={phoneNumber}
//             placeholder="Phone Number"
//             onIonChange={(e) => setPhoneNumber(e.detail.value!)}
//           />
//           <IonButton onClick={handleStartCall}>Add Participant</IonButton>
//         </IonContent>
//       </IonModal>
//     </>
//   );
// };

// export default InstantConf;

// import React, { useState } from 'react';
// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonToolbar,
//   IonButtons,
//   IonBackButton,
//   IonTitle,
//   IonSearchbar,
//   IonIcon,
//   IonLabel,
//   IonSegment,
//   IonSegmentButton,
//   IonButton,
// } from '@ionic/react';
// import {
//   call,
//   personAdd,
//   peopleCircle,
//   volumeMute,
//   people,
// } from 'ionicons/icons';
// import ContactList from './ContactList';
// import ParticipantDetailsModal from './ParticipantDetailsModal';

// const InstantConf: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleCallButtonClick = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   const handleStartCall = (name: string, phoneNumber: string) => {
//     // Handle the start call action with the entered name and phone number
//     console.log('Name:', name);
//     console.log('Phone number:', phoneNumber);

//     // Perform any additional actions as needed

//     // Close the modal
//     setShowModal(false);
//   };

//   return (
//     <>
//       <IonPage>
//         <IonHeader>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonBackButton defaultHref="/" />
//             </IonButtons>
//             <IonTitle>Start Conference</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <IonSearchbar placeholder="Search" />
//           <IonSegment value="functions">
//             <IonSegmentButton value="call" onClick={handleCallButtonClick}>
//               <IonLabel>Call</IonLabel>
//               <IonIcon icon={personAdd} />
//             </IonSegmentButton>
//             <IonSegmentButton value="heart">
//               <IonLabel>Add Groups</IonLabel>
//               <IonIcon icon={peopleCircle} />
//             </IonSegmentButton>
//             <IonSegmentButton value="absent">
//               <IonLabel>Call Absent</IonLabel>
//               <IonIcon icon={call} />
//             </IonSegmentButton>
//             <IonSegmentButton value="mute">
//               <IonLabel>Mute All</IonLabel>
//               <IonIcon icon={volumeMute} />
//             </IonSegmentButton>
//             <IonSegmentButton value="subconf">
//               <IonLabel>Create Sub</IonLabel>
//               <IonLabel>Conference</IonLabel>
//               <IonIcon icon={people} />
//             </IonSegmentButton>
//           </IonSegment>
//           <ContactList />
//         </IonContent>
//       </IonPage>

//       <ParticipantDetailsModal
//         showModal={showModal}
//         onClose={handleModalClose}
//         onStartCall={handleStartCall}
//       />
//     </>
//   );
// };

// export default InstantConf;

import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonSearchbar,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonList,
  IonItem,
  IonAvatar,
  IonText,
} from '@ionic/react';
import {
  call,
  heart,
  pin,
  personAdd,
  peopleCircle,
  personRemove,
  volumeMute,
  people,
  person,
} from 'ionicons/icons';

import ModalCall from './ModalCall';
import ContactList from './ContactList';

const InstantConf: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [participants, setParticipants] = useState<
    { name: string; phoneNumber: string }[]
  >([]);

  const handleAddParticipant = (name: string, phoneNumber: string) => {
    const newParticipant = { name, phoneNumber };
    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Start Conference</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSearchbar placeholder="Search" />
          <IonSegment value="functions">
            <IonSegmentButton value="call" onClick={() => setShowModal(true)}>
              <IonLabel>Call</IonLabel>
              <IonIcon icon={personAdd}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="heart">
              <IonLabel>Add Groups</IonLabel>
              <IonIcon icon={peopleCircle}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="absent">
              <IonLabel>Call Absent</IonLabel>
              <IonIcon icon={call}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="mute">
              <IonLabel>Mute All</IonLabel>
              <IonIcon icon={volumeMute}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="subconf">
              <IonLabel> Create Sub</IonLabel>
              <IonLabel>Conference</IonLabel>
              <IonIcon icon={people}></IonIcon>
            </IonSegmentButton>
          </IonSegment>

          {/* Participant List */}
          <ContactList participants={participants} />

          {/* Modal */}
          <ModalCall
            isOpen={showModal}
            onAddParticipant={handleAddParticipant}
            onClose={() => setShowModal(false)}
          />
        </IonContent>
      </IonPage>
    </>
  );
};

export default InstantConf;
