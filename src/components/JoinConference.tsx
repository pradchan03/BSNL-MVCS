import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {eye , eyeOff} from "ionicons/icons"
import { IonText, IonGrid, IonCol, IonRow, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonNote } from '@ionic/react';


const JoinConference = ({onBackClick}) => {
    const [confID, setConfID] = useState<string | number>('')
    const [password, setPassword] = useState<string | number>('')
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const joinHandle = () => {
      if (!confID || !password) {
        setError('Please enter both Conference ID and Password.');
        return;
      }
  
      // Perform your authentication logic here
      const validConfId = 'confid';
      const validPassword = 'password1';
  
      if (confID === validConfId && password === validPassword) {
        // Successful login, navigate to the dashboard
        setError('')
        console.log('You joined the conference')
      } else {
        // Invalid credentials, display error message
        setError('Invalid Conference ID or Password.');
      }
    };


    return (
    <IonCard className="join-box ion-text-center">
      <IonCardHeader>
        <IonCardTitle className="login-join-title">Join Conference</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <IonItem>
                <IonLabel position="stacked">Conference ID</IonLabel>
                <IonInput
                  type="text"
                  value={confID}
                  onIonChange={(event) => setConfID(event.detail.value)}
                />
                <IonNote slot="helper">Enter meeting ID</IonNote>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12'>
              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onIonChange={(event) => setPassword(event.detail.value)}
                />
                <IonButton
                  className="visibility-button"
                  slot="end"
                  onClick={togglePasswordVisibility}>
                  <IonIcon icon={showPassword ? eye : eyeOff} />
                </IonButton>
                <IonNote slot="helper">Enter meeting password</IonNote>
              </IonItem>
            </IonCol>
          </IonRow>
          {error && <IonText className='error-login' color="danger">{error}</IonText>}
          <IonRow>
            <IonCol size="12">
              <IonButton
                className="join-button"
                expand="full"
                onClick={joinHandle}>
                JOIN CONFERENCE
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton
                color='light'
                className="join-conference-btn"
                expand="full"
                onClick={onBackClick}>
                BACK TO LOGIN
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
    );
}

export default JoinConference;