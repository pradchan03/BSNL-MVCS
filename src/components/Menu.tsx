import React from 'react';
import { RouteComponentProps, withRouter, useHistory } from 'react-router';

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonToggle,
} from '@ionic/react';
import {
  create,
  calendarOutline,
  hammer,
  moonOutline,
  help,
  informationCircleOutline,
  logIn,
  logOut,
  mapOutline,
  peopleOutline,
  person,
  personAdd,
  call,
} from 'ionicons/icons';

import { connect } from '../data/connect';
import './Menu.css';

import Logout from '../api/Logout.js'

const routes = {
  appPages: [
    { title: 'Schedule', path: '/tabs/schedule', icon: calendarOutline },
    { title: 'Create Conference', path: '/tabs/createconf', icon: call },
    { title: 'Contacts', path: '/tabs/speakers', icon: peopleOutline },
    { title: 'Templates', path: '/tabs/templates', icon: create },
    { title: 'About', path: '/tabs/about', icon: informationCircleOutline },
  ],
  loggedInPages: [
    { title: 'Account', path: '/account', icon: person },
    { title: 'Support', path: '/support', icon: help },
  ],
};

interface Pages {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}
interface StateProps {
  isAuthenticated: boolean;
  menuEnabled: boolean;
}

interface MenuProps extends RouteComponentProps, StateProps {}

const Menu: React.FC<MenuProps> = ({
  isAuthenticated,
  menuEnabled,
}) => {

  const history = useHistory()

  const handleLogout = () => { 
    console.log(document.cookie);
      function getCookie(cookieName) {
        const cookieString = document.cookie;
        const cookies = cookieString.split(":");
  
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(cookieName + "=")) {
            return cookie.substring(cookieName.length + 1);
          }
        }
  
        return null; // Return null if the cookie is not found
      }
      const token = getCookie("user");
      // console.log(cookieValue);
      console.log(Logout(token));
      function clearAllCookies() {
        var cookies = document.cookie.split(":");
  
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie =
            name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
      }
      clearAllCookies();
      history.push("/");
    console.log("clicked")
  }
  

  function renderlistItems(list: Pages[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={
              location.pathname.startsWith(p.path) ? 'selected' : undefined
            }
          >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
      
  }

  return (
    <IonMenu type="overlay" disabled={!menuEnabled} contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Conference</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Account</IonListHeader>
          {renderlistItems(routes.loggedInPages)}
            <IonItem
              detail={false}
              onClick={handleLogout}
            >
            <IonIcon slot="start" icon={logOut} />
            <IonLabel>Logout</IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin,
    menuEnabled: state.data.menuEnabled,
  }),
  component: withRouter(Menu),
});
