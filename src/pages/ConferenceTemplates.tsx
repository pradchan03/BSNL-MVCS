import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const ConferenceTemplates: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Create Conference</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Create Conference</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSearchbar
                    showCancelButton="never"
                    placeholder="Search"
                ></IonSearchbar>
            </IonContent>
        </IonPage>
    )
}

export default ConferenceTemplates;