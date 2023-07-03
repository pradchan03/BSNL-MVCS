import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {eye , eyeOff} from "ionicons/icons"
import { IonText, IonGrid, IonCol, IonRow, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonNote } from '@ionic/react';



const LoginBox = ({ onJoinConferenceClick, setLoggedIn }) => {
    const [username, setUsername] = useState<string | number>('')
    const [password, setPassword] = useState<string | number>('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('');


    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const loginHandle = () => {
      if (!username || !password) {
        setError('Please enter both Username and Password.');
        return;
      }
  
      // Perform your authentication logic here
      const validUsername = 'example';
      const validPassword = 'password';
  
      if (username === validUsername && password === validPassword) {
        // Successful login, navigate to the dashboard
        setError('')
        setLoggedIn(true)
      } else {
        // Invalid credentials, display error message
        setError('Invalid username or password.');
      }
    };
    
    const handleForgotPassword = () => {
      console.log('Forgot Password clicked');
      // Add your logic for handling the forgot password functionality here
    };

    return (
    <IonCard className="login-box ion-text-center">
      <IonCardHeader>
        <IonCardTitle className="login-join-title">Login</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <IonItem>
                <IonLabel position="stacked">Web Account</IonLabel>
                <IonInput
                  type="text"
                  value={username}
                  onIonChange={(event) => setUsername(event.detail.value)}
                />
                <IonNote slot="helper">Enter a valid username</IonNote>
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
                <IonNote slot="helper">Enter your password</IonNote>
              </IonItem>
            </IonCol>
          </IonRow>
          {error && <IonText style={{textAlign:'left'}} className='error-login' color="danger">{error}</IonText>}
          <IonRow>
            <IonCol size="12">
              <IonButton
                className="login-button"
                expand="full"
                onClick={loginHandle}>
                LOGIN
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12'>
            <IonItem lines="none" className="forgot-password">
                <IonLabel
                  onClick={handleForgotPassword}>
                  Forgot Password?
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12'>
              <IonLabel color='medium'>Use Conference ID to Join Conference</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton
                color='light'
                className="join-conference-btn"
                expand="full"
                onClick={ onJoinConferenceClick }>
                JOIN CONFERENCE
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
    );
}

export default LoginBox;

