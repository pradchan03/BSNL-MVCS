import React, { useState } from 'react';

import UpcomingMeetings from './UpcomingMeetings';
import PreviousConferences from './PreviousConferences';

interface DashboardProps{
  viewHistory: boolean;
}

const DashboardContents: React.FC<DashboardProps> = ({viewHistory}) => {
  return (
    <>
    {viewHistory ? (
      <PreviousConferences />
    ) : (
      <UpcomingMeetings />
    )}
    </>
  );
};

export default DashboardContents;

