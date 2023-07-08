import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonRefresher, IonText } from "@ionic/react";
import React, { useRef, useState } from "react"

import queryConferenceList from '../api/OngoingList.js'
import './UpcomingMeetings.scss'

const UpcomingMeetings: React.FC = () =>{
    const [meetings, setMeetings] = useState([]);

    React.useEffect(() => {
        function getCookie(cookieName) {
          const cookieString = document.cookie;
          const cookies = cookieString.split(":");
    
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(cookieName + "=")) {
              return cookie.substring(cookieName.length + 1);
            }
          }
    
          return null; 
        }
    
        const token = getCookie("user");
        queryConferenceList(token)
          .then((res) => {
            const meetingArray = Object.values(res)
              .filter((value) => typeof value === "object")
              .map((meeting) => meeting);
            setMeetings(meetingArray);
          })
          .catch((err) => {
            alert("Could not fetch meeting details. Please try again later.");
          });
      }, []);

    const handleJoinConference = (meeting: any) => {
        console.log("Joining meeting: ");
    }

    const handleEndConference = (meeting:any) => {

    }

    return (
    <IonContent> 
        <IonCard className="container-box">
            <IonCardHeader style={{borderBottom: '1px solid black'}}>
                <IonCardTitle style={{fontSize:'1.5rem'}}>Ongoing/Upcoming Meetings</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            {meetings.map((meeting) => (
                <IonCard className="meeting-detail-container" key={meeting.id}>
                    <IonCardHeader>
                        <IonCardTitle style={{color:'#fff', fontSize: '20px'}}>{meeting.subject}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="meeting-details ">
                        <IonText>Start Time: {meeting.startTime} </IonText><br />
                        <IonText>Duration: {parseInt(meeting.length)/60000} minutes </IonText><br />
                        <IonText>Creator: {meeting.scheduserName} </IonText><br />
                        <IonText>Access Number: {meeting.accessNumber} </IonText><br />
                        <IonText>Conf ID: {meeting.conferenceKey.conferenceID} </IonText><br />
                        <IonText>Admin Password: {meeting.chair} </IonText><br />
                        <IonText>Guest Password: {meeting.general} </IonText><br />
                        <IonText>Participants: {meeting.size} </IonText><br />
                        {/* <IonText>Participants: {meeting.numParticipants} </IonText><br /> */}
                        <br />
                        <IonButton shape="round" color='success' style={{width:'100px', marginRight:'10px'}} onClick={() => handleJoinConference(meeting)}>Join</IonButton>
                        <IonButton shape="round" color='danger' style={{width:'100px', marginLeft:'10px'}} onClick={() => handleEndConference(meeting)}>End Now</IonButton>
                    </IonCardContent>
                </IonCard>     
            ) )}
            </IonCardContent>
        </IonCard>
    </IonContent>
    
    )
}

export default UpcomingMeetings;