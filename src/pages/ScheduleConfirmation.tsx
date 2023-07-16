import {
  IonText,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from '@ionic/react';
import './ScheduleConfirmation.scss';
const ScheduleConfirmation: React.FC = () => {
  return (
    <>
      {/* <IonPage> */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
          </IonButtons>
          <IonTitle>Metting Confirmation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="custom-card">
          <IonCardHeader>
            <IonCardTitle>Conference created successfully!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            The conference notification has been sent to you via SMS or email.
          </IonCardContent>
        </IonCard>
        <div>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonLabel className="account-labels"> Subject </IonLabel>
              </IonCol>
              <IonCol size="8">
                <IonText style={{ fontWeight: '600' }}>fjskfs</IonText>
              </IonCol>
              {/* <IonCol size="4">
                  <IonLabel className="account-labels"> Date </IonLabel>
                </IonCol>
                <IonCol size="8">
                  <IonText style={{ fontWeight: '600' }}>date here </IonText>
                </IonCol>
                <IonCol size="4">
                  <IonLabel className="account-labels"> Start time </IonLabel>
                </IonCol>
                <IonCol size="8">
                  <IonText style={{ fontWeight: '600' }}>start time </IonText>
                </IonCol>
                <IonCol size="4">
                  <IonLabel className="account-labels">
                    {' '}
                    Conference ID{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="8">
                  <IonText style={{ fontWeight: '600' }}>ID </IonText>
                </IonCol>
                <IonCol size="4">
                  <IonLabel className="account-labels">
                    {' '}
                    Access number{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="8">
                  <IonText style={{ fontWeight: '600' }}>
                    Access Number{' '}
                  </IonText>
                </IonCol>
                <IonCol size="4">
                  <IonLabel className="account-labels">
                    {' '}
                    Chairperson Password{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="8">
                  <IonText style={{ fontWeight: '600' }}>
                    chairperson password{' '}
                  </IonText>
                </IonCol>
                <IonCol size="4">
                  <IonLabel className="account-labels">
                    {' '}
                    Guest Password{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="8">
                  <IonText style={{ fontWeight: '600' }}>
                    guest password{' '}
                  </IonText>
                </IonCol>
                <IonCol size="4">
                  <IonLabel className="account-labels"> Creator </IonLabel>
                </IonCol>
                <IonCol size="8">
                  <IonText style={{ fontWeight: '600' }}>Admin </IonText>
                </IonCol> */}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
      {/* </IonPage> */}
    </>
  );
};

export default ScheduleConfirmation;
