import axios from "axios";

import config from "../../config";

export const getHello = () => {
  console.log(config.OW_API_KEY);

  return "Hello World";
};

export const getCurrentWeatherByParam = async (param: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${config.OW_API_KEY}`
  );
  return response.data;
};
