import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import ShareSocialFab from "../components/NewFabBtn";
import CreateTempWindow from "./CreateTempWindow";

import ConferenceTemplateList from '../api/ConferenceTemplateList.js'

import {addCircle} from 'ionicons/icons'

import './ConferenceTemplates.scss'

const ConferenceTemplates: React.FC = () => {


    const [templates, setTemplates] = useState([]);

    const [showModal, setShowModal] = useState(false);

    function getCookie(cookieName: any) {
        const cookieString = document.cookie;
        const cookies = cookieString.split(":");
  
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(cookieName + "=")) {
            return cookie.substring(cookieName.length + 1);
          }
        }
  
        return null; // Return null if the cookie is not found
      }

      var token = getCookie("user");

    useEffect(() => {
        ConferenceTemplateList(token)
          .then((res) => {
            const templateArray = Object.values(res)
              .filter((value) => typeof value === "object")
              .map((template) => template);
              console.log(templateArray)
            setTemplates(templateArray);
          })
          .catch((err) => {
            console.log(
              "Could not fetch template details. Please try again later."
            );
          });
      }, []);

    const handleOpenModal = () => {
        setShowModal(true);
      };

    const handleCancelModal = () => {
        setShowModal(false);
      };  

    const handleSaveDetails = (subject: string, duration: string, num: string, addContacts: any) => {
        // Handle saving details here
            const newTemplate = {
            id: templates.length + 1,
            title: subject,
            duration: duration + " minutes",
            participantNum: parseInt(num),
            participants: addContacts,
          };
        
          setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
      };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Templates</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Templates</IonTitle>
                    </IonToolbar>
                    <IonToolbar>
                    <IonSearchbar
                        showCancelButton="never"
                        placeholder="Search"
                    ></IonSearchbar>
                    </IonToolbar>
                </IonHeader>
                {templates.map((temp) => (
                    <IonCard key={temp.TemplateId} className="template-card">
                        <IonCardHeader style={{paddingBottom: '0'}}>
                            <IonCardTitle style={{fontSize:'1.3rem'}}>{temp.TemplateName}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent className="ion-no-padding ion-padding-bottom">
                            <IonGrid className="template-grid">
                                <IonRow>
                                    <IonCol size="7">Duration:</IonCol>
                                    <IonCol size="5">{temp.Length} minutes</IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="7">Number of participants:</IonCol>
                                    <IonCol size="5">{temp.Parties}</IonCol>
                                </IonRow>
                                <br />
                                {/* <IonRow>
                                    <IonCol size="7">Participants:</IonCol>
                                    <IonCol size="5">{temp.participants.map((participant) =>(
                                        <IonLabel>{participant},<br /></IonLabel>
                                    ))}</IonCol>
                                </IonRow> */}
                                <IonRow>
                                    <IonCol>
                                        <IonButton color='primary' expand="block">Start Now</IonButton>
                                    </IonCol>
                                    <IonCol>
                                        <IonButton color='success' expand="block">Schedule</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                ))}
                <ShareSocialFab label="Create" icon={addCircle} onClick={handleOpenModal}/>
                <CreateTempWindow isOpen={showModal} onCancel={handleCancelModal} onSave={handleSaveDetails} />
            </IonContent>
        </IonPage>
    )
}

export default ConferenceTemplates;