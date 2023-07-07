// import { IonItem } from '@ionic/react';
// import React from 'react';

// const ContactList = () => {
//   return <IonItem>Participants</IonItem>;
// };
// export default ContactList;

// import { IonItem, IonList } from '@ionic/react';
// import React, { useEffect, useState } from 'react';

// interface ContactListProps {
//   addParticipant: (name: string, phoneNumber: string) => void;
// }

// const ContactList: React.FC<ContactListProps> = ({ addParticipant }) => {
//   const [participants, setParticipants] = useState<string[]>([]);

//   useEffect(() => {
//     // Retrieve participant details from local storage on page load
//     const storedParticipants = localStorage.getItem('participants');
//     if (storedParticipants) {
//       setParticipants(JSON.parse(storedParticipants));
//     }
//   }, []);

//   useEffect(() => {
//     // Store participant details in local storage whenever the list is updated
//     localStorage.setItem('participants', JSON.stringify(participants));
//   }, [participants]);

//   const handleAddParticipant = (name: string, phoneNumber: string) => {
//     addParticipant(name, phoneNumber);
//     setParticipants([...participants, name]);
//   };

//   return (
//     <IonList>
//       {participants.map((participant, index) => (
//         <IonItem key={index}>{participant}</IonItem>
//       ))}
//     </IonList>
//   );
// };

// export default ContactList;
import React from 'react';
import { IonList, IonItem, IonText, IonIcon, IonHeader, IonTitle } from '@ionic/react';
import { person } from 'ionicons/icons';
interface ContactListProps {
  participants: { name: string; phoneNumber: number }[];
}

const ContactList: React.FC<ContactListProps> = ({ participants }) => {
  return (
    <IonHeader>
      <IonList>
        {participants.map((participant, index) => (
          <IonItem key={index}>
            <IonIcon slot="start" icon={person}></IonIcon>
            {/* <IonLabel> */}
            <IonText>
              <IonItem>{participant.name}</IonItem>
              <IonItem>{participant.phoneNumber}</IonItem>
            </IonText>
            {/* </IonLabel> */}
          </IonItem>
        ))}
      </IonList>
    </IonHeader>
  );
};

export default ContactList;
