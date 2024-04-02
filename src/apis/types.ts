import { ReactElement } from 'react';

export type RouterConfig = {
  element?: ReactElement; // React element // React element for the component
  path?: string; // Path for the route
  children?: {
    path?: string; // Path for the route
    element?: ReactElement; // React element for the component
  }[];
};

export interface PopulationData {
  'ID Nation'?: string;
  Nation?: string;
  'ID Year'?: number;
  Year?: string;
  Population?: number;
  'Slug Nation'?: string;
}

export interface Time {
  updated?: string;
  updatedISO?: string;
  updateduk?: string;
}

export interface Currency {
  code?: string;
  symbol?: string;
  rate?: string;
  description?: string;
  rate_float?: number;
}

export interface Bpi {
  USD?: Currency;
  GBP?: Currency;
  EUR?: Currency;
}

export interface BitcoinData {
  time?: Time;
  disclaimer?: string;
  chartName?: string;
  bpi?: Bpi;
}
