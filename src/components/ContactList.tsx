import React, { useState } from 'react';
import {
  IonList,
  IonItem,
  IonText,
  IonIcon,
  IonLabel,
  IonButtons,
  IonContent,
  IonAlert,
} from '@ionic/react';
import { call, handLeft, mic, micOff, person, trash } from 'ionicons/icons';

import './InstantConf.css';

interface Participant {
  attendeeName: string;
  addressEntry: {
    address: string;
    type: string;
  }[];
  muted: boolean;
  onCall: boolean;
}

interface ContactListProps {
  participants: Participant[];
  onDeleteParticipant: (index: number) => void;
  onToggleParticipantMute: (index: number) => void;
  onCallAbsentParticipant: (index: number) => void;
}

const inStyles = {
  fontSize: '1.2rem',
  fontWeight: '700',
  position: 'relative',
  top: '10px',
  zIndex: '1',
};

const ContactList: React.FC<ContactListProps> = ({
  participants,
  onDeleteParticipant,
  onToggleParticipantMute,
  onCallAbsentParticipant,
}) => {
  const [selectedParticipantIndex, setSelectedParticipantIndex] =
    useState<number>(-1);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDeleteParticipant = (index: number) => {
    setSelectedParticipantIndex(index);
    setShowDeleteAlert(true);
  };

  const handleConfirmDelete = () => {
    if (selectedParticipantIndex !== -1) {
      onDeleteParticipant(selectedParticipantIndex);
      setSelectedParticipantIndex(-1);
    }
    setShowDeleteAlert(false);
  };

  const handleCancelDelete = () => {
    setSelectedParticipantIndex(-1);
    setShowDeleteAlert(false);
  };

  return (
    <IonContent scrollY={true}>
      <IonText className="ion-padding ion-no-margin" style={inStyles}>
        Participants List
      </IonText>
      <IonList className="ion-margin-top">
        {participants.map((participant, index) => (
          <IonItem key={index}>
            {participant.onCall ? (
              <IonButtons className="ion-padding participant-btn" slot="end">
                <IonIcon
                  color="danger"
                  icon="../public/assets/icon/call_end_FILL1_wght400_GRAD0_opsz48.svg"
                  onClick={() => onCallAbsentParticipant(index)}
                />
              </IonButtons>
            ) : (
              <IonButtons className="ion-padding participant-btn" slot="end">
                <IonIcon
                  color="success"
                  icon={call}
                  onClick={() => onCallAbsentParticipant(index)}
                />
              </IonButtons>
            )}
            {participant.muted ? (
              <IonButtons className="ion-padding participant-btn" slot="end">
                <IonIcon
                  icon={micOff}
                  onClick={() => onToggleParticipantMute(index)}
                />
              </IonButtons>
            ) : (
              <IonButtons className="ion-padding participant-btn" slot="end">
                <IonIcon
                  icon={mic}
                  onClick={() => onToggleParticipantMute(index)}
                />
              </IonButtons>
            )}
            <IonButtons
              className="ion-padding participant-btn"
              slot="end"
              onClick={() => handleDeleteParticipant(index)}
            >
              <IonIcon icon={trash} />
            </IonButtons>
            {showHand ? (
              <IonIcon slot="start" icon={handLeft} color="warning" />
            ) : (
              <IonIcon slot="start" icon={person} />
            )}
            {/* <IonLabel> */}
            <IonText>
              <IonLabel style={{ fontWeight: '600', paddingBottom: '5px' }}>
                {participant.name}
              </IonLabel>
              <IonLabel style={{ fontSize: '12px' }}>
                Phone: {participant.phoneNumber}
              </IonLabel>
            </IonText>
            {/* </IonLabel> */}
          </IonItem>
        ))}
      </IonList>
      <IonAlert
        isOpen={showDeleteAlert}
        header="Confirmation"
        message="Are you sure you want to remove this participant?"
        buttons={[
          {
            text: 'No',
            role: 'cancel',
            handler: handleCancelDelete,
          },
          {
            text: 'Yes',
            handler: handleConfirmDelete,
          },
        ]}
      />
    </IonContent>
  );
};

export default ContactList;
