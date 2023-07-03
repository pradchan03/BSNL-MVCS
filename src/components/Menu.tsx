import React from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

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
    { title: 'Logout', path: '/logout', icon: logOut },
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
  history,
  isAuthenticated,
  menuEnabled,
}) => {
  const location = useLocation();

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
