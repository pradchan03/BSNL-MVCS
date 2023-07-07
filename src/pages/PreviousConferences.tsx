import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";

const PreviousConferences: React.FC = () => {
    return (
        <IonCard style={{background:'#d9d9d9'}}>
            <IonCardHeader>
                This is the Card Header
            </IonCardHeader>
            <IonCardContent>
                This is the card Content
            </IonCardContent>
        </IonCard>
    )
}

export default PreviousConferences;