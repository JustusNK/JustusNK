// src/types/animalMedication.ts

export type AnimalMedicationCategory =
  | 'vaccine'
  | 'antibiotic'
  | 'antiparasitic'
  | 'anti-inflammatory'
  | 'hormone'
  | 'vitamin'
  | 'mineral_supplement'
  | 'probiotic'
  | 'other';

export type MedicationFormulation =
  | 'injectable'
  | 'oral'
  | 'topical'
  | 'feed_additive'
  | 'water_soluble'
  | 'powder'
  | 'liquid'
  | 'tablet'
  | 'capsule'
  | 'other';

export interface AnimalMedication {
  medicationId: string;
  companyId: string;
  name: string;
  commercialName?: string;
  medicationCategory: AnimalMedicationCategory;
  targetSpecies: string[];                 // animal IDs from BioEncyclopedia
  activeIngredients: Array<{
    name: string;
    concentration: string;
    unit: string;
  }>;
  formulation: MedicationFormulation;
  dosage?: string;                           // e.g., "1ml per 50kg body weight"
  withdrawalPeriod?: number;                 // days before animal products can be used
  storageInstructions?: string;
  expiryDate?: number;
  price?: number;
  currency?: string;
  requiresPrescription: boolean;
  isOrganic?: boolean;
  manufacturer?: string;
  registrationNumber?: string;
  images: string[];
  // Efficacy aggregate
  averageEfficacy?: number;
  efficacyCount?: number;
  created: number;
  updated: number;
}
