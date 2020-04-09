import { Request, Response } from "express";

import * as weatherService from "./../services/weatherService";

export const getHello = (req: Request, res: Response) => {
  const message = weatherService.getHello();
  res.send(200).send(message);
};
