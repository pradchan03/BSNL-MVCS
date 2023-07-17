import React from 'react';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { Route, Redirect } from 'react-router';
import {
  calendar,
  location,
  informationCircle,
  people,
  call,
  create,
} from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import About from './About';
import CreateConference from './CreateConference';
import ConferenceTemplates from './ConferenceTemplates';

interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {
  return (
    <IonTabs className='main-tab'>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/schedule" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route
          path="/tabs/schedule"
          render={() => <SchedulePage/>}
          exact={true}
        />
        <Route
          path="/tabs/speakers"
          render={() => <SpeakerList />}
          exact={true}
        />
        <Route
          path="/tabs/speakers/:id"
          component={SpeakerDetail}
          exact={true}
        />
        <Route path="/tabs/schedule/:id" component={SessionDetail} />
        <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
        <Route
          path="/tabs/createconf"
          render={() => <CreateConference />}
          exact={true}
        />
        <Route
          path="/tabs/createconf"
          render={() => <CreateConference />}
          exact={true}
        />
        <Route
          path="/tabs/templates"
          render={() => <ConferenceTemplates />}
          exact={true}
        />
        <Route path="/tabs/about" render={() => <About />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/tabs/schedule">
          <IonIcon icon={calendar} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="createconf" href="/tabs/createconf">
          <IonIcon icon={call} />
          <IonLabel>Create Conference</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tabs/speakers">
          <IonIcon icon={people} />
          <IonLabel>Contacts</IonLabel>
        </IonTabButton>
        <IonTabButton tab="templates" href="/tabs/templates">
          <IonIcon icon={create} />
          <IonLabel>Templates</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
