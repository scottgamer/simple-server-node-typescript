import * as covidController from "./../controllers/covidController";

export default [
  {
    path: "/country/:country/status/confirmed",
    method: "get",
    handler: [covidController.getCasesByCountry],
  },
];
