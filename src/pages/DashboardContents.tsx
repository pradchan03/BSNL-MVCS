import React from 'react';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

const DashboardContents: React.FC = () => {
  const tabBarHeight = 50;
  return (
    <IonContent style={{ height: `calc(100% - ${tabBarHeight}px)` }}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ongoing/Upcoming Meetings</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Date: [Date and Time]</IonCardSubtitle>
              <IonCardTitle>Meeting 1</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardSubtitle>Topic: [Meeting Topic]</IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Date: [Date and Time]</IonCardSubtitle>
              <IonCardTitle>Meeting 2</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardSubtitle>Topic: [Meeting Topic]</IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Date: [Date and Time]</IonCardSubtitle>
              <IonCardTitle>Meeting 3</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardSubtitle>Topic: [Meeting Topic]</IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <div>
            <IonCardSubtitle>See More...</IonCardSubtitle>
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Previous Meeting</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonCardSubtitle>Date: [Date and Time]</IonCardSubtitle>
          <IonCardSubtitle>Topic: [Meeting Topic]</IonCardSubtitle>
          <div>
            <IonCardSubtitle>Participants:</IonCardSubtitle>
            <IonCardSubtitle>- [Participant 1]</IonCardSubtitle>
            <IonCardSubtitle>- [Participant 2]</IonCardSubtitle>
            <IonCardSubtitle>- [Participant 3]</IonCardSubtitle>
          </div>
          <div>
            <IonCardSubtitle>Notes:</IonCardSubtitle>
            <IonCardSubtitle>[Meeting summary or key points]</IonCardSubtitle>
          </div>
          <div>
            <IonCardSubtitle>Action Items:</IonCardSubtitle>
            <IonCardSubtitle>- [Action Item 1]</IonCardSubtitle>
            <IonCardSubtitle>- [Action Item 2]</IonCardSubtitle>
            <IonCardSubtitle>- [Action Item 3]</IonCardSubtitle>
          </div>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default DashboardContents;
