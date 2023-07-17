import {
  IonLoading,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonContent,
  IonLabel,
} from '@ionic/react';
import React, { useState } from 'react';
import './ShareSocialFab.css';


interface NewFabProps {
  label: string;
  icon: string;
  onClick: () => void;
}

const ShareSocialFab: React.FC<NewFabProps> = ({label, icon, onClick}) => {

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          className="rectangular-fab-button"
          onClick={onClick}
        >
          <div className="fab-content">
            <div className="fab-icon">
              <IonIcon icon={icon} />
            </div>
            <div className="fab-label">
              <IonLabel>{label}</IonLabel>
            </div>
          </div>
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default ShareSocialFab;
