import { IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import ShareSocialFab from "../components/NewFabBtn";
import DetailsModal from "./CreateTempWindow";
import {addCircle} from 'ionicons/icons'

import './ConferenceTemplates.scss'

const ConferenceTemplates: React.FC = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
      };

    const handleCancelModal = () => {
        setShowModal(false);
      };  

    const handleSaveDetails = (name: string, phone: number) => {
        // Handle saving details here
        console.log('Name:', name);
        console.log('Mobile Number:', phone);
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
                <IonCard style={{backgroundColor:'#0161b0'}}>
                    <IonCardHeader>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3">
                                    <div className="conference-title">Name</div>
                                </IonCol>
                                <IonCol size="4">
                                    <div className="conference-title">Duration</div>
                                </IonCol>
                                <IonCol size="5">
                                    <div className="conference-title">Participants</div>
                                </IonCol>
                                <IonCol>
                                    <div className="conference-title"></div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardHeader>
                </IonCard>
                </IonHeader>
                <ShareSocialFab label="Create" icon={addCircle} onClick={handleOpenModal}/>
                <DetailsModal isOpen={showModal} onCancel={handleCancelModal} onSave={handleSaveDetails} />
            </IonContent>
        </IonPage>
    )
}

export default ConferenceTemplates;