// src/types/scouting.ts

import { BioEntity } from './index';

export interface ScoutingSession {
  sessionId: string;
  farmId: string;
  fieldId: string;
  fieldName: string;
  startTime: number;
  endTime?: number;
  scoutId: string;
  scoutName: string;
  cropsPresent: ScoutingCrop[];
  animalsPresent?: ScoutingAnimal[];
  weather: ScoutingWeather;
  observations: ScoutingObservation[];
  summary?: ScoutingSummary;
  status: 'in-progress' | 'completed' | 'cancelled';
}

export interface ScoutingCrop {
  cropId: string;
  cropName: string;
  variety?: string;
  growthStage: string;
  plantingDate: number;
  areaPercentage: number;                      // For intercropping
  rowSpacing?: number;
  plantPopulation?: number;
}

export interface ScoutingAnimal {
  animalId: string;
  animalName: string;
  breed?: string;
  count: number;
  location: string;
  healthStatus?: string;
}

export interface ScoutingWeather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  conditions: string;
  recentRainfall: number;
  soilMoisture?: number;
}

export interface ScoutingObservation {
  observationId: string;
  timestamp: number;
  organismId: string;
  organismName: string;
  scientificName: string;
  category: string;
  associatedCropId?: string;                    // Which crop this organism was found on
  severity: 'low' | 'medium' | 'high' | 'critical';
  count?: number;
  percentageInfected?: number;
  location: {
    lat: number;
    lng: number;
    section?: string;
  };
  photos?: string[];
  notes?: string;
  recommendations?: string[];
  treatmentApplied?: boolean;
  treatmentId?: string;
  imageData?: string;                           // for scan
  countMethod?: 'manual' | 'auto' | 'estimated';
  confidence?: number;
  recommendedChemicalIds?: string[];             // chemical IDs
}

export interface ScoutingSummary {
  totalObservations: number;
  criticalIssues: number;
  highPriorityIssues: number;
  organismsFound: Array<{
    organismId: string;
    name: string;
    count: number;
    severity: string;
    affectedCrops: string[];
  }>;
  recommendations: string[];
  nextScoutingDate?: number;
}

export interface ScanSession {
  scanId: string;
  sessionId: string;
  timestamp: number;
  imageData: string;
  identifiedOrganisms: IdentifiedOrganism[];
  location: { lat: number; lng: number };
  cropContext?: string;
  count?: number;
  confidence: number;
  processingTime: number;
}

export interface IdentifiedOrganism {
  organismId: string;
  name: string;
  scientificName: string;
  category: string;
  confidence: number;
  boundingBox?: { x: number; y: number; width: number; height: number };
  count?: number;
  suggestions?: TreatmentSuggestion[];
}

export interface TreatmentSuggestion {
  type: 'chemical' | 'biological' | 'cultural';
  name: string;
  efficacy: number;
  applicationRate?: string;
  organic: boolean;
}
