import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from '@ionic/react';

const Contacts: React.FC = () => {

  const contacts = [
    { id: 1, name: 'Neeraj', phone: '8086241654' },
    { id: 2, name: 'Krishna', phone: '9020255100' },
    // Add more contacts as needed
  ];

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Local Contacts</IonLabel>
      </IonListHeader>
      {contacts.map((contact) => (
        <IonItem key={contact.id}>
          <IonLabel>
            <h2>{contact.name}</h2>
            <p>{contact.phone}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};
export default Contacts;
