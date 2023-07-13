import React from 'react';
import UpcomingMeetings from './UpcomingMeetings';
import PreviousConferences from './PreviousConferences';

interface DashboardProps {
  viewHistory: boolean;
  searchSubject: string;
}

const DashboardContents: React.FC<DashboardProps> = ({
  viewHistory,
  searchSubject,
}) => {
  return (
    <>
      {viewHistory ? (
        <PreviousConferences />
      ) : (
        <UpcomingMeetings searchSubject={searchSubject} />
      )}
    </>
  );
};

export default DashboardContents;
