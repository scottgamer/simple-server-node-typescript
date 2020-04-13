import * as weatherController from "./../controllers/weatherController";

export default [
  {
    path: "/",
    method: "get",
    handler: [weatherController.getHello],
  },
  {
    path: "/weather",
    method: "get",
    handler: [weatherController.getCurrentWeatherByParam],
  },
];
