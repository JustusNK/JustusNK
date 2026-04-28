import { IEnvironmentalModelingService } from './interfaces';
import {
  ClimateScenarioData, YieldProjection, AdaptationRecommendation,
} from '../types';

const KEYS = {
  CLIMATE_SCENARIOS: 'biopro_climate_scenarios',
  YIELD_PROJECTIONS: 'biopro_yield_projections',
  ADAPTATION_RECOMMENDATIONS: 'biopro_adaptation_recommendations',
};

export class EnvironmentalModelingService implements IEnvironmentalModelingService {
  // --- Climate scenarios ---
  getClimateScenarios(farmId: string): ClimateScenarioData[] {
    const all = JSON.parse(localStorage.getItem(KEYS.CLIMATE_SCENARIOS) || '[]');
    return all.filter((s: any) => s.farmId === farmId);
  }

  getClimateScenario(id: string): ClimateScenarioData | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.CLIMATE_SCENARIOS) || '[]');
    return all.find((s: ClimateScenarioData) => s.scenarioId === id);
  }

  saveClimateScenario(scenario: ClimateScenarioData): void {
    const all = JSON.parse(localStorage.getItem(KEYS.CLIMATE_SCENARIOS) || '[]');
    const idx = all.findIndex((s: ClimateScenarioData) => s.scenarioId === scenario.scenarioId);
    if (idx >= 0) all[idx] = scenario;
    else all.push(scenario);
    localStorage.setItem(KEYS.CLIMATE_SCENARIOS, JSON.stringify(all));
  }

  // --- Yield projections ---
  getYieldProjections(filters?: { farmId?: string; fieldId?: string; cropId?: string }): YieldProjection[] {
    let all = JSON.parse(localStorage.getItem(KEYS.YIELD_PROJECTIONS) || '[]');
    if (filters?.farmId) all = all.filter((p: YieldProjection) => p.farmId === filters.farmId);
    if (filters?.fieldId) all = all.filter((p: YieldProjection) => p.fieldId === filters.fieldId);
    if (filters?.cropId) all = all.filter((p: YieldProjection) => p.cropId === filters.cropId);
    return all.sort((a: YieldProjection, b: YieldProjection) => b.year - a.year);
  }

  getYieldProjection(id: string): YieldProjection | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.YIELD_PROJECTIONS) || '[]');
    return all.find((p: YieldProjection) => p.projectionId === id);
  }

  saveYieldProjection(proj: YieldProjection): void {
    const all = JSON.parse(localStorage.getItem(KEYS.YIELD_PROJECTIONS) || '[]');
    const idx = all.findIndex((p: YieldProjection) => p.projectionId === proj.projectionId);
    if (idx >= 0) all[idx] = proj;
    else all.push(proj);
    localStorage.setItem(KEYS.YIELD_PROJECTIONS, JSON.stringify(all));
  }

  // --- Adaptation recommendations ---
  getAdaptationRecommendations(farmId: string, cropId: string, scenarioId: string): AdaptationRecommendation[] {
    const all = JSON.parse(localStorage.getItem(KEYS.ADAPTATION_RECOMMENDATIONS) || '[]');
    return all.filter((r: AdaptationRecommendation) => r.farmId === farmId && r.cropId === cropId && r.scenarioId === scenarioId);
  }
}
