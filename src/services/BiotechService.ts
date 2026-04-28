import { IBiotechService } from './interfaces';
import {
  GeneticElement, Construct, TransformationEvent, FieldTrial, FieldTrialMeasurement,
} from '../types';

const KEYS = {
  GENETIC_ELEMENTS: 'biopro_genetic_elements',
  CONSTRUCTS: 'biopro_constructs',
  TRANSFORMATION_EVENTS: 'biopro_transformation_events',
  FIELD_TRIALS: 'biopro_field_trials',
  FIELD_TRIAL_MEASUREMENTS: 'biopro_field_trial_measurements',
};

export class BiotechService implements IBiotechService {
  // --- Genetic elements ---
  getGeneticElements(filters?: { createdBy?: string; type?: string }): GeneticElement[] {
    let all = JSON.parse(localStorage.getItem(KEYS.GENETIC_ELEMENTS) || '[]');
    if (filters?.createdBy) all = all.filter((el: GeneticElement) => el.createdBy === filters.createdBy);
    if (filters?.type) all = all.filter((el: GeneticElement) => el.type === filters.type);
    return all;
  }

  getGeneticElement(id: string): GeneticElement | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.GENETIC_ELEMENTS) || '[]');
    return all.find((el: GeneticElement) => el.elementId === id);
  }

  saveGeneticElement(el: GeneticElement): void {
    const all = JSON.parse(localStorage.getItem(KEYS.GENETIC_ELEMENTS) || '[]');
    const idx = all.findIndex((e: GeneticElement) => e.elementId === el.elementId);
    if (idx >= 0) all[idx] = el;
    else all.push(el);
    localStorage.setItem(KEYS.GENETIC_ELEMENTS, JSON.stringify(all));
  }

  deleteGeneticElement(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.GENETIC_ELEMENTS) || '[]');
    const filtered = all.filter((e: GeneticElement) => e.elementId !== id);
    localStorage.setItem(KEYS.GENETIC_ELEMENTS, JSON.stringify(filtered));
  }

  // --- Constructs ---
  getConstructs(filters?: { createdBy?: string }): Construct[] {
    let all = JSON.parse(localStorage.getItem(KEYS.CONSTRUCTS) || '[]');
    if (filters?.createdBy) all = all.filter((c: Construct) => c.createdBy === filters.createdBy);
    return all;
  }

  getConstruct(id: string): Construct | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.CONSTRUCTS) || '[]');
    return all.find((c: Construct) => c.constructId === id);
  }

  saveConstruct(construct: Construct): void {
    const all = JSON.parse(localStorage.getItem(KEYS.CONSTRUCTS) || '[]');
    const idx = all.findIndex((c: Construct) => c.constructId === construct.constructId);
    if (idx >= 0) all[idx] = construct;
    else all.push(construct);
    localStorage.setItem(KEYS.CONSTRUCTS, JSON.stringify(all));
  }

  deleteConstruct(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.CONSTRUCTS) || '[]');
    const filtered = all.filter((c: Construct) => c.constructId !== id);
    localStorage.setItem(KEYS.CONSTRUCTS, JSON.stringify(filtered));
  }

  // --- Transformation events ---
  getTransformationEvents(filters?: { createdBy?: string; cropId?: string }): TransformationEvent[] {
    let all = JSON.parse(localStorage.getItem(KEYS.TRANSFORMATION_EVENTS) || '[]');
    if (filters?.createdBy) all = all.filter((e: TransformationEvent) => e.createdBy === filters.createdBy);
    if (filters?.cropId) all = all.filter((e: TransformationEvent) => e.targetCropId === filters.cropId);
    return all;
  }

  getTransformationEvent(id: string): TransformationEvent | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.TRANSFORMATION_EVENTS) || '[]');
    return all.find((e: TransformationEvent) => e.eventId === id);
  }

  saveTransformationEvent(event: TransformationEvent): void {
    const all = JSON.parse(localStorage.getItem(KEYS.TRANSFORMATION_EVENTS) || '[]');
    const idx = all.findIndex((e: TransformationEvent) => e.eventId === event.eventId);
    if (idx >= 0) all[idx] = event;
    else all.push(event);
    localStorage.setItem(KEYS.TRANSFORMATION_EVENTS, JSON.stringify(all));
  }

  deleteTransformationEvent(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.TRANSFORMATION_EVENTS) || '[]');
    const filtered = all.filter((e: TransformationEvent) => e.eventId !== id);
    localStorage.setItem(KEYS.TRANSFORMATION_EVENTS, JSON.stringify(filtered));
  }

  // --- Field trials ---
  getFieldTrials(filters?: { createdBy?: string; cropId?: string; status?: string }): FieldTrial[] {
    let all = JSON.parse(localStorage.getItem(KEYS.FIELD_TRIALS) || '[]');
    if (filters?.createdBy) all = all.filter((t: FieldTrial) => t.createdBy === filters.createdBy);
    if (filters?.cropId) all = all.filter((t: FieldTrial) => t.cropId === filters.cropId);
    if (filters?.status) all = all.filter((t: FieldTrial) => t.status === filters.status);
    return all;
  }

  getFieldTrial(id: string): FieldTrial | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.FIELD_TRIALS) || '[]');
    return all.find((t: FieldTrial) => t.trialId === id);
  }

  saveFieldTrial(trial: FieldTrial): void {
    const all = JSON.parse(localStorage.getItem(KEYS.FIELD_TRIALS) || '[]');
    const idx = all.findIndex((t: FieldTrial) => t.trialId === trial.trialId);
    if (idx >= 0) all[idx] = trial;
    else all.push(trial);
    localStorage.setItem(KEYS.FIELD_TRIALS, JSON.stringify(all));
  }

  deleteFieldTrial(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.FIELD_TRIALS) || '[]');
    const filtered = all.filter((t: FieldTrial) => t.trialId !== id);
    localStorage.setItem(KEYS.FIELD_TRIALS, JSON.stringify(filtered));
  }

  // --- Measurements ---
  getMeasurements(trialId: string): FieldTrialMeasurement[] {
    const all = JSON.parse(localStorage.getItem(KEYS.FIELD_TRIAL_MEASUREMENTS) || '[]');
    return all.filter((m: FieldTrialMeasurement) => m.trialId === trialId);
  }

  addMeasurement(measurement: FieldTrialMeasurement): void {
    const all = JSON.parse(localStorage.getItem(KEYS.FIELD_TRIAL_MEASUREMENTS) || '[]');
    const newMeas = { ...measurement, measurementId: `meas-${Date.now()}-${Math.random().toString(36).substr(2,9)}` };
    all.push(newMeas);
    localStorage.setItem(KEYS.FIELD_TRIAL_MEASUREMENTS, JSON.stringify(all));
  }

  deleteMeasurement(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.FIELD_TRIAL_MEASUREMENTS) || '[]');
    const filtered = all.filter((m: FieldTrialMeasurement) => m.measurementId !== id);
    localStorage.setItem(KEYS.FIELD_TRIAL_MEASUREMENTS, JSON.stringify(filtered));
  }
}
