import React, { useEffect, useRef, useState } from 'react';
import {
  IonModal,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  createAnimation,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

import API from '../api/API.js';

import './ConferenceTemplates.scss';

interface DetailsModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onCancel }) => {
  const inputStyles = {
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textIndent: '12px',
  };

  const [subject, setSubject] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [num, setNum] = useState<string>('');
  const [addContacts, setAddContacts] = useState<string>('');

  const modal = useRef<HTMLIonModalElement>(null);

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction('reverse');
  };

  useEffect(() => {
    if (isOpen) {
      setSubject('');
      setDuration('');
      setNum('');
      setAddContacts('');
    }
  }, [isOpen]);

  const handleSave = () => {
    const durationInt = parseInt(duration);
    const participants = parseInt(num, 10);
    console.log(participants);

    const durationInMilliseconds = durationInt * 60 * 1000;

    function getCookie(cookieName: any) {
      const cookieString = document.cookie;
      const cookies = cookieString.split(':');

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
          return cookie.substring(cookieName.length + 1);
        }
      }

      return null; // Return null if the cookie is not found
    }

    var token = getCookie('user');

    API.createconferencetemplate(
      token,
      0,
      durationInMilliseconds,
      participants,
      48,
      'en_US',
      subject
    )
      .then((res: any) => {
        console.log(res);
      })

      .catch((err: any) => {
        console.log(err);
        alert('Error in creating template. Please try again.');
      });
    onCancel();
  };

  return (
    <IonModal
      ref={modal}
      isOpen={isOpen}
      enterAnimation={enterAnimation}
      leaveAnimation={leaveAnimation}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Contact</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onCancel}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">
            <b>Name</b>
          </IonLabel>
          <IonInput
            style={inputStyles}
            className="large-input"
            type="text"
            placeholder="Name"
            value={subject}
            onIonInput={(event) => setSubject(event.detail.value! as string)}
          />
        </IonItem>
        <IonItem className="item">
          <IonLabel position="stacked">
            <b>Number</b>
          </IonLabel>
          <IonSelect
            style={inputStyles}
            placeholder="Number"
            value={duration}
            onIonChange={(event) => setDuration(event.detail.value! as string)}
          >
            <IonSelectOption value="15">15 minutes</IonSelectOption>
            <IonSelectOption value="30">30 minutes</IonSelectOption>
            <IonSelectOption value="60">1 hour</IonSelectOption>
            <IonSelectOption value="90">1 hour 30 minutes</IonSelectOption>
            <IonSelectOption value="120">2 hours</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            <b>SMS Notification Number</b>
          </IonLabel>
          <IonSelect
            style={inputStyles}
            placeholder="SMS Notification Number"
            value={num}
            onIonChange={(event) => setNum(event.detail.value! as string)}
          >
            <IonSelectOption value="1">1</IonSelectOption>
            <IonSelectOption value="2">2</IonSelectOption>
            <IonSelectOption value="3">3</IonSelectOption>
            <IonSelectOption value="4">4</IonSelectOption>
            <IonSelectOption value="5">5</IonSelectOption>
            <IonSelectOption value="6">6</IonSelectOption>
            <IonSelectOption value="7">7</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className="item">
          <IonLabel position="stacked">
            <b>Email</b>
          </IonLabel>
          <IonSelect
            style={inputStyles}
            value={addContacts}
            onIonChange={(event) =>
              setAddContacts(event.detail.value! as string)
            }
            placeholder="Email"
            multiple={true}
          >
            <IonSelectOption value="C1">Contacts 1</IonSelectOption>
            <IonSelectOption value="C2">Contacts 2</IonSelectOption>
            <IonSelectOption value="C3">Contacts 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className="item">
          <IonLabel position="stacked">
            <b>Group</b>
          </IonLabel>
          <IonSelect
            style={inputStyles}
            value={addContacts}
            onIonChange={(event) =>
              setAddContacts(event.detail.value! as string)
            }
            placeholder="Group"
            multiple={true}
          >
            <IonSelectOption value="C1">Contacts 1</IonSelectOption>
            <IonSelectOption value="C2">Contacts 2</IonSelectOption>
            <IonSelectOption value="C3">Contacts 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                className="template-btn"
                expand="block"
                onClick={handleSave}
              >
                Save
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                className="template-btn"
                expand="block"
                color="danger"
                onClick={onCancel}
              >
                Cancel
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default DetailsModal;
