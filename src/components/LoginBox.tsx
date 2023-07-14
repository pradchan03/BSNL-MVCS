import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {eye , eyeOff} from "ionicons/icons"
import { IonText, IonGrid, IonCol, IonRow, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonNote } from '@ionic/react';

import API from "../api/API.js";
import { useHistory } from 'react-router';

const LoginBox = ({ onJoinConferenceClick, setLoggedIn }) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('');
    const history = useHistory()

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const loginHandle = () => {
      console.log("Web Account:", username);
      console.log("Password:", password);
      document.cookie = "";

    API.Login(username, password, "WEB")
      .then((res) => {
        console.log(res);

        if (res.message === "success") {
          console.log(res.token);
          document.cookie = "user=" + res.token + ": userID=" + res.userID;
          localStorage.setItem("userID", username);
          console.log(document.cookie);
          history.push('/tabs');
        } else alert("Invalid Credentials");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong. Please try again.");
      });
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
                  onIonInput={(event) => setUsername(event.detail.value! as string)}
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
                  onIonInput={(event) => setPassword(event.detail.value! as string)}
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
                <IonLabel>
                  Forgot Password?
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='ion-no-padding'>
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

