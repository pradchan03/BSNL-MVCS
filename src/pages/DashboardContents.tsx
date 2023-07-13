// import React, { useState } from 'react';

// import UpcomingMeetings from './UpcomingMeetings';
// import PreviousConferences from './PreviousConferences';

// interface DashboardProps{
//   viewHistory: boolean;
// }

// const DashboardContents: React.FC<DashboardProps> = ({viewHistory}) => {
//   return (
//     <>
//     {viewHistory ? (
//       <PreviousConferences />
//     ) : (
//       <UpcomingMeetings />
//     )}
//     </>
//   );
// };

// export default DashboardContents;

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
