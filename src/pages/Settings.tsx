import { IonAvatar, IonButtons, IonCol, IonContent, IonGrid, IonHeader,IonButton, IonIcon, IonImg, IonInput, IonLabel, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import './Settings.scss'
import { camera, close } from 'ionicons/icons';
import { useHistory } from 'react-router';

const username = localStorage.getItem('userID');
const phoneNumber = '9020255100';

const Settings: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [editingProfilePicture, setEditingProfilePicture] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(username);
  const [pin, setPin] = useState('1234');
  const [mobileNumber, setMobileNumber] = useState('9020255100');
  const [telephone, setTelephone] = useState('0123456789');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
        setEditingProfilePicture(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePicture = () => {
    setProfilePicture('');
    setEditingProfilePicture(false);
  };

  const handleEditProfilePicture = () => {
    setEditingProfilePicture(true);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <IonPage id="account-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className="profile-picture-container">
        <IonAvatar className={profilePicture ? 'has-profile-picture' : ''}>
          {profilePicture && !editingProfilePicture ? (
            <>
              <IonImg src={profilePicture} alt="Profile Picture" />
              <div className="profile-picture-actions">
                <IonIcon icon={camera} className="edit-profile-picture" onClick={handleEditProfilePicture} />
                <IonIcon icon={close} className="remove-profile-picture" onClick={handleRemoveProfilePicture} />
              </div>
            </>
          ) : (
            <div className="upload-profile-picture">
              <IonIcon icon={camera} className="upload-icon" />
              <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
            </div>
          )}
        </IonAvatar>
      </div>
      <div className='ion-padding ion-margin'> 
        <IonGrid>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'> Web Account </IonLabel>
            </IonCol>
            <IonCol size='8'>
              <IonText style={{fontWeight:'600'}}>{username} </IonText>
            </IonCol>  
            </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'>Phone Account </IonLabel>
            </IonCol>  
            <IonCol size='8'>  
              <IonText style={{fontWeight:'600'}}>{phoneNumber} </IonText>
            </IonCol>  
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'>Name </IonLabel>
            </IonCol>  
            <IonCol size='8'>  
            {!editMode ? 
              <IonText style={{fontWeight:'600'}}>{name}</IonText>:
              <IonInput 
                className='setting-details' 
                value={name} 
                onIonChange={(e) => setName(e.detail.value! as any)} />}
            </IonCol>  
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'>PIN </IonLabel>
            </IonCol>  
            <IonCol size='8'>  
            {!editMode ? 
              <IonText style={{fontWeight:'600'}}>{pin}</IonText>:
              <IonInput 
                className='setting-details' 
                value={pin} 
                onIonChange={(e) => setPin(e.detail.value! as any)} />}
            </IonCol>     
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'>Mobile Number</IonLabel>
            </IonCol>  
            <IonCol size='8'>  
            {!editMode ? 
              <IonText style={{fontWeight:'600'}}>{mobileNumber}</IonText>:
              <IonInput 
                className='setting-details' 
                value={mobileNumber} 
                onIonChange={(e) => setMobileNumber(e.detail.value! as any)} />}
            </IonCol>  
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'>Telephone </IonLabel>
            </IonCol>  
            <IonCol size='8'>  
            {!editMode ? 
              <IonText style={{fontWeight:'600'}}>{telephone}</IonText>:
              <IonInput 
                className='setting-details' 
                value={telephone} 
                onIonChange={(e) => setTelephone(e.detail.value! as any)} />}
            </IonCol>  
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'>Email ID </IonLabel>
            </IonCol>  
            <IonCol size='8'>  
              {!editMode ? 
              <IonText style={{fontWeight:'600'}}>{email}</IonText>:
              <IonInput 
                className='setting-details' 
                value={email} 
                onIonChange={(e) => setEmail(e.detail.value! as any)} />}
            </IonCol> 
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonLabel className='account-labels'>Allow conference admin to view personal contacts </IonLabel>
            </IonCol>  
            <IonCol size='8'>  
              <IonText style={{fontWeight:'600'}}>Yes</IonText>
            </IonCol> 
          </IonRow>
          <br />
          <IonRow>
          {editMode ? (
            <IonCol size='12'>
            <IonButton expand="block" onClick={handleSaveClick}>
              Save
            </IonButton>
            </IonCol>
          ) : (
          <>
            <IonCol size='6'>
              <IonButton expand="block" onClick={handleEditClick}>
                Edit
              </IonButton>
            </IonCol>
            <IonCol size='6'>  
              <IonButton expand='block' fill='outline'>Change <br/>Password</IonButton>
            </IonCol> 
          </>)}
          </IonRow>
             
          
        </IonGrid>  
      </div>
    </IonContent>

    </IonPage>
  );
};

export default Settings;
