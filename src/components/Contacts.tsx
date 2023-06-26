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
  // Sample contacts data
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more contacts as needed
  ];

  return (
    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Contacts</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent>
    <IonList>
      <IonListHeader>
        <IonLabel>Contacts</IonLabel>
      </IonListHeader>
      {contacts.map((contact) => (
        <IonItem key={contact.id}>
          <IonLabel>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
    //   </IonContent>
    // </IonPage>
  );
};
export default Contacts;
