// import React, { useEffect, useRef, useState } from 'react';
// import {
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonContent,
//   IonPage,
//   IonButtons,
//   IonButton,
//   IonMenuButton,
//   IonGrid,
//   IonRow,
//   IonCol,
// } from '@ionic/react';
// import SpeakerItem from '../components/SpeakerItem';
// import { Speaker } from '../models/Speaker';
// import { Session } from '../models/Schedule';
// import { connect } from '../data/connect';
// import * as selectors from '../data/selectors';
// import './SpeakerList.scss';

// interface OwnProps {}

// interface StateProps {
//   speakers: Speaker[];
//   speakerSessions: { [key: string]: Session[] };
// }

// interface DispatchProps {}

// interface SpeakerListProps extends OwnProps, StateProps, DispatchProps {}

// const SpeakerList: React.FC<SpeakerListProps> = ({
//   speakers,
//   speakerSessions,
// }) => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <IonPage id="speaker-list">
//       <IonHeader translucent={true}>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonTitle>Contacts</IonTitle>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen={true}>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Contacts</IonTitle>
//           </IonToolbar>
//         </IonHeader>

//         {/* <IonGrid fixed>
//           <IonRow>
//             {speakers.map((speaker) => (
//               <IonCol size="12" size-md="6" key={speaker.id}>
//                 <SpeakerItem
//                   key={speaker.id}
//                   speaker={speaker}
//                   sessions={speakerSessions[speaker.name]}
//                 />
//               </IonCol>
//             ))}
//           </IonRow>
//         </IonGrid> */}
//         <IonGrid className="ion-no-padding">
//           <IonRow>
//             <IonCol>
//               <IonButton expand="block">Add Contact</IonButton>
//             </IonCol>
//             <IonCol>
//               <IonButton expand="block">Add Groups</IonButton>
//             </IonCol>
//             <IonCol>
//               <IonButton fill="outline" expand="block">
//                 Import Contacts
//               </IonButton>
//             </IonCol>
//           </IonRow>
//         </IonGrid>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default connect<OwnProps, StateProps, DispatchProps>({
//   mapStateToProps: (state) => ({
//     speakers: selectors.getSpeakers(state),
//     speakerSessions: selectors.getSpeakerSessions(state),
//   }),
//   component: React.memo(SpeakerList),
// });
import React, { useEffect, useRef, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import SpeakerItem from '../components/SpeakerItem';
import { Speaker } from '../models/Speaker';
import { Session } from '../models/Schedule';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import CreateContactWindow from './CreateContactWindow';
import './SpeakerList.scss';

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface SpeakerListProps extends OwnProps, StateProps, DispatchProps {}

const SpeakerList: React.FC<SpeakerListProps> = ({
  speakers,
  speakerSessions,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };
  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacts</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <IonGrid fixed>
          <IonRow>
            {speakers.map((speaker) => (
              <IonCol size="12" size-md="6" key={speaker.id}>
                <SpeakerItem
                  key={speaker.id}
                  speaker={speaker}
                  sessions={speakerSessions[speaker.name]}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid> */}
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleOpenModal}>
                Add Contact
              </IonButton>
              <CreateContactWindow
                isOpen={showModal}
                onCancel={handleCancelModal}
              />
            </IonCol>
            <IonCol>
              <IonButton expand="block">Add Groups</IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="outline" expand="block">
                Import Contacts
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    speakers: selectors.getSpeakers(state),
    speakerSessions: selectors.getSpeakerSessions(state),
  }),
  component: React.memo(SpeakerList),
});
