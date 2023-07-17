import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonSearchbar,
  IonIcon,
  IonLabel,
  IonButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonAlert,
} from '@ionic/react';
import {
  call,
  personAdd,
  peopleCircle,
  volumeMute,
  people,
  chevronUpCircle,
} from 'ionicons/icons';

import ModalCall from './ModalCall';
import ContactList from './ContactList';

import './InstantConf.css'
import { useHistory, useLocation, RouteComponentProps } from 'react-router';
import API from '../api/API.js'

interface LocationState {
  meeting: any;
}

const InstantConf: React.FC<RouteComponentProps<any, any, LocationState>> = ({location}) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [participants, setParticipants] = useState([]);

  const history = useHistory();

  const { meeting } = location.state || {};
  const username = localStorage.getItem('userID')

  useEffect(() =>{
    API.Login(meeting?.conferenceKey.conferenceID , meeting?.chair , "ConferenceID")
    .then((res) => {
      console.log("Join Response: ",res);

      if (res.message === "success") {
        localStorage.setItem('cred',res.token)
        localStorage.setItem("Conference ID:", meeting?.conferenceKey.conferenceID)

          // Start the loop function after successful login
          const loopFunction = setInterval(() => {
            API.ConferenceInfo(res.token, meeting.conferenceKey.conferenceID, 0)
              .then((confInfoRes) => {
                // Process the conference info response here
                console.log("Conference Info: ", confInfoRes)})},10000)

      } else alert("Invalid Credentials");
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong. Please try again.");
    });
    
    },[]); 

  const token = localStorage.getItem('cred')
  const confID = localStorage.getItem('Conference ID:')

  const handleClose = () => {
    setShowAlert(true);
  }

  const handleConfirmClose = () => {
    setShowAlert(false);
    localStorage.setItem('cred',"")
    localStorage.setItem('Conference ID:',"")
    history.goBack();
  };

  const handleCancelClose = () => {
    setShowAlert(false);
  };

  const handleAddGroups = () => {
    console.log('click add groups')
  };

  const handleCallAbsent = () => {
    const updatedParticipants = participants.map((participant) => ({
      ...participant,
      onCall: true,
    }));
    setParticipants(updatedParticipants);
  };

  const handleMuteAll = () => {
    const updatedParticipants = participants.map((participant) => ({
      ...participant,
      muted: true,
    }));
    setParticipants(updatedParticipants);
  };

  const handleCreateSubConf = () => {
    console.log('click createsubconf')
  };


  const handleAddParticipant = (name: string, phoneNumber: number) => {
    const newParticipant = { name, phoneNumber, muted: false };
    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
  };

  const handleDeleteParticipant = (index) => {
    const updatedParticipants = [...participants];
    updatedParticipants.splice(index, 1);
    setParticipants(updatedParticipants);
  }

  const handleToggleParticipantMute = (index: number) => {
    const updatedParticipants = [...participants];
    const participant = updatedParticipants[index];
    participant.muted = !participant.muted;
    setParticipants(updatedParticipants);
  };

  const handleCallParticipantAbsent = (index: number) => {
    const participant = participants[index]
    API.InviteParticipants(token, confID, [{
        name: participant.name,
        phone: participant.phoneNumber
  }] )
  .then((res) => {
    console.log(res);})
  .catch((err) => {
      console.log(err);
      alert("Something went wrong. Please try again.");
    })
    
    const updatedParticipants = [...participants];
    participant.onCall = !participant.onCall;
    setParticipants(updatedParticipants);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={handleClose}>Close</IonButton>
            </IonButtons>
            <IonTitle>{meeting?.subject ? meeting.subject : `${username}'s Conference`}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSearchbar placeholder="Search" />
          <IonButton className='ion-margin' expand='block' onClick={() => setShowModal(true)}>
            <IonIcon slot="start" icon={personAdd} />
            <IonLabel>Add Participants</IonLabel>
          </IonButton>
          {/* Participant List */}
          <ContactList 
            participants={participants} 
            onDeleteParticipant={handleDeleteParticipant}
            onToggleParticipantMute={handleToggleParticipantMute}
            onCallAbsentParticipant= {handleCallParticipantAbsent} />

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
            onClose={() => {setShowModal(false)}}
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
