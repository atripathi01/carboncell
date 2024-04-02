import { AxiosWrapper } from './axiosWrapper';
import { BitcoinData, PopulationData } from './types';

export const getPopulationData = async (
  drilldowns: string = 'Nation',
  measures: string = 'Population'
) =>
  AxiosWrapper<PopulationData>({
    method: 'GET',
    url: `https://datausa.io/api/data?drilldowns=${drilldowns}&measures=${measures}`,
    defaultHeaders: true,
  });

export const getCryptocurrencyPrices = async () =>
  AxiosWrapper<BitcoinData>({
    method: 'GET',
    url: `https://api.coindesk.com/v1/bpi/currentprice.json`,
    defaultHeaders: true,
  });
