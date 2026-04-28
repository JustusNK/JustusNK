// src/constants/coreServices.ts

import { AppView } from '../types';

// Core services considered essential for each role in simple mode
export const CORE_SERVICES: Record<string, AppView[]> = {
  default: [
    AppView.DASHBOARD,
    AppView.SCANNER,
    AppView.ENCYCLOPEDIA,
    AppView.WEATHER_HUB,
    AppView.ADVICE_HUB,
  ],
  FARMER: [
    AppView.DASHBOARD,
    AppView.SCANNER,
    AppView.ENCYCLOPEDIA,
    AppView.WEATHER_HUB,
    AppView.ADVICE_HUB,
    AppView.CULTIVATION_HUB,
    AppView.LAND_REGISTRY,
    AppView.FARMER_RECORDS,
  ],
  AGRONOMIST: [
    AppView.DASHBOARD,
    AppView.SCANNER,
    AppView.ENCYCLOPEDIA,
    AppView.CHEMICAL_REGISTRY,
    AppView.ADVICE_HUB,
    AppView.LAB_PROCEDURES,
  ],
  VETERINARIAN: [
    AppView.DASHBOARD,
    AppView.SCANNER,
    AppView.ENCYCLOPEDIA,
    AppView.ADVICE_HUB,
    AppView.LIVESTOCK_DASHBOARD,
  ],
  // Add other roles as needed; they will fall back to default
};
