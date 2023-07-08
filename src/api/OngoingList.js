const url = `http://35.154.233.185:8000/user/conferencelist`;
function queryConferenceList(token) {
  //attendee is a json file
  return fetch(url, {
    method: "POST", // Adjust the HTTP method (GET, POST, PUT, etc.) as required by your API
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${token}`,
      filter: {
        resultFields: [
          "StartTime",
          "Subject",
          "ConferenceID",
          "SubConferenceID",
          "ConferenceState",
          "Length",
          "TimeZone",
          "ScheduserName",
          "mediaTypes",
          "accessNumber",
          "factEndTime",
          "accountID",
          "totalSize",
        ],
        conditions: {
          key: "ConferenceState",
          value: "Destroyed",
          matching: "unequal",
        },
        isAscend: "False",
        pageIndex: 0,
        pageSize: 15,
      },
      isIncludeInvitedConference: "True",
    }),
  })
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => data);
}

export default queryConferenceList;


// console.log(convertUTCMillisecondsToDate(1621536000000).hours);