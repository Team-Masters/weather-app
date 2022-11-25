export async function getCalendarEvents() {
  var gapi = window.gapi;
  var API_KEY = "AIzaSyDjOmUfOFphy62WfxzbK4sZWabX5mC6a2A";
  var CLIENT_ID =
    "289358638150-bhonr4g2buq9tftbbss39cqbofc9duag.apps.googleusercontent.com";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  return new Promise((resolve, reject) => {
    gapi.load("client:auth2", () => {
      console.log("load client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        plugin_name: "Weather-app",
      });

      gapi.client.load("calendar", "v3", () => console.log("bom"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          gapi.client.calendar.events
            .list({
              calendarId: "primary",
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 3,
              orderBy: "startTime",
            })
            .then((response) => {
              const events = response.result.items;
              resolve(events);
            });
        });
    });
  });
}
