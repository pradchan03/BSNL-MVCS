import React, { useEffect, useRef, useState } from 'react';
import { IonModal, IonButton, IonContent, IonInput, IonItem, IonLabel, IonCard, IonCardContent, createAnimation, IonHeader, IonToolbar, IonTitle, IonButtons, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import './ConferenceTemplates.scss'

interface DetailsModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onSave: (subject: string, duration: string, num: string, addContacts: string) => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onCancel, onSave }) => {

  const inputStyles = {
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textIndent: '12px',
    // Add any other styles as needed
  };

  const [subject, setSubject] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [num, setNum] = useState<string>('')
  const [addContacts, setAddContacts] = useState<string>('')
  
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
    onSave(subject, duration, num, addContacts,);
    onCancel();
  };

  return (
    <IonModal ref={modal} isOpen={isOpen}  enterAnimation={enterAnimation} leaveAnimation={leaveAnimation}>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Create Template</IonTitle>
                <IonButtons slot="end">
                    <IonButton onClick={onCancel}>Close</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
            <IonItem>
            <IonLabel position="stacked"><b>Subject</b></IonLabel>
            <IonInput style={inputStyles} className='large-input' type="text" placeholder='Template name' value={subject} onIonInput={(event) => setSubject(event.detail.value! as string)} />
            </IonItem>
            <IonItem className='item'>
          <IonLabel position='stacked'><b>Duration</b></IonLabel>
          <IonSelect
            style={inputStyles}
            placeholder="Select duration"
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
            <IonLabel position='stacked'><b>Participants</b></IonLabel>
            <IonSelect
                style={inputStyles}
                placeholder="Number of Participants"
                value={num} onIonChange={(event) => setNum(event.detail.value! as string)}
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
            <IonItem className='item'>
            <IonLabel position='stacked'><b>Add Contacts</b></IonLabel>
            <IonSelect
                style={inputStyles}
                value={addContacts} onIonChange={(event) => setAddContacts(event.detail.value! as string)}
                placeholder="Select contacts"
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
                  <IonButton className='template-btn' expand="block" onClick={handleSave}>
                  Save
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton className='template-btn' expand="block" color="danger" onClick={onCancel}>
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
