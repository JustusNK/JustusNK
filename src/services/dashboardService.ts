import type { FarmKpi, UserProfile } from '../types';

export const getCurrentUser = (): UserProfile => ({
  id: 'u_001',
  name: 'Demo Farmer',
  role: 'FARMER',
  country: 'Kenya'
});

export const getDashboardKpis = (): FarmKpi[] => [
  { id: 'yield', label: 'Projected Yield', value: '5.8 t/ha', trend: 'up' },
  { id: 'moisture', label: 'Soil Moisture', value: '27%', trend: 'neutral' },
  { id: 'pest-risk', label: 'Pest Risk', value: 'Moderate', trend: 'down' },
  { id: 'compliance', label: 'Compliance Tasks', value: '3 Open', trend: 'neutral' }
];
