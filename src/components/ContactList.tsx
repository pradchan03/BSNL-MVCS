
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
