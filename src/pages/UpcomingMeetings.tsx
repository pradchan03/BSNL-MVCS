// import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonIcon, IonRefresher, IonText, IonToolbar } from "@ionic/react";
// import React, { useState } from "react"

// import queryConferenceList from '../api/OngoingList.js'
// import './UpcomingMeetings.scss'
// import { chevronDownOutline, trash } from "ionicons/icons";

// const UpcomingMeetings: React.FC = () =>{
//     const [meetings, setMeetings] = useState([]);

//     React.useEffect(() => {
//         function getCookie(cookieName) {
//           const cookieString = document.cookie;
//           const cookies = cookieString.split(":");

//           for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.startsWith(cookieName + "=")) {
//               return cookie.substring(cookieName.length + 1);
//             }
//           }

//           return null;
//         }

//         const token = getCookie("user");
//         queryConferenceList(token)
//           .then((res) => {
//             const meetingArray = Object.values(res)
//               .filter((value) => typeof value === "object")
//               .map((meeting) => meeting);
//             setMeetings(meetingArray);
//           })
//           .catch((err) => {
//             alert("Could not fetch meeting details. Please try again later.");
//           });
//       }, []);

//     const convertUTCMillisecondsToDate = (utcMilliseconds: any) => {
//     // Create a new Date object with the UTC milliseconds
//     var date = new Date(parseInt(utcMilliseconds, 10));

//     // Specify the time zone as 'Asia/Kolkata' for Indian time
//     var options = { timeZone: "Asia/Kolkata" };

//     // Extract the different components of the date in Indian time
//     var year = date.toLocaleString("en-IN", { year: "numeric", timeZone: "Asia/Kolkata" });
//     var month = date.toLocaleString("en-IN", { month: "2-digit", timeZone: "Asia/Kolkata" });
//     var day = date.toLocaleString("en-IN", { day: "2-digit", timeZone: "Asia/Kolkata" });
//     var hours = date.toLocaleString("en-IN", {
//       hour: "2-digit",
//       hour12: false,
//       timeZone: "Asia/Kolkata",
//     });
//     var minutes = date.toLocaleString("en-IN", { minute: "2-digit", timeZone: "Asia/Kolkata" });

//     // Format the date and time string
//     var formattedDate = year + "-" + month + "-" + day;
//     var formattedTime = hours + ":" + minutes;

//     // Return the formatted date and time
//     return {
//       year: year,
//       month: month,
//       day: day,
//       hours: hours,
//       minutes: minutes,
//       formattedDate: formattedDate,
//       formattedTime: formattedTime,
//     };
//   }

//     const convertMillisecondsToHoursAndMinutes = (milliseconds: any) => {
//       var hours = Math.floor(milliseconds / (1000 * 60 * 60));
//       var minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

//       return { hours: hours, minutes: minutes };
//     }

//     const handleJoinConference = (meeting: any) => {
//         console.log("Joining meeting: ");
//     }

//     const handleEndConference = (meeting:any) => {

//     }

//     const handleDeleteMeeting = () => {

//     }

//     return (
//     <IonContent className="container-box">
//         <IonCard className="container-card">
//             <IonCardHeader style={{borderBottom: '1px solid black'}}>
//                 <IonCardTitle style={{fontSize:'1.3rem'}}>Ongoing/Upcoming Meetings</IonCardTitle>
//             </IonCardHeader>
//             <IonCardContent>
//             {meetings.map((meeting) => (
//                 <IonCard className="meeting-detail-container" key={meeting.id}>
//                     <IonCardHeader style={{display:'flex', flexDirection:'row'}}>
//                         <IonCardTitle style={{color:'#fff', fontSize: '20px', flex:'1'}}>{meeting.subject}</IonCardTitle>
//                         <IonIcon icon={chevronDownOutline} style={{fontSize:'1.3rem', marginRight:'10px'}} color="light" />
//                         <IonIcon icon={trash} style={{fontSize:'1.3rem', marginLeft:'10px'}} color="light" onClick={handleDeleteMeeting} />
//                     </IonCardHeader>
//                     <IonCardContent className="meeting-details ">
//                         <IonText>Start Time: {convertUTCMillisecondsToDate(meeting.startTime).formattedTime} </IonText><br />
//                         <IonText>Duration: {convertMillisecondsToHoursAndMinutes(meeting.length).hours} hours {convertMillisecondsToHoursAndMinutes(meeting.length).minutes} minutes </IonText><br />
//                         <IonText>Creator: {meeting.scheduserName} </IonText><br />
//                         <IonText>Access Number: {meeting.accessNumber} </IonText><br />
//                         <IonText>Conf ID: {meeting.conferenceKey.conferenceID} </IonText><br />
//                         <IonText>Admin Password: {meeting.chair} </IonText><br />
//                         <IonText>Guest Password: {meeting.general} </IonText><br />
//                         <IonText>Participants: {meeting.size} </IonText><br />
//                         {/* <IonText>Participants: {meeting.numParticipants} </IonText><br /> */}
//                         <br />
//                         <IonButton shape="round" color='success' style={{width:'100px', marginRight:'10px'}} onClick={() => handleJoinConference(meeting)}>Join</IonButton>
//                         <IonButton shape="round" color='danger' style={{width:'100px', marginLeft:'10px'}} onClick={() => handleEndConference(meeting)}>End Now</IonButton>
//                     </IonCardContent>
//                 </IonCard>
//             ) )}
//             </IonCardContent>
//         </IonCard>
//     </IonContent>

