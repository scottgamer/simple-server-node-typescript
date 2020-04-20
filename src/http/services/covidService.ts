import axios, { AxiosResponse } from "axios";

import config from "../../config";

/**
 *
 * @param countryName
 * @param dateFrom
 * @param dateTo
 */
export const getCasesByCountry = async (
  countryName: string,
  dateFrom?: Date,
  dateTo?: Date
) => {
  const startDate = "2020-03-01";
  let result: AxiosResponse<any>;
  if (dateFrom && dateTo) {
    result = await axios.get(
      `${config.COVID_API_URL}/country/${countryName}/status/confirmed?from=${dateFrom}&to=${dateTo}`
    );
  } else if (dateFrom) {
    const dateTo = new Date().toISOString();
    result = await axios.get(
      `${config.COVID_API_URL}/country/${countryName}/status/confirmed?from=${dateFrom}&to=${dateTo}`
    );
  } else if (dateTo) {
    const dateFrom = new Date(startDate).toISOString();
    result = await axios.get(
      `${config.COVID_API_URL}/country/${countryName}/status/confirmed?from=${dateFrom}&to=${dateTo}`
    );
  } else {
    const dateFrom = new Date(startDate).toISOString();
    const dateTo = new Date().toISOString();
    result = await axios.get(
      `${config.COVID_API_URL}/country/${countryName}/status/confirmed?from=${dateFrom}&to=${dateTo}`
    );
  }

  return result.data;
};
