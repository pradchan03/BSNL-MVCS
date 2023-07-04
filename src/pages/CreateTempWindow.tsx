// DetailsModal.tsx

import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonInput, IonItem, IonLabel, IonCard, IonCardContent } from '@ionic/react';

interface DetailsModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onSave: (name: string, phone: number) => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onCancel, onSave }) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<number>(null);

  const handleSave = () => {
    onSave(name, phone);
    onCancel();
  };

  return (
    <IonModal isOpen={isOpen}>
        <IonCard>
            <IonCardContent>
                <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput type="text" value={name} onIonChange={(event) => setName(event.detail.value! as string)}></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel position="floating">Mobile Number</IonLabel>
                <IonInput type="number" value={phone} onIonChange={(event) => setPhone(event.detail.value! as number)}></IonInput>
                </IonItem>
                <IonButton expand="block" onClick={handleSave}>
                Save
                </IonButton>
                <IonButton expand="block" color="danger" onClick={onCancel}>
                Cancel
                </IonButton>
            </IonCardContent>
        </IonCard>
    </IonModal>
  );
};

export default DetailsModal;
