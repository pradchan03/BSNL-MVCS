import React, { useEffect, useState } from 'react';
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
import { useHistory, useLocation, RouteComponentProps } from 'react-router';
import './ScheduleConfirmation.scss';

<<<<<<< HEAD
interface LocationState {
  meeting: any;
}

const ScheduleConfirmation: React.FC<
  RouteComponentProps<any, any, LocationState>
> = ({ location }) => {
  const history = useHistory();

  const { meeting } = location.state || {};
  const username = localStorage.getItem('userID');
  console.log(meeting?.subject);

  const convertUTCMillisecondsToDate = (utcMilliseconds: any) => {
    // Create a new Date object with the UTC milliseconds
    var date = new Date(parseInt(utcMilliseconds, 10));

    // Specify the time zone as 'Asia/Kolkata' for Indian time
    var options = { timeZone: 'Asia/Kolkata' };

    // Extract the different components of the date in Indian time
    var year = date.toLocaleString('en-IN', {
      year: 'numeric',
      timeZone: 'Asia/Kolkata',
    });
    var month = date.toLocaleString('en-IN', {
      month: '2-digit',
      timeZone: 'Asia/Kolkata',
    });
    var day = date.toLocaleString('en-IN', {
      day: '2-digit',
      timeZone: 'Asia/Kolkata',
    });
    var hours = date.toLocaleString('en-IN', {
      hour: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    });
    var minutes = date.toLocaleString('en-IN', {
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
    });

    // Format the date and time string
    var formattedDate = year + '-' + month + '-' + day;
    var formattedTime = hours + ':' + minutes;

    // Return the formatted date and time
    return {
      year: year,
      month: month,
      day: day,
      hours: hours,
      minutes: minutes,
      formattedDate: formattedDate,
      formattedTime: formattedTime,
    };
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
            </IonButtons>
            <IonTitle>Meeting Confirmation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard color="success">
            <IonCardHeader>
              <IonCardTitle>Conference created successfully!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              The conference notification has been sent to you via SMS or email.
            </IonCardContent>
          </IonCard>
          <div>
            <IonGrid className="ion-padding">
              <IonRow className="ion-padding">
                <IonCol size="6" className="ion-padding">
                  <IonLabel className="account-labels"> Subject </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {meeting?.subject}
                  </IonText>
                </IonCol>
                <IonCol size="6" className="ion-padding">
=======
const ScheduleConfirmation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs"></IonBackButton>
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
>>>>>>> 7eadbfa (attendee names add)
                  <IonLabel className="account-labels"> Date </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {
                      convertUTCMillisecondsToDate(meeting?.startTime)
                        .formattedDate
                    }{' '}
                  </IonText>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonLabel className="account-labels"> Start time </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {
                      convertUTCMillisecondsToDate(meeting?.startTime)
                        .formattedTime
                    }{' '}
                  </IonText>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonLabel className="account-labels">
                    {' '}
                    Conference ID{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {meeting?.conferenceKey.conferenceID}{' '}
                  </IonText>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonLabel className="account-labels">
                    {' '}
                    Access number{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {meeting?.accessNumber}{' '}
                  </IonText>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonLabel className="account-labels">
                    {' '}
                    Chairperson Password{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {meeting?.passwords[0].password}
                  </IonText>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonLabel className="account-labels">
                    {' '}
                    Guest Password{' '}
                  </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {meeting?.passwords[1].password}
                  </IonText>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonLabel className="account-labels"> Creator </IonLabel>
                </IonCol>
                <IonCol size="6" className="ion-padding">
                  <IonText style={{ fontWeight: '600' }}>
                    {meeting?.scheduserName}{' '}
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ScheduleConfirmation;
