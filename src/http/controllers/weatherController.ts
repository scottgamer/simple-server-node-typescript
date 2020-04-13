import { Request, Response } from "express";

import * as weatherService from "./../services/weatherService";

export const getHello = (req: Request, res: Response) => {
  const message = weatherService.getHello();
  res.status(200).send({ message });
};

export const getCurrentWeatherByParam = async (req: Request, res: Response) => {
  try {
    const param = req.query.param;
    const response = await weatherService.getCurrentWeatherByParam(param);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
