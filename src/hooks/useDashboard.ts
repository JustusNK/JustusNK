import { useMemo } from 'react';
import { CORE_SERVICES } from '../constants/coreServices';
import { getCurrentUser, getDashboardKpis } from '../services/dashboardService';

export const useDashboard = () => {
  return useMemo(() => {
    const user = getCurrentUser();
    const kpis = getDashboardKpis();

    return {
      user,
      kpis,
      services: CORE_SERVICES
    };
  }, []);
};
