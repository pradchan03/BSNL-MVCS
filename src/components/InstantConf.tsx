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
  IonButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonAlert,
} from '@ionic/react';
import {
  call,
  add,
  personAdd,
  peopleCircle,
  volumeMute,
  people,
  chevronUpCircle,
} from 'ionicons/icons';

import ModalCall from './ModalCall';
import ContactList from './ContactList';

import './InstantConf.css'
import { useHistory } from 'react-router';

const InstantConf: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [participants, setParticipants] = useState([]);

  const history = useHistory();

  const handleClose = () => {
    setShowAlert(true);
  }

  const handleConfirmClose = () => {
    setShowAlert(false);
    history.goBack();
  };

  const handleCancelClose = () => {
    setShowAlert(false);
  };

  const handleAddGroups = () => {
    console.log('click add groups')
  };

  const handleCallAbsent = () => {
    console.log('click call absent')
  };

  const handleMuteAll = () => {
    console.log('click muteall')
  };

  const handleCreateSubConf = () => {
    console.log('click createsubconf')
  };


  const handleAddParticipant = (name: string, phoneNumber: any) => {
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
            <IonButtons slot="end">
              <IonButton onClick={handleClose}>Close</IonButton>
            </IonButtons>
            <IonTitle>User's Conference</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSearchbar placeholder="Search" />
          <IonButton className='ion-margin' expand='block' onClick={() => setShowModal(true)}>
            <IonIcon slot="start" icon={personAdd} />
            <IonLabel>Add Participants</IonLabel>
          </IonButton>
          {/* Participant List */}
          <ContactList participants={participants} />

          {/* Fab Button */}
          <IonFab className='ion-margin' vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton className='fabicon-btn'>
            <IonIcon icon={chevronUpCircle} />
          </IonFabButton>
          <IonFabList side="top">
          <div className="fabicon-labels">
            <div className="fabicon-label">
              <span className='label'>Add Groups</span>
              <IonFabButton onClick={handleAddGroups} className='fabicon-btn'>
                <IonIcon icon={peopleCircle} />
              </IonFabButton>  
            </div>
            <div className="fabicon-label">
              <span className='label'>Call Absent</span>
              <IonFabButton onClick={handleCallAbsent} className='fabicon-btn'>
                <IonIcon icon={call} />
              </IonFabButton>
            </div>
            <div className="fabicon-label">
              <span className='label'>Mute <br />All</span>
              <IonFabButton onClick={handleMuteAll} className='fabicon-btn'>
                <IonIcon icon={volumeMute} />
              </IonFabButton>
            </div>
            <div className="fabicon-label">
              <span className='label'>Create Sub Conf</span>
              <IonFabButton onClick={handleCreateSubConf} className='fabicon-btn'>
                <IonIcon icon={people} />
              </IonFabButton>  
            </div>
          </div>
          </IonFabList>
          </IonFab>
          {/* Modal */}
          <ModalCall
            isOpen={showModal}
            onAddParticipant={handleAddParticipant}
            onClose={() => setShowModal(false)}
          />
          <IonAlert
          isOpen={showAlert}
          header="Confirmation"
          message="Are you sure you want to close this page?"
          buttons={[
            {
              text: 'No',
              role: 'cancel',
              handler: handleCancelClose,
            },
            {
              text: 'Yes',
              handler: handleConfirmClose,
            },
          ]}
        />
        </IonContent>
      </IonPage>
    </>
  );
};

export default InstantConf;
