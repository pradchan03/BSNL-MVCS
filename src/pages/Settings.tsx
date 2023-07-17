import { IonAvatar, IonButtons, IonCol, IonContent, IonGrid, IonHeader,IonButton, IonIcon, IonImg, IonInput, IonLabel, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, IonAlert, IonSpinner } from '@ionic/react';
import { useState } from 'react';

import './Settings.scss'
import { camera, close } from 'ionicons/icons';

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
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('')
  const [passwordMismatch, setPasswordMismatch] = useState(false); 

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [savingChanges, setSavingChanges] = useState(false);
  

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
    setShowConfirmation(true)
  };

  const handleConfirmSave = () => {
    setSavingChanges(true);
    // Simulating an asynchronous operation 
    setTimeout(() => {
      setSavingChanges(false);
      setShowConfirmation(false);
      // Additional actions after changes are saved
    }, 1500);
    setEditMode(false);
  };

  const handleCancelSave = () => {
    setShowConfirmation(false);
  };

  const handleChangePasswordClick = () => {
    setShowChangePassword(true);
  };

  const handlePasswordSaveClick = () => {
    setCurrentPassword('')
    setNewPassword('')
    setConfirmNewPassword('')
    setPasswordMismatch(true)
    if(!currentPassword){
      setErrorMsg('Current password field empty')
    } else if (!newPassword){
      setErrorMsg('New password field empty')
    } else if(!confirmNewPassword){
      setErrorMsg('Re-enter the new password')
    } else if (newPassword != confirmNewPassword){
      setErrorMsg('Passwords do not match')
    } else {
      setErrorMsg('')
      setShowChangePassword(false)
      setPasswordMismatch(false)
    }
    // if (currentPassword && newPassword && confirmNewPassword && newPassword === confirmNewPassword){
    //   setShowChangePassword(false);
    //   setPasswordMismatch(false); // Reset password mismatch error
    // } else {
    //   setPasswordMismatch(true); // Set password mismatch error
    // }
  } 
  

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
      {showChangePassword ? (
        <>
         <IonHeader collapse="condense">
         <IonToolbar>
           <IonTitle size="large">Change Password</IonTitle>
         </IonToolbar>
         </IonHeader>
        <div className="change-password-container">
          <div className='ion-padding change-password-item'>
          <IonLabel className="change-password-label">Current Password</IonLabel>
          <IonInput
            className="change-password-input"
            type="password"
            placeholder="Enter Current Password"
            value={currentPassword}
            onIonInput={(e) => setCurrentPassword(e.detail.value! as string)}
          />
          </div>
          <div className='ion-padding change-password-item'>
          <IonLabel className="change-password-label">New Password</IonLabel>
          <IonInput
            className="change-password-input"
            type="password"
            placeholder="Type New Password"
            value={newPassword}
            onIonInput={(e) => setNewPassword(e.detail.value! as string)}
          />
          </div>
          <div className='ion-padding change-password-item'>
          <IonLabel className="change-password-label">Confirm New Password</IonLabel>
          <IonInput
            className="change-password-input"
            type="password"
            placeholder='Retype New Password'
            value={confirmNewPassword}
            onIonInput={(e) => setConfirmNewPassword(e.detail.value! as string)}
          />
          </div>
          <IonButton className='ion-margin' expand="block" style={{width:'70vw'}} onClick={handlePasswordSaveClick}>
            Save Changes
          </IonButton>
          {passwordMismatch && (
            <IonText className="password-mismatch-error" color='danger'>{errorMsg}</IonText>
          )}
        </div>
        </>
      ) : (
        <div>
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
          <div className='ion-padding ion-margin' style={{backgroundColor:'#d9d9d9'}}> 
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
                    style={{backgroundColor:'#fff'}}
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
                    style={{backgroundColor:'#fff'}} 
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
                    style={{backgroundColor:'#fff'}}
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
                    style={{backgroundColor:'#fff'}}
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
                    style={{backgroundColor:'#fff'}}
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
                    <IonButton expand='block' fill='outline' onClick={handleChangePasswordClick}>
                      Change <br/>Password
                    </IonButton>
                  </IonCol> 
                </>
              )}
              </IonRow>
            </IonGrid>  
          </div>
        </div>
      )}
      {savingChanges && (
          <div className="spinner-overlay">
            <div className="spinner-box">
              <IonSpinner name='circular' className="spinner" />
            </div>
          </div>
        )}
      <IonAlert
          isOpen={showConfirmation}
          onDidDismiss={handleCancelSave}
          header="Confirm Changes"
          message="Are you sure you want to save the changes?"
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: handleCancelSave,
            },
            {
              text: 'Save',
              handler: handleConfirmSave,
            },
          ]}
        />
    </IonContent>
    </IonPage>
  );
};

export default Settings;
