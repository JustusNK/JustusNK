// src/types/propagation.ts

export type PropagationType =
  | 'seed'
  | 'cutting'
  | 'bulb'
  | 'tuber'
  | 'rhizome'
  | 'graft'
  | 'tissue_culture'
  | 'seedling'
  | 'spore'
  | 'other';

export interface PropagationMaterial {
  materialId: string;
  companyId: string;
  name: string;
  propagationType: PropagationType;
  plantId: string;                       // base plant (from BioEncyclopedia)
  varietyId?: string;                     // optional specific variety
  description?: string;
  images: string[];
  quantityAvailable?: number;
  unit: 'kg' | 'g' | 'pieces' | 'trays' | 'plants' | 'ml' | 'l';
  price?: number;
  currency?: string;
  certifications?: string[];
  storageInstructions?: string;
  handlingInstructions?: string;
  shelfLifeDays?: number;
  germinationRate?: number;                // percentage (for seeds)
  purity?: number;                         // percentage (for seeds)
  // Biotechnology / regulatory
  gmoStatus?: 'GMO' | 'NON-GMO' | 'UNSPECIFIED';
  organicCertified?: boolean;
  organicCertificationBody?: string;
  treatedWithChemicals?: string[];
  istaCertified?: boolean;
  oecdScheme?: boolean;
  certificationsDetailed?: Array<{
    type: string;
    certificateNumber?: string;
    issueDate?: number;
    expiryDate?: number;
    issuingBody?: string;
  }>;
  // Efficacy aggregate
  averageEfficacy?: number;
  efficacyCount?: number;
  created: number;
  updated: number;
}
