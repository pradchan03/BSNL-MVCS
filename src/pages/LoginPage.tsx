import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router';
import LoginBox from '../components/LoginBox';
import JoinConference from '../components/JoinConference';
import { useState } from 'react';
import './LoginPage.scss'

interface LoginProp{
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;

}

const LoginPage: React.FC<LoginProp> = ({loggedIn, setLoggedIn}) => {

  const [showJoinConference, setShowJoinConference] = useState(false);

  const handleJoinConferenceClick = () => {
    setShowJoinConference(true);
  };

  const handleBackClick = () => {
    setShowJoinConference(false);
  };

  if (loggedIn){
    return <Redirect to='/tabs' />
  }
  
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>BSNL MVCS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size='3'>
              <IonImg className="logo-img" src="https://1.bp.blogspot.com/-WLUaHeseza4/XQDZ8i2vCYI/AAAAAAAAAvo/lTLe0DnI9p0PkqMYxEY1L6ztO3if39IJwCLcBGAs/s1600/bsnl-logo.jpeg" alt="LogoBSNL" />
            </IonCol>
            <IonCol size='9'>
              <IonText className="multi-text">MULTIMEDIA VIDEO CONFERENCE SERVICE</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12'>
              {!showJoinConference?
              <LoginBox 
              onJoinConferenceClick={handleJoinConferenceClick}
              setLoggedIn={setLoggedIn}/> :
              <JoinConference onBackClick={handleBackClick}/>}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
