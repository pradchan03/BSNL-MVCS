import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonText } from "@ionic/react";
import './UpcomingMeetings.scss'

const PreviousConferences: React.FC = () => {

    const conferences = [
        {
          id: 1,
          creator: 'John Doe',
          subject: 'Conference 1',
          conferenceId: 'ABC123',
          participants: 50,
          startTime: '2023-06-20 09:00:00',
          duration: '1 hour',
        },
        {
          id: 2,
          creator: 'Jane Smith',
          subject: 'Conference 2',
          conferenceId: 'DEF456',
          participants: 80,
          startTime: '2023-06-21 14:30:00',
          duration: '1.5 hours',
        },
      ];


    return (
    <IonContent className="container-box">
        <IonCard className="container-card">
            <IonCardHeader style={{borderBottom: '1px solid black'}}>
                <IonCardTitle style={{fontSize:'1.5rem'}}>Previous Conferences</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            {conferences.map((conference) => (
            <IonCard className="meeting-detail-container" key={conference.id}>
            <IonCardHeader>
                <IonCardTitle style={{color:'#fff', fontSize: '20px'}}>{conference.subject}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="meeting-details ">
                <IonText>Creator: {conference.creator}</IonText><br />
                <IonText>Conference ID: {conference.conferenceId}</IonText><br />
                <IonText>No of Participants: {conference.participants}</IonText><br />
                <IonText>Start Time: {conference.startTime}</IonText><br />
                <IonText>Duration: {conference.duration}</IonText>
            </IonCardContent>
            </IonCard>
             ))}
            </IonCardContent>
        </IonCard>
    </IonContent>    
    )
}

export default PreviousConferences;