//     )
// }

// export default UpcomingMeetings;

import React, { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonRefresher,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { chevronDownOutline, trash } from 'ionicons/icons';
import queryConferenceList from '../api/OngoingList.js';
import './UpcomingMeetings.scss';

const UpcomingMeetings: React.FC<{ searchSubject: string }> = ({
  searchSubject,
}) => {
  const [meetings, setMeetings] = useState<any[]>([]);

  React.useEffect(() => {
    function getCookie(cookieName: string) {
      const cookieString = document.cookie;
      const cookies = cookieString.split(':');

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
          return cookie.substring(cookieName.length + 1);
        }
      }

      return null;
    }

    const token = getCookie('user');
    queryConferenceList(token)
      .then((res) => {
        const meetingArray = Object.values(res)
          .filter((value) => typeof value === 'object')
          .map((meeting) => meeting);
        setMeetings(meetingArray);
      })
      .catch((err) => {
        alert('Could not fetch meeting details. Please try again later.');
      });
  }, []);

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

  const convertMillisecondsToHoursAndMinutes = (milliseconds: any) => {
    var hours = Math.floor(milliseconds / (1000 * 60 * 60));
    var minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

    return { hours: hours, minutes: minutes };
  };

  const handleJoinConference = (meeting: any) => {
    console.log('Joining meeting:');
  };

  const handleEndConference = (meeting: any) => {};

  const handleDeleteMeeting = () => {};

  // Filter meetings based on search subject
  const filteredMeetings = meetings.filter((meeting) =>
    meeting.subject.toLowerCase().includes(searchSubject.toLowerCase())
  );

  return (
    <IonContent className="container-box">
      <IonCard className="container-card">
        <IonCardHeader style={{ borderBottom: '1px solid black' }}>
          <IonCardTitle style={{ fontSize: '1.3rem' }}>
            Ongoing/Upcoming Meetings
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {filteredMeetings.map((meeting) => (
            <IonCard className="meeting-detail-container" key={meeting.id}>
              <IonCardHeader style={{ display: 'flex', flexDirection: 'row' }}>
                <IonCardTitle
                  style={{ color: '#fff', fontSize: '20px', flex: '1' }}
                >
                  {meeting.subject}
                </IonCardTitle>
                <IonIcon
                  icon={chevronDownOutline}
                  style={{ fontSize: '1.3rem', marginRight: '10px' }}
                  color="light"
                />
                <IonIcon
                  icon={trash}
                  style={{ fontSize: '1.3rem', marginLeft: '10px' }}
                  color="light"
                  onClick={handleDeleteMeeting}
                />
              </IonCardHeader>
              <IonCardContent className="meeting-details ">
                <IonText>
                  Start Time:{' '}
                  {
                    convertUTCMillisecondsToDate(meeting.startTime)
                      .formattedTime
                  }{' '}
                </IonText>
                <br />
                <IonText>
                  Duration:{' '}
                  {convertMillisecondsToHoursAndMinutes(meeting.length).hours}{' '}
                  hours{' '}
                  {convertMillisecondsToHoursAndMinutes(meeting.length).minutes}{' '}
                  minutes{' '}
                </IonText>
                <br />
                <IonText>Creator: {meeting.scheduserName} </IonText>
                <br />
                <IonText>Access Number: {meeting.accessNumber} </IonText>
                <br />
                <IonText>
                  Conf ID: {meeting.conferenceKey.conferenceID}{' '}
                </IonText>
                <br />
                <IonText>Admin Password: {meeting.chair} </IonText>
                <br />
                <IonText>Guest Password: {meeting.general} </IonText>
                <br />
                <IonText>Participants: {meeting.size} </IonText>
                <br />
                {/* <IonText>Participants: {meeting.numParticipants} </IonText><br /> */}
                <br />
                <IonButton
                  shape="round"
                  color="success"
                  style={{ width: '100px', marginRight: '10px' }}
                  onClick={() => handleJoinConference(meeting)}
                >
                  Join
                </IonButton>
                <IonButton
                  shape="round"
                  color="danger"
                  style={{ width: '100px', marginLeft: '10px' }}
                  onClick={() => handleEndConference(meeting)}
                >
                  End Now
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default UpcomingMeetings;
