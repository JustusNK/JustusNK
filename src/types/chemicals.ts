// src/types/chemicals.ts

import { BioEntity } from './index';

export type ChemicalCategory =
  | 'pesticide'
  | 'herbicide'
  | 'fungicide'
  | 'insecticide'
  | 'acaricide'
  | 'nematicide'
  | 'rodenticide'
  | 'molluscicide'
  | 'bactericide'
  | 'virucide'
  | 'plant_growth_regulator'
  | 'fertilizer'
  | 'soil_amendment'
  | 'adjuvant'
  | 'other';

export type FormulationType =
  | 'liquid'
  | 'granular'
  | 'powder'
  | 'pellet'
  | 'aerosol'
  | 'wettable_powder'
  | 'emulsifiable_concentrate'
  | 'soluble_concentrate'
  | 'suspension_concentrate'
  | 'water_dispersible_granules'
  | 'other';

export type ToxicityClass = 'I' | 'II' | 'III' | 'IV';

export type SignalWord = 'Danger' | 'Warning' | 'Caution';

export interface ChemicalProduct {
  productId: string;
  companyId: string;
  name: string;
  commercialName?: string;
  activeIngredients: Array<{
    name: string;
    concentration: string;
    unit: string;
  }>;
  chemicalCategory: ChemicalCategory;
  targetPests: string[];               // organism IDs
  targetCrops: string[];                // organism IDs
  modeOfAction?: {
    group: string;
    code: string;
    description?: string;
  };
  formulation: FormulationType;
  formulationDetails?: string;
  epaRegNumber?: string;
  whoClassification?: string;
  toxicityClass: ToxicityClass;
  signalWord: SignalWord;
  precautionaryStatements: string[];
  firstAid: string;
  storage: string;
  disposal: string;
  phiDays: number;                       // pre-harvest interval
  reiHours: number;                       // re-entry interval
  applicationRate: {
    min: number;
    max: number;
    unit: string;
  };
  price?: number;
  currency?: string;
  registrationNumber?: string;
  msdsUrl?: string;
  images: string[];
  resistanceRisk?: 'low' | 'medium' | 'high';
  resistanceManagementNotes?: string;
  isOrganic: boolean;
  isSynthetic: boolean;
  isBanned?: boolean;                     // derived from bans
  // Regulatory attributes
  organicAllowed?: boolean;
  approvedInMarkets?: string[];            // market codes where registered
  bannedIn?: string[];                     // country codes where banned
  maxResidueLimits?: Array<{
    market: string;
    mrl: number;
    unit?: string;
  }>;
  // Safety & handling
  handlingProcedures?: string;
  emergencyProcedures?: string;
  firstAidInstructions?: string;
  spillProcedures?: string;
  disposalProcedures?: string;
  sdsUrl?: string;
  handlingVideoUrl?: string;
  emergencyContact?: {
    phone: string;
    email?: string;
    hours?: string;
  };
  proceduresLastUpdated?: number;
  proceduresVersion?: string;
  // Efficacy aggregate (computed)
  averageEfficacy?: number;
  efficacyCount?: number;
  // Additional for compliance
  prohibitedPests?: string[];              // pests for which this chemical is prohibited
  activeIngredientIds?: string[];           // compound IDs
  created: number;
  updated: number;
}

export interface ChemicalBan {
  banId: string;
  chemicalId: string;
  countryCode: string;
  countryName: string;
  banDate: string;
  effectiveDate: string;
  banType: 'full' | 'agricultural' | 'restricted' | 'phase_out';
  reason: string;
  legalReference?: string;
  legalDocumentUrl?: string;
  researchIds?: string[];
  enforcingAgency: string;
  agencyId: string;
  lastUpdated: number;
  verified: boolean;
  notes?: string;
  repostedFrom?: {
    originalBanId: string;
    originalCountryCode: string;
    originalCountryName: string;
    originalTitle: string;
    repostedAt: number;
  };
  title?: string;   // for consistency
}

export interface ChemicalWarning {
  warningId: string;
  chemicalId: string;
  countryCode?: string;
  countryName?: string;
  warningDate: string;
  warningType: 'health' | 'environmental' | 'worker_safety' | 'wildlife' | 'resistance' | 'other';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  researchIds?: string[];
  externalResearchUrls?: string[];
  ngoId: string;
  ngoName: string;
  ngoLogo?: string;
  lastUpdated: number;
  verified: boolean;
  expiryDate?: string;
  repostedFrom?: {
    originalWarningId: string;
    originalNgoId: string;
    originalNgoName: string;
    originalTitle: string;
    repostedAt: number;
  };
}

export interface ChemicalSelection {
  chemicalId: string;
  name: string;
  commercialName?: string;
  category: ChemicalCategory;
  isOrganic: boolean;
  isBanned?: boolean;
  confidence?: number;
}
