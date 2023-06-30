import {
  IonLoading,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonContent,
  IonLabel,
} from '@ionic/react';
import { call } from 'ionicons/icons';
import React, { useState } from 'react';
import './ShareSocialFab.css';
import { useHistory } from 'react-router-dom';

const ShareSocialFab: React.FC = () => {
  const history = useHistory();

  const handleFabClick = () => {
    history.push('/new-conf'); // Replace 'other-page' with the desired route/path
  };
  const [loadingMessage, setLoadingMessage] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const openSocial = (network: string) => {
    setLoadingMessage(`Posting to ${network}`);
    setShowLoading(true);
  };

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          className="rectangular-fab-button"
          onClick={handleFabClick}
        >
          <div className="fab-content">
            <div className="fab-icon">
              <IonIcon icon={call} />
            </div>
            <div className="fab-label">
              <IonLabel>New</IonLabel>
            </div>
          </div>
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default ShareSocialFab;
