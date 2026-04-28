import { IEcologyService } from './interfaces';
import { BiodiversityObservation, BiodiversitySummary } from '../types';

const KEYS = {
  BIODIVERSITY_OBSERVATIONS: 'biopro_biodiversity_observations',
  BIODIVERSITY_SUMMARIES: 'biopro_biodiversity_summaries',
};

export class EcologyService implements IEcologyService {
  // --- Biodiversity observations ---
  getBiodiversityObservations(farmId: string, filters?: { fieldId?: string; category?: string; from?: number; to?: number }): BiodiversityObservation[] {
    let all = JSON.parse(localStorage.getItem(KEYS.BIODIVERSITY_OBSERVATIONS) || '[]');
    all = all.filter((o: BiodiversityObservation) => o.farmId === farmId);
    if (filters?.fieldId) all = all.filter((o: BiodiversityObservation) => o.fieldId === filters.fieldId);
    if (filters?.category) all = all.filter((o: BiodiversityObservation) => o.category === filters.category);
    if (filters?.from) all = all.filter((o: BiodiversityObservation) => o.timestamp >= filters.from!);
    if (filters?.to) all = all.filter((o: BiodiversityObservation) => o.timestamp <= filters.to!);
    return all.sort((a: BiodiversityObservation, b: BiodiversityObservation) => b.timestamp - a.timestamp);
  }

  getBiodiversityObservation(id: string): BiodiversityObservation | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.BIODIVERSITY_OBSERVATIONS) || '[]');
    return all.find((o: BiodiversityObservation) => o.observationId === id);
  }

  saveBiodiversityObservation(obs: BiodiversityObservation): void {
    const all = JSON.parse(localStorage.getItem(KEYS.BIODIVERSITY_OBSERVATIONS) || '[]');
    const idx = all.findIndex((o: BiodiversityObservation) => o.observationId === obs.observationId);
    if (idx >= 0) all[idx] = obs;
    else all.push(obs);
    localStorage.setItem(KEYS.BIODIVERSITY_OBSERVATIONS, JSON.stringify(all));
  }

  deleteBiodiversityObservation(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.BIODIVERSITY_OBSERVATIONS) || '[]');
    const filtered = all.filter((o: BiodiversityObservation) => o.observationId !== id);
    localStorage.setItem(KEYS.BIODIVERSITY_OBSERVATIONS, JSON.stringify(filtered));
  }

  // --- Biodiversity summaries ---
  getBiodiversitySummary(farmId: string, year: number): BiodiversitySummary | null {
    const all = JSON.parse(localStorage.getItem(KEYS.BIODIVERSITY_SUMMARIES) || '[]');
    const summary = all.find((s: BiodiversitySummary) => s.farmId === farmId && s.year === year);
    return summary || null;
  }

  saveBiodiversitySummary(summary: BiodiversitySummary): void {
    const all = JSON.parse(localStorage.getItem(KEYS.BIODIVERSITY_SUMMARIES) || '[]');
    const idx = all.findIndex((s: BiodiversitySummary) => s.summaryId === summary.summaryId);
    if (idx >= 0) all[idx] = summary;
    else all.push(summary);
    localStorage.setItem(KEYS.BIODIVERSITY_SUMMARIES, JSON.stringify(all));
  }
}
