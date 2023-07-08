import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import ShareSocialFab from "../components/NewFabBtn";
import CreateTempWindow from "./CreateTempWindow";
import {addCircle} from 'ionicons/icons'

import './ConferenceTemplates.scss'

const ConferenceTemplates: React.FC = () => {


    const [templates, setTemplates] = useState([
    {
      id: 1,
      title: "Subject 1",
      duration: "15 minutes",
      participantNum: 3,
      participants: ["Neeraj", "Krishna", "Akshay"],
    },
    {
      id: 2,
      title: "Subject 2",
      duration: "30 minutes",
      participantNum: 4,
      participants: ["Neeraj", "Krishna", "Njandu", "Aswin"],
    },
  ]);

    const [showModal, setShowModal] = useState(false);

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
                    <IonCard key={temp.id} className="template-card">
                        <IonCardHeader style={{paddingBottom: '0'}}>
                            <IonCardTitle style={{fontSize:'1.3rem'}}>{temp.title}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent className="ion-no-padding ion-padding-bottom">
                            <IonGrid className="template-grid">
                                <IonRow>
                                    <IonCol size="7">Duration:</IonCol>
                                    <IonCol size="5">{temp.duration}</IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="7">Number of participants:</IonCol>
                                    <IonCol size="5">{temp.participantNum}</IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="7">Participants:</IonCol>
                                    <IonCol size="5">{temp.participants.map((participant) =>(
                                        <IonLabel>{participant},<br /></IonLabel>
                                    ))}</IonCol>
                                </IonRow>
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