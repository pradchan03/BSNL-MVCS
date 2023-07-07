import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonRefresher, IonText } from "@ionic/react";
import React, { useRef, useState } from "react"
import './UpcomingMeetings.scss'

const UpcomingMeetings: React.FC = () =>{

    const [refresh, setRefresh] = useState(0)
    const [meetings, setMeetings] = useState([
        {
            id: 1,
            title: "Meeting 1",
            startTime: "2023-06-22 10:00:00",
            endTime: "2023-06-22 11:30:00",
            creator: "John Doe",
            accessNumber: "123456789",
            conferenceId: "ABC123",
            chairpersonPassword: "password1",
            guestPassword: "password2",
            numParticipants: 10,
            active: true
          },
          {
            id: 2,
            title: "Meeting 2",
            startTime: "2023-06-23 14:00:00",
            endTime: "2023-06-23 15:30:00",
            creator: "Jane Smith",
            accessNumber: "123456789",
            conferenceId: "ABC123",
            chairpersonPassword: "password1",
            guestPassword: "password2",
            numParticipants: 10,
            active: false
          },
    ])

    const handleJoinConference = (meeting: any) => {
        console.log("Joining meeting: ");
    }

    const handleEndConference = (meeting: any) => {
        meeting.active = false
        setRefresh(refresh + 1)
    }

    return (
        <IonContent scrollY={true} fullscreen={true}>
        <IonCard className="container-box ion-no-margin">
            <IonCardHeader style={{borderBottom: '1px solid black'}}>
                <IonCardTitle>Ongoing/Upcoming Meetings</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            {meetings.map((meeting) => (
                <IonCard className="meeting-detail-container" key={meeting.id}>
                    <IonCardHeader>
                        <IonCardTitle style={{color:'#fff', fontSize: '20px'}}>{meeting.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="meeting-details ">
                        <IonText>Start Time: {meeting.startTime} </IonText><br />
                        <IonText>End Time: {meeting.endTime} </IonText><br />
                        <IonText>Creator: {meeting.creator} </IonText><br />
                        
                        {meeting.active ?
                                <>
                                <IonText>Access Number: {meeting.accessNumber} </IonText><br />
                                <IonText>Conf ID: {meeting.conferenceId} </IonText><br />
                                <IonText>Admin Password: {meeting.chairpersonPassword} </IonText><br />
                                <IonText>Guest Password: {meeting.guestPassword} </IonText><br />
                                <IonText>Participants: {meeting.numParticipants} </IonText><br /><br />
                                <IonButton shape="round" color='success' style={{width:'100px', marginRight:'10px'}} onClick={() => handleJoinConference(meeting)}>Join</IonButton>
                                <IonButton shape="round" color='danger' style={{width:'100px', marginLeft:'10px'}} onClick={() => handleEndConference(meeting)}>End Now</IonButton>
                                </> : <></>
                        }
                    </IonCardContent>
                </IonCard>     
            ) )}
            </IonCardContent>
        </IonCard>
        </IonContent>
    )
}

export default UpcomingMeetings;