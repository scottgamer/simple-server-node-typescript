import * as weatherController from "./../controllers/weatherController";

export default [
  {
    path: "/weather",
    method: "get",
    handler: [weatherController.getCurrentWeatherByParam],
  },
];
