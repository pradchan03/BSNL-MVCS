import React, { useState, useRef } from 'react';

import {
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
  IonToast,
  IonModal,
  IonHeader,
  getConfig,
} from '@ionic/react';
import { options, search } from 'ionicons/icons';

import SessionList from '../components/SessionList';
import SessionListFilter from '../components/SessionListFilter';
import './SchedulePage.scss';

import ShareSocialFab from '../components/NewFabBtn';

import * as selectors from '../data/selectors';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';
import { Schedule } from '../models/Schedule';
import DashboardContents from './DashboardContents';

interface OwnProps {}

interface StateProps {
  schedule: Schedule;
  favoritesSchedule: Schedule;
  mode: 'ios' | 'md';
}

interface DispatchProps {
  setSearchText: typeof setSearchText;
}

type SchedulePageProps = OwnProps & StateProps & DispatchProps;

const SchedulePage: React.FC<SchedulePageProps> = ({
  favoritesSchedule,
  schedule,
  setSearchText,
  mode,
}) => {
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  const [showCompleteToast, setShowCompleteToast] = useState(false);

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === 'ios';

  const doRefresh = () => {
    setTimeout(() => {
      ionRefresherRef.current!.complete();
      // setShowCompleteToast(true);
    }, 1000);
  };

  return (
    <IonPage ref={pageRef} id="schedule-page">
      <IonHeader translucent={true}>
        <IonToolbar>
            <IonTitle>Dashboard</IonTitle>
          {!showSearchbar && (
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          )}

          {!ios && !showSearchbar && <IonTitle>Dashboard</IonTitle>}
          {showSearchbar && (
            <IonSearchbar
              showCancelButton="always"
              placeholder="Search"
              onIonInput={(e: CustomEvent) => setSearchText(e.detail.value)}
              onIonCancel={() => setShowSearchbar(false)}
            ></IonSearchbar>
          )}

          <IonButtons slot="end">
            {!ios && !showSearchbar && (
              <IonButton onClick={() => setShowSearchbar(true)}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            )}
  
          </IonButtons>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              placeholder="Search"
              onIonInput={(e: CustomEvent) => setSearchText(e.detail.value)}
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>

        <IonToast
          isOpen={showCompleteToast}
          message="Refresh complete"
          duration={2000}
          onDidDismiss={() => setShowCompleteToast(false)}
        />
        <DashboardContents />
        {/* <SessionList
          schedule={schedule}
          listType={segment}
          hide={segment === 'favorites'}
        />
        <SessionList
          schedule={favoritesSchedule}
          listType={segment}
          hide={segment === 'all'}
        /> */}
      </IonContent>
      <ShareSocialFab />
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    schedule: selectors.getSearchedSchedule(state),
    favoritesSchedule: selectors.getGroupedFavorites(state),
    mode: getConfig()!.get('mode'),
  }),
  mapDispatchToProps: {
    setSearchText,
  },
  component: React.memo(SchedulePage),
});
