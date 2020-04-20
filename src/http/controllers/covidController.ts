import { Request, Response } from "express";

import * as covidService from "../services/covidService";

export const getCasesByCountry = async (req: Request, res: Response) => {
  try {
    const country = req.params.country;
    const { dateFrom, dateTo } = req.query;
    const response = await covidService.getCasesByCountry(
      country,
      dateFrom,
      dateTo
    );
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
