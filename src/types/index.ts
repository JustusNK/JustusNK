// src/types/index.ts

// Core types that were originally in the main types file
import { ChemicalProduct, ChemicalCategory, ChemicalBan, ChemicalWarning } from './chemicals';
import { PropagationMaterial, PropagationType } from './propagation';
import { AnimalMedication, AnimalMedicationCategory, MedicationFormulation } from './animalMedication';
import { EfficacyRecord, EfficacyEntityType, AggregateEfficacy } from './efficacy';
import { ScoutingSession, ScoutingObservation, ScoutingCrop, ScoutingWeather, ScoutingSummary } from './scouting';

export * from './chemicals';
export * from './propagation';
export * from './animalMedication';
export * from './efficacy';
export * from './scouting';

// ==================== Core Enums ====================

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  RESEARCH = 'RESEARCH',
  ENCYCLOPEDIA = 'ENCYCLOPEDIA',
  SCANNER = 'SCANNER',
  CHEMICAL_REGISTRY = 'CHEMICAL_REGISTRY',
  GEO_ADVISOR = 'GEO_ADVISOR',
  MANAGEMENT = 'MANAGEMENT',
  AUTH = 'AUTH',
  SETTINGS = 'SETTINGS',
  VIDEO_GENERATOR = 'VIDEO_GENERATOR',
  TOOL_REGISTRY = 'TOOL_REGISTRY',
  MARKETPLACE = 'MARKETPLACE',
  FINANCE_HUB = 'FINANCE_HUB',
  GOV_NGO_HUB = 'GOV_NGO_HUB',
  UNIVERSITY_HUB = 'UNIVERSITY_HUB',
  FARMER_RECORDS = 'FARMER_RECORDS',
  BUYER_LEDGER = 'BUYER_LEDGER',
  GROUP_MANAGEMENT = 'GROUP_MANAGEMENT',
  COMPANY_REGISTRY = 'COMPANY_REGISTRY',
  FIELD_MAP = 'FIELD_MAP',
  VOICE_ASSISTANT = 'VOICE_ASSISTANT',
  WEATHER_HUB = 'WEATHER_HUB',
  LAND_REGISTRY = 'LAND_REGISTRY',
  CULTIVATION_HUB = 'CULTIVATION_HUB',
  HOUSE_PLANT_HUB = 'HOUSE_PLANT_HUB',
  WELCOME_ENTRY = 'WELCOME_ENTRY',
  LEARNING_HUB = 'LEARNING_HUB',
  INSURANCE_HUB = 'INSURANCE_HUB',
  ADMIN_CONSOLE = 'ADMIN_CONSOLE',
  LAB_PROCEDURES = 'LAB_PROCEDURES',
  BAN_LIST = 'BAN_LIST',
  BAN_MANAGER = 'BAN_MANAGER',
  WARNING_LIST = 'WARNING_LIST',
  WARNING_MANAGER = 'WARNING_MANAGER',
  TAXONOMY_BROWSER = 'TAXONOMY_BROWSER',
  RELATIONSHIP_MANAGER = 'RELATIONSHIP_MANAGER',
  ROTATION_PLANNER = 'ROTATION_PLANNER',
  ROTATION_SUGGEST = 'ROTATION_SUGGEST',
  ROTATION_VERIFY = 'ROTATION_VERIFY',
  ADVICE_HUB = 'ADVICE_HUB',
  ROLE_MANAGER = 'ROLE_MANAGER',
  TRANSPORTER_OPT_IN = 'TRANSPORTER_OPT_IN',
  ADMIN_APPROVAL_QUEUE = 'ADMIN_APPROVAL_QUEUE',
  PHASED_OUT_MANAGER = 'PHASED_OUT_MANAGER',
  REPOST_MODAL = 'REPOST_MODAL',
  NOTIFICATIONS = 'NOTIFICATIONS',
  EVENTS = 'EVENTS',
  VARIETY_MANAGER = 'VARIETY_MANAGER',
  LAB_PROCEDURE_EDITOR = 'LAB_PROCEDURE_EDITOR',
  SENSOR_DASHBOARD = 'SENSOR_DASHBOARD',
  CARBON_PROJECT_MANAGER = 'CARBON_PROJECT_MANAGER',
  CARBON_MARKETPLACE = 'CARBON_MARKETPLACE',
  PRODUCT_SAFETY_MANAGER = 'PRODUCT_SAFETY_MANAGER',
  EFFICACY_DASHBOARD = 'EFFICACY_DASHBOARD',
  LIVESTOCK_DASHBOARD = 'LIVESTOCK_DASHBOARD',
  MACHINERY_DASHBOARD = 'MACHINERY_DASHBOARD',
  COMPOUND_ENCYCLOPEDIA = 'COMPOUND_ENCYCLOPEDIA',
  CONSULTATION_HUB = 'CONSULTATION_HUB',
  MY_CONSULTATIONS = 'MY_CONSULTATIONS',
  PROFESSIONAL_DASHBOARD = 'PROFESSIONAL_DASHBOARD',
  CLIMATE_MODELING = 'CLIMATE_MODELING',
  BIOTECHNOLOGY = 'BIOTECHNOLOGY',
}

export type UserRole =
  | 'FARMER'
  | 'AGRONOMIST'
  | 'RESEARCHER'
  | 'CONSULTANT'
  | 'EXTENSION_OFFICER'
  | 'VETERINARIAN'
  | 'SELLER'
  | 'CHEMICAL_COMPANY'
  | 'MANUFACTURER'
  | 'FINANCIAL_INSTITUTION'
  | 'FINANCIAL_COOPERATIVE'
  | 'INSURANCE_COMPANY'
  | 'NGO'
  | 'GOVERNMENT_AGENCY'
  | 'UNIVERSITY'
  | 'BUYER'
  | 'FARMER_GROUP'
  | 'INPUT_DEALER'
  | 'SERVICE_PROVIDER'
  | 'WEATHER_STATION'
  | 'STUDENT'
  | 'LEARNER'
  | 'LECTURER'
  | 'SUPER_ADMIN'
  | 'CONTENT_CURATOR'
  | 'SUPPORT_STAFF'
  | 'FARM_MANAGER'
  | 'LIVESTOCK_MANAGER'
  | 'REGISTRAR'
  | 'DEPT_HEAD'
  | 'EXAMS_OFFICER'
  | 'VERIFIER'
  | 'AUDITOR'
  | 'DAIRY_HERD_MANAGER'
  | 'POULTRY_MANAGER'
  | 'FEEDLOT_MANAGER'
  | 'GREENHOUSE_MANAGER'
  | 'ORCHARD_MANAGER'
  | 'APIARIST'
  | 'AQUACULTURE_MANAGER'
  | 'SOIL_SCIENTIST'
  | 'HORTICULTURIST'
  | 'PLANT_BREEDER'
  | 'ENTOMOLOGIST'
  | 'PLANT_PATHOLOGIST'
  | 'PRECISION_AG_SPECIALIST'
  | 'PEST_CONTROL_ADVISOR'
  | 'ANIMAL_SCIENTIST'
  | 'ANIMAL_GENETICIST'
  | 'ANIMAL_BREEDER'
  | 'VET_TECH'
  | 'LIVESTOCK_NUTRITIONIST'
  | 'AG_ENGINEER'
  | 'PRECISION_AG_TECH'
  | 'EQUIPMENT_OPERATOR'
  | 'EQUIPMENT_MECHANIC'
  | 'FOOD_PROCESS_ENGINEER'
  | 'IRRIGATION_ENGINEER'
  | 'DRONE_OPERATOR'
  | 'FOOD_SCIENTIST'
  | 'AG_INSPECTOR'
  | 'FOOD_SAFETY_SPECIALIST'
  | 'QA_MANAGER'
  | 'FLAVOR_TECHNOLOGIST'
  | 'SENSORY_SCIENTIST'
  | 'AG_ECONOMIST'
  | 'AGRIBUSINESS_MANAGER'
  | 'AG_SALES_REP'
  | 'COMMODITY_TRADER'
  | 'LOGISTICS_ANALYST'
  | 'AG_LOAN_OFFICER'
  | 'LAND_APPRAISER'
  | 'AG_MARKETING_SPECIALIST'
  | 'SOIL_CONSERVATIONIST'
  | 'WATER_RESOURCE_MANAGER'
  | 'FORESTER'
  | 'FISHERIES_BIOLOGIST'
  | 'CONSERVATION_SCIENTIST'
  | 'ENVIRONMENTAL_CONSULTANT'
  | 'SUSTAINABILITY_CONSULTANT'
  | 'HYDROLOGIST'
  | 'AG_EDUCATOR'
  | 'AG_JOURNALIST'
  | 'AG_COMM_SPECIALIST'
  | 'YOUTH_DEV_LEADER'
  | 'PR_EXECUTIVE'
  | 'HOUSE_PLANT_OWNER'
  | 'PET_OWNER'
  | 'TRANSPORTER'
  | 'BUYER_ADMIN';

// ==================== Core Interfaces ====================

export interface CollaborativeGroup {
  id: string;
  name: string;
  description: string;
  type: 'STUDY' | 'GOAL' | 'SQUAD';
  creatorId: string;
  memberIds: string[];
  pendingGovIds: string[];
  sharedResourceIds: string[];
  timestamp: number;
  isPublic: boolean;
  registrationNumber?: string;
  taxId?: string;
  kycDocuments: KYCDocument[];
  geofence?: {
    lat: number;
    lng: number;
    radiusKm: number;
  };
  breedRestriction?: string;
}

export interface SharedResource {
  id: string;
  groupId: string;
  type: 'ENTITY' | 'PROCEDURE' | 'CHEMICAL' | 'CHAIN';
  resourceId: string;
  label: string;
  metadata?: {
    taxonomyLevel?: 'PHYLUM' | 'ORDER' | 'FAMILY' | 'GENUS';
    taxonomyValue?: string;
  };
}

export type EntityCategory =
  | 'PLANT'
  | 'PEST'
  | 'CHEMICAL'
  | 'ANIMAL'
  | 'DISEASE'
  | 'PARASITE'
  | 'MICRO_ORGANISM'
  | 'AQUACULTURE'
  | 'FORESTRY'
  | 'APICULTURE'
  | 'SOIL_BIOTA'
  | 'POULTRY'
  | 'EXOTIC'
  | 'HOUSE_PLANT'
  | 'PET'
  | 'ALL';

// ==================== Plant Part & Toxicity ====================

export interface NutritionalProfile {
  water?: number;                // g per 100g
  energy?: number;                // kcal
  protein?: number;               // g
  fat?: number;                    // g
  carbohydrate?: number;           // g
  fiber?: number;                  // g
  vitamins?: {
    vitaminA?: number;              // µg
    vitaminC?: number;              // mg
    vitaminE?: number;              // mg
    thiamin?: number;               // mg
    riboflavin?: number;            // mg
    niacin?: number;                // mg
    folate?: number;                // µg
  };
  minerals?: {
    calcium?: number;               // mg
    iron?: number;                  // mg
    magnesium?: number;             // mg
    phosphorus?: number;            // mg
    potassium?: number;             // mg
    zinc?: number;                  // mg
    copper?: number;                 // mg
    manganese?: number;              // mg
    selenium?: number;               // µg
  };
  vitaminCompounds?: Record<string, string>; // compoundId keyed by vitamin name
  mineralCompounds?: Record<string, string>;
}

export interface ToxicityInfo {
  isPoisonous: boolean;
  poisonousToAll?: boolean;
  nonPoisonousToAll?: boolean;
  poisonousTo?: string[];          // animal IDs
  safeFor?: string[];              // animal IDs
  toxicCompounds?: string[];        // compound IDs
  symptoms?: string[];
  notes?: string;
}

export interface PlantPart {
  partId: string;
  partName: string;
  description?: string;
  nutritionalProfile?: NutritionalProfile;
  toxicity?: ToxicityInfo;
}

// ==================== BioEntity ====================

export interface BioEntity {
  id: string;
  name: string;
  scientificName: string;
  category: EntityCategory;
  subCategory?: string;
  description: string;
  image?: string;
  threatLevel?: string;
  nativeRange?: string;
  timestamp: number;
  ownerId?: string;
  associatedChemicalIds: string[];
  associatedCompanyIds: string[];
  labTestingProcedures?: string;
  taxonId?: string;                // Link to taxonomic backbone
  kingdom: string;                  // Denormalized for quick access
  taxonomy?: {
    phylum?: string;
    class?: string;
    order?: string;
    family?: string;
    genus?: string;
  };
  growthRequirements?: {
    temperatureRange?: string;
    moistureLevel?: string;
    soilPH?: string;
    salinityRange?: string;
    canopyDensity?: string;
    pollinationType?: string;
    microbialActivity?: string;
    waterDepth?: string;
    altitudeRange?: string;
    wateringFrequency?: string;
    lightRequirement?: string;
    humidityPreference?: string;
    exerciseLevel?: string;
    dietType?: string;
    lifespan?: string;
  };
  relationships?: string[];          // array of relationship IDs
  plantParts?: PlantPart[];          // Only for plants
  // For rotation advice
  nitrogenRequirement?: 'low' | 'medium' | 'high';
  waterRequirement?: 'low' | 'medium' | 'high';
  recommendedSuccessors?: string[];
  avoidAfterTaxa?: string[];          // list of taxonIds to avoid planting after
  daysToMaturity?: number;
  plantingSeasons?: ('spring' | 'summer' | 'autumn' | 'winter' | 'dry' | 'wet')[];
  expectedYieldPerHa?: number;
  yieldUnit?: string;
  estimatedProductionCostPerHa?: number;
  // Biotechnology
  isGMO?: boolean;
  gmoEventIds?: string[];
  // Pest/disease favorable conditions
  favorableConditions?: {
    temperatureMin?: number;
    temperatureMax?: number;
    humidityMin?: number;
    humidityMax?: number;
    rainfallMin?: number;
    rainfallMax?: number;
    afterRainDays?: number;
  };
  quarantineRegions?: string[];
}

export interface FriendRequest {
  id: string;
  fromId: string;
  fromName: string;
  toId: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  timestamp: number;
}

export interface KYCDocument {
  id: string;
  type: string;
  name: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED';
  timestamp: number;
}

// ==================== User Profile ====================

export interface Education {
  level: 'certificate' | 'diploma' | 'bachelor' | 'master' | 'phd';
  field: string;
  institution?: string;
  year?: number;
}

export interface UserProfile {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  phone: string;
  password?: string;
  email?: string;
  role: UserRole;
  isFarmer: boolean;
  isServiceProvider?: boolean;
  organization?: string;
  department?: string;
  isVerified: boolean;
  kycDocuments: KYCDocument[];
  location?: {
    lat: number;
    lng: number;
    zone?: string;
    address?: string;
    city?: string;
    region?: string;
    country?: string;
    postalCode?: string;
  };
  paymentCycleStartDay?: number;
  groupId?: string;
  customerCareNodes?: CustomerCareNode[];
  hIndex?: number;
  subRoles?: UserRole[];
  insuranceMetadata?: any;
  groupRole?: string;
  groupPermissions?: string[];
  groupMetadata?: { registrationNumber: string };
  friends: string[];
  organizationDetails?: { logoUrl?: string };
  preferences?: any;
  activeRoles?: UserRole[];          // if undefined, only primary role is active
  pinnedServices?: AppView[];        // services the user has pinned to home screen
  notificationPreferences?: {
    email: boolean;
    sms: boolean;
    push: boolean;
    inApp: boolean;
  };
  professionalVerification?: {
    status: 'pending' | 'verified' | 'rejected';
    documents?: string[];
    verifiedAt?: number;
  };
  institutionId?: string;             // if user belongs to an institution
  appMode?: 'simple' | 'advanced';     // UI simplification mode
  education?: Education[];             // academic background
  permissions?: string[];               // custom permissions for super‑admin assignment
  alertPreferences?: {
    enabled: boolean;
    radiusKm: number;
    cropsOfInterest?: string[];
    pestsOfInterest?: string[];
    notifyVia: ('push' | 'sms' | 'email')[];
  };
}

export interface CustomerCareNode {
  phone: string;
  location: string;
}

// ==================== Land Parcel ====================

export interface LandParcel {
  id: string;
  farmerId: string;
  name: string;
  polygon: { lat: number; lng: number }[];
  calculatedArea: number;
  status: 'VERIFIED' | 'PENDING' | 'DISPUTED';
  timestamp: number;
  ownershipType: 'OWNED' | 'LEASED';
  documentRef: string;
  crops?: { plantId: string; varietyId?: string; plantingDate: number; area: number }[];
  sections?: FarmSection[];
  countryCode?: string;
  isOrganic?: boolean;
  hasIrrigation?: boolean;
  type?: string;
}

export interface FarmSection {
  sectionId: string;
  farmId: string;
  name: string;
  area?: number;
  soilType?: string;
  notes?: string;
  createdAt: number;
  updatedAt: number;
}

// ==================== Collection Record ====================

export interface CollectionRecord {
  id: string;
  buyerId: string;
  farmerId: string;
  amount: number;
  unit: string;
  commodity: string;
  timestamp: number;
  notes?: string;
  location?: { lat: number; lng: number; accuracy?: number };
  price?: number;
  total?: number;
}

// ==================== Weather Report ====================

export interface WeatherReport {
  id: string;
  stationId: string;
  stationName: string;
  location: { lat: number; lng: number; zone: string };
  temperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  pressure: number;
  prediction: string;
  timestamp: number;
  isVerified: boolean;
  alertLevel: 'INFO' | 'WARNING' | 'CRITICAL';
}

// ==================== Group Invitation ====================

export interface GroupInvitation {
  id: string;
  groupId: string;
  groupName: string;
  farmerId: string;
  farmerName: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  timestamp: number;
}

// ==================== Research Paper ====================

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  keywords: string[];
  authors: { name: string; affiliation: string }[];
  correspondingAuthorId: string;
  publicationDate: number;
  status: 'PREPRINT' | 'UNDER_REVIEW' | 'PUBLISHED';
  journalName?: string;
  doi?: string;
  license: string;
  language: string;
  researchArea: string;
  relatedEntityIds: string[];
  relatedChemicalIds: string[];
  geographicFocus: string[];
  fundingSources: string[];
  citationCount: number;
  submittedBy?: string;
  submittedAt?: number;
  publishedAt?: number;
}

// ==================== Learning Module ====================

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  lessons: Lesson[];
  estimatedMinutes: number;
  tags?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  type: 'TEXT' | 'VIDEO' | 'QUIZ';
  videoUrl?: string;
  quizQuestions?: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
  }[];
}

export interface UserProgress {
  userId: string;
  completedModuleIds: string[];
  lessonProgress: Record<string, boolean>;
}

// ==================== Marketing ====================

export interface Institution {
  id: string;
  name: string;
  type: string;
  location: string;
}

export interface MarketingProduct {
  id: string;
  institutionId: string;
  name: string;
  type: 'loan' | 'insurance';
  shortDescription: string;
  maxAmount?: number;
  minAmount?: number;                 // optional minimum loan amount
  interestRateRange?: string;
  applicationUrl: string;
  targetCrops: string[];
  attributes: { name: string; value: string }[];
  perilsCovered: string[];
  premiumEstimate?: string;
  loanDetails?: LoanDetails;           // only for type 'loan'
}

export interface Inquiry {
  id: string;
  productId: string;
  farmerId: string;
  farmerName: string;
  question: string;
  status: 'pending' | 'responded';
  timestamp: number;
}

export interface AnalyticsRecord {
  id: string;
  productId: string;
  type: 'view' | 'click';
  timestamp: number;
}

// ==================== Farm Tool ====================

export interface FarmTool {
  id: string;
  manufacturerId: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  image?: string;
}

// ==================== Farmer Record ====================

export type RecordCategory = 'CROP' | 'LIVESTOCK' | 'INVENTORY' | 'FINANCIAL' | 'MAINTENANCE' | 'COMPLIANCE' | 'GENERAL';

export interface FarmerRecord {
  id: string;
  farmerId: string;
  category: RecordCategory;
  type: string;
  title: string;
  details: string;
  quantity: number;
  unit: string;
  cost: number;
  income: number;
  timestamp: number;
  isLocked: boolean;
  metadata?: any;
  location?: { lat: number; lng: number; accuracy?: number };
}

// ==================== Verification ====================

export type VerificationStatus = 'pending' | 'verified' | 'rejected' | 'escalated' | 'assigned';

export interface VerificationQueueItem {
  id: string;
  professionalName: string;
  professionalType: string;
  registrationNumber: string;
  credentialType: string;
  status: VerificationStatus;
}

export interface VerificationDecision {
  id: string;
  queueId: string;
  staffId: string;
  decision: 'verified' | 'rejected' | 'escalated';
  internalNotes: string;
  timestamp: number;
}

// ==================== Loan Details ====================

export type InterestType = 'fixed' | 'reducing_balance' | 'instant';

export interface LoanInterestRate {
  type: 'fixed' | 'range';
  value?: number;                       // for fixed
  ranges?: { minAmount: number; maxAmount: number; rate: number }[]; // for range
}

export interface LoanTermOption {
  type: 'fixed' | 'range';
  value?: number;                       // months, for fixed
  ranges?: { minAmount: number; maxAmount: number; termMonths: number }[]; // for range
}

export interface LoanDeduction {
  name: string;
  type: 'percentage' | 'fixed';
  value: number;                        // base value (if no ranges)
  ranges?: { minAmount: number; maxAmount: number; value: number }[]; // optional amount‑based ranges
  description?: string;
}

export interface LoanDetails {
  baseInterestRate: LoanInterestRate;
  termOptions: LoanTermOption;
  deductions: LoanDeduction[];
  interestType: InterestType;
}

// ==================== Plant Variety ====================

export interface PlantVariety {
  varietyId: string;
  plantId: string;                       // base plant (e.g., Zea mays)
  varietyName: string;
  developerId?: string;                   // company ID that developed it
  developerName?: string;                 // denormalized for display
  description?: string;
  traits?: string[];                       // e.g., ["drought resistant", "high yield"]
  maturityDays?: number;
  plantingSeasons?: string[];
  regions?: string[];
  images?: string[];
  created: number;
  updated: number;
}

// ==================== Crop Rotation Suggestion ====================

export interface CropRotationSuggestion {
  cropId: string;
  cropName: string;
  scientificName?: string;
  score: number;                         // 0-100, higher is better
  reasons: string[];                      // e.g., "Different family", "Fixes nitrogen"
  estimatedProfit?: number;                // based on market prices
  estimatedYield?: number;
  seasonMatch: boolean;
  soilMatch: boolean;
  pestRisk: 'low' | 'medium' | 'high';
}

// ==================== Animal (Livestock) ====================

export type LivestockType = 'cattle' | 'sheep' | 'goat' | 'pig' | 'poultry' | 'horse' | 'other';
export type AnimalStatus = 'active' | 'sold' | 'deceased' | 'culled' | 'transferred';
export type HealthStatus = 'excellent' | 'good' | 'fair' | 'poor' | 'critical';
export type ReproductiveStatus = 'open' | 'bred' | 'pregnant' | 'lactating' | 'dry';
export type Gender = 'male' | 'female' | 'castrated';

export interface Animal {
  animalId: string;
  farmId: string;
  species: string;                        // ID from BioEntity
  breed: string;
  tagNumber: string;
  name?: string;
  birthDate: number;
  acquisitionDate: number;
  acquisitionType: 'born' | 'purchased' | 'gifted';
  gender: Gender;
  status: AnimalStatus;
  location: {
    pasture?: string;
    barn?: string;
    pen?: string;
    coordinates?: { lat: number; lng: number };
  };
  parentage: {
    sire?: string;                         // animalId
    dam?: string;                          // animalId
  };
  genetics: {
    breedComposition: { breed: string; percentage: number }[];
    geneticMarkers?: Record<string, any>;
  };
  health: HealthStatus;
  reproductive: ReproductiveStatus;
  weight: WeightRecord[];
  vaccinations: VaccinationRecord[];
  treatments: TreatmentRecord[];
  notes: Note[];
  images: string[];
  createdAt: number;
  updatedAt: number;
  // Biotechnology
  geneticMarkers?: Array<{
    markerId: string;
    value: string;                         // e.g., 'present', 'absent', 'heterozygous'
    notes?: string;
  }>;
  diseaseResistanceMarkers?: string[];     // marker IDs
}

export interface WeightRecord {
  recordId: string;
  animalId: string;
  date: number;
  weight: number;                          // kg
  weightUnit: 'kg' | 'lbs';
  conditionScore?: number;                 // 1-9 BCS
  measuredBy?: string;
  notes?: string;
}

export interface VaccinationRecord {
  recordId: string;
  animalId: string;
  vaccineName: string;
  vaccineType: string;
  date: number;
  nextDueDate: number;
  lotNumber?: string;
  manufacturer?: string;
  administeredBy?: string;
  notes?: string;
  createdAt: number;
}

export interface TreatmentRecord {
  recordId: string;
  animalId: string;
  date: number;
  treatmentType: 'medication' | 'surgery' | 'injury' | 'illness' | 'preventive';
  diagnosis?: string;
  medication?: string;
  medicationId?: string;                    // link to AnimalMedication
  observationId?: string;                   // link to ScoutingObservation that prompted treatment
  dosage?: string;
  withdrawalPeriod?: number;                 // days
  administeredBy?: string;
  cost?: number;
  outcome?: string;
  followUpDate?: number;
  notes?: string;
  createdAt: number;
  updatedAt: number;
  efficacyRating?: number;                   // 1-5 after follow-up
  followUpObservationId?: string;            // link to post-treatment scouting
}

export interface BreedingRecord {
  recordId: string;
  femaleId: string;
  maleId?: string;
  breedingDate: number;
  method: 'natural' | 'ai' | 'embryo_transfer';
  aiSire?: string;                           // for artificial insemination
  pregnancyConfirmed: boolean;
  pregnancyCheckDate?: number;
  expectedCalvingDate?: number;
  actualCalvingDate?: number;
  offspring: string[];                        // animalIds
  notes?: string;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface Note {
  noteId: string;
  text: string;
  createdAt: number;
}

// ==================== Machinery ====================

export type MachineryType =
  | 'tractor'
  | 'combine'
  | 'sprayer'
  | 'planter'
  | 'baler'
  | 'irrigation_system'
  | 'drone'
  | 'implement'
  | 'truck'
  | 'atv'
  | 'other';

export type MachineryStatus = 'active' | 'maintenance' | 'repair' | 'retired' | 'leased';
export type FuelType = 'diesel' | 'gasoline' | 'electric' | 'propane' | 'hybrid';

export interface Machinery {
  machineryId: string;
  farmId: string;
  name: string;
  type: MachineryType;
  make: string;
  model: string;
  year: number;
  serialNumber: string;
  licensePlate?: string;
  status: MachineryStatus;
  fuelType: FuelType;
  fuelCapacity?: number;                      // liters or gallons
  hoursMeter: number;                          // current hours
  purchaseDate: number;
  purchasePrice: number;
  estimatedLife: number;                       // hours or years
  depreciationRate: number;                    // annual percentage
  insurancePolicy?: string;
  insuranceExpiry?: number;
  attachments?: string[];                       // implement IDs
  gpsEnabled: boolean;
  telemetryEnabled: boolean;
  apiKey?: string;                              // for manufacturer API
  lastSync?: number;
  location?: { lat: number; lng: number };
  createdAt: number;
  updatedAt: number;
}

// ==================== Task ====================

export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';
export type TaskStatus = 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';

export interface Task {
  taskId: string;
  farmId: string;
  title: string;
  description: string;
  taskType: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignedTo: string[];                         // employee IDs
  assignedBy: string;                            // user ID
  assignedAt: number;
  fieldId?: string;
  dueDate?: number;
  completedAt?: number;
  completedBy?: string;
  estimatedHours: number;
  actualHours?: number;
  notes?: string;
  attachments?: string[];
  metadata?: Record<string, any>;
  recurring?: {
    frequency: string;
    endDate?: number;
  };
  createdAt: number;
  updatedAt: number;
}

// ==================== Compliance Requirement ====================

export interface ComplianceRequirement {
  requirementId: string;
  name: string;
  regulation: string;
  authority: string;
  description: string;
  frequency: 'one-time' | 'annual' | 'quarterly' | 'monthly' | 'per-event';
  dueDate?: number;
  gracePeriod?: number;                          // days
  requiredDocuments: string[];
  responsibleParty: string;
  applicableTo: string[];                         // farm IDs, crop types, etc.
  penalties: string;
  status: 'compliant' | 'non-compliant' | 'pending' | 'waived';
  lastComplianceDate?: number;
  nextDueDate?: number;
}

// ==================== Advisor ====================

export interface AdvisorContext {
  user: {
    id: string;
    role: UserRole;
    farms: LandParcel[];
    defaultLocation?: UserProfile['location'];
    preferences?: any;
    groups: CollaborativeGroup[];
  };
  temporal: {
    date: number;
    season: string;
  };
  environmental: {
    weather?: {
      current?: WeatherReport;
      forecast?: any;
    };
    soilTests: SoilTest[];
    scoutingObservations: DataSubmission[];
    activePests: Array<{
      pestId: string;
      pestName: string;
      severity: string;
      farmId: string;
      sectionId?: string;
      count?: number;
    }>;
  };
  economic: {
    marketPrices: Record<string, number>;
    availableInputs: RetailerProduct[];
    creditOptions: MarketingProduct[];
    insuranceOptions: MarketingProduct[];
  };
  social: {
    groups: CollaborativeGroup[];
    expertContacts: UserProfile[];
    groupPractices: SharedResource[];
  };
  historical: {
    previousAdvice: AdvisorRecommendation[];
    userActions: any[];
    yields: FarmerRecord[];
    productionPlans: ProductionPlan[];
  };
  currentFocus?: {
    entityId: string;
    entityType: 'plant' | 'animal';
    entity: BioEntity;
  };
}

export interface AdvisorRecommendation {
  id: string;
  type: 'general' | 'pest_control' | 'fertilizer' | 'irrigation' | 'harvest' | 'compliance';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  actionable: boolean;
  createdAt: number;
}

// ==================== Production Plan ====================

export interface ProductionPlan {
  planId: string;
  projectId: string;
  cropId: string;
  farmId: string;
  area: number;
  startDate: number;
  inputs: Array<{
    inputId: string;
    type: string;
    name?: string;
    quantity: number;
    unit: string;
    cost: number;
  }>;
  totalCost: number;
  status: 'draft' | 'active' | 'completed';
  created: number;
  updated: number;
}

// ==================== Soil Test ====================

export interface SoilTest {
  testId: string;
  farmerId: string;
  fieldId?: string;
  date: number;
  laboratory?: string;
  ph: number;
  n: number;                // mg/kg
  p: number;                // mg/kg
  k: number;                // mg/kg
  organicMatter: number;    // %
  sand?: number;            // %
  clay?: number;            // %
  bulkDensity?: number;     // g/cm³
  depth?: number;           // cm
  notes?: string;
  reportUrl?: string;
}

// ==================== Feed Ingredient & Formulation ====================

export interface FeedIngredient {
  ingredientId: string;
  name: string;
  type: 'concentrate' | 'roughage' | 'supplement';
  proteinPercent: number;
  energyKcalKg: number;
  calciumPercent: number;
  phosphorusPercent: number;
  costPerKg: number;
  isHomegrown: boolean;
}

export interface FeedFormulationRequest {
  animalId: string;
  productionType: 'meat' | 'milk' | 'maintenance' | 'breeding';
  targetWeight: number;
  availableIngredients: string[]; // ingredient IDs
  maxCost: number;
}

export interface FeedFormulationResult {
  formulationId: string;
  animalId: string;
  productionType: string;
  ingredients: Array<{
    ingredientId: string;
    name: string;
    percentage: number;
    amountKg: number;
    cost: number;
  }>;
  totalWeight: number;
  totalCost: number;
  nutritionalProfile: {
    protein: number;
    energy: number;
    calcium: number;
    phosphorus: number;
  };
  meetsRequirements: boolean;
  notes?: string;
}

// ==================== Schedule ====================

export interface Schedule {
  scheduleId: string;
  entityId: string;          // plant or animal ID
  title: string;
  description?: string;
  repeat: 'none' | 'daily' | 'weekly' | 'monthly';
  tasks: ScheduleTask[];
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface ScheduleTask {
  taskId: string;
  title: string;
  description?: string;
  dueDate?: number;
  completed: boolean;
  completedAt?: number;
}

// ==================== Advice Note ====================

export interface AdviceNote {
  noteId: string;
  topic: string;
  content: string;
  category: string;
  tags: string[];
  isPublic: boolean;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

// ==================== Retailer ====================

export interface RetailerAccount {
  accountId: string;
  userId: string;
  businessName: string;
  businessType: 'retail' | 'wholesale' | 'manufacturer';
  location: string;
  phone: string;
  email: string;
  verified: boolean;
  created: number;
  updated: number;
}

export interface RetailerProduct {
  productId: string;
  accountId: string;
  locationId?: string;
  title: string;
  description: string;
  productType: 'plant' | 'animal' | 'chemical' | 'feed' | 'machinery' | 'service';
  entityId?: string;          // ID of related BioEntity or Chemical
  companyProductId?: string;   // if sourced from a company
  batchNumber?: string;
  expiryDate?: number;
  sku: string;
  price: number;
  salePrice?: number;
  quantityAvailable: number;
  unit: string;
  isActive: boolean;
  images: string[];
  attributes: Record<string, any>;
  created: number;
  updated: number;
}

export interface RetailerOrder {
  orderId: string;
  accountId: string;
  buyerId: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: number;
  updatedAt: number;
}

// ==================== Unified Listing (Marketplace) ====================

export interface UnifiedListing {
  listingId: string;
  userId: string;
  userRole: UserRole;
  listingType: 'sell' | 'buy' | 'service';
  productType: 'seed' | 'chemical' | 'produce' | 'livestock' | 'equipment' | 'service';
  title: string;
  description: string;
  productId?: string;               // ID of specific product (e.g., seed variety, chemical)
  batchId?: string;                  // link to SupplyChainBatch
  quantity: number;
  unit: string;
  price: number;
  location: string;
  status: 'active' | 'sold' | 'expired';
  buyerRequirementId?: string;       // link to a BuyerRequirement
  createdAt: number;
  updatedAt: number;
}

// ==================== Supply Chain ====================

export interface SupplyChainActor {
  actorId: string;
  name: string;
  type: 'grower' | 'processor' | 'packer' | 'distributor' | 'retailer';
  address: {
    street: string;
    city: string;
    country: string;
  };
  contact: {
    name: string;
    email?: string;
    phone?: string;
    website?: string;
  };
  certifications: string[];
  verified: boolean;
  verificationDate?: number;
  documents: string[];
  createdAt: number;
  updatedAt: number;
}

export interface SupplyChainProduct {
  productId: string;
  actorId: string;
  name: string;
  sku: string;
  gtin?: string;
  category: string;
  description?: string;
  certifications: string[];
  images: string[];
  specifications: Record<string, any>;
  traceabilityRequired: boolean;
  traceabilityScope: 'batch' | 'individual';
  batchTracking: boolean;
  shelfLifeDays?: number;
  createdAt: number;
  updatedAt: number;
}

export interface SupplyChainBatch {
  batchId: string;
  batchNumber: string;
  productId: string;
  actorId: string;
  productionDate: number;
  expiryDate?: number;
  quantity: number;
  unit: string;
  status: 'available' | 'sold' | 'recalled';
  origin: {
    farmId?: string;
    harvestDate?: number;
    location?: string;
  };
  certifications: Array<{
    standard: string;
    certId: string;
    verified: boolean;
  }>;
  qualityTests: string[];          // test IDs
  documents: string[];
  metadata: Record<string, any>;
  createdAt: number;
  updatedAt: number;
  blockchainHash?: string;
}

export interface TraceabilityEvent {
  eventId: string;
  batchId: string;
  eventType: string;
  timestamp: number;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  handlerId: string;
  handlerName: string;
  handlerRole: string;
  notes?: string;
  documents?: string[];
  previousHash?: string;
  blockchainHash?: string;
}

export interface Shipment {
  shipmentId: string;
  shipmentNumber: string;
  fromActorId: string;
  toActorId: string;
  carrier: {
    name: string;
    trackingNumber?: string;
  };
  items: Array<{
    batchId: string;
    quantity: number;
  }>;
  status: 'pending' | 'in_transit' | 'delivered' | 'exception';
  estimatedArrival: number;
  actualArrival?: number;
  documents: string[];
  createdAt: number;
  updatedAt: number;
}

export interface SupplyChainContract {
  contractId: string;
  contractNumber: string;
  buyerId: string;
  sellerId: string;
  type: 'purchase' | 'consignment' | 'future';
  products: Array<{
    productId: string;
    quantity: number;
    unit: string;
    pricePerUnit: number;
  }>;
  totalValue: number;
  terms: {
    paymentTerms: string;
    deliveryTerms: string;
  };
  status: 'draft' | 'active' | 'completed' | 'cancelled';
  signedByBuyer?: boolean;
  signedBySeller?: boolean;
  signedAt?: number;
  createdAt: number;
  updatedAt: number;
}

// ==================== Carbon ====================

export interface CarbonProject {
  projectId: string;
  farmerId: string;
  farmId: string;
  name: string;
  description: string;
  startDate: number;
  status: 'draft' | 'active' | 'verified' | 'sold';
  methodology: string;
  verificationBody: string;
  areaHa: number;
  estimatedCredits: number;
  issuedCredits: number;
  soldCredits: number;
  pricePerCredit: number;
  forSale?: boolean;
  documents: string[];
  createdAt: number;
  updatedAt: number;
}

export interface CarbonCredit {
  creditId: string;
  projectId: string;
  vintage: number;
  quantity: number;
  pricePerTon: number;
  status: 'available' | 'reserved' | 'sold';
}

// ==================== Soil Property Map ====================

export interface SoilPropertyMap {
  mapId: string;
  farmId: string;
  fieldId: string;
  property: string;
  samplingDate: number;
  points: Array<{ lat: number; lng: number; value: number }>;
  interpolatedMap: string;
  stats: {
    min: number;
    max: number;
    mean: number;
    stdDev: number;
    unit: string;
  };
}

// ==================== Prescription Map ====================

export interface PrescriptionMap {
  prescriptionId: string;
  farmId: string;
  fieldId: string;
  operationType: 'fertilizer' | 'seeding' | 'irrigation' | 'pesticide';
  productId?: string;
  rateMap: string;               // URL to GeoTIFF
  baseRate: number;
  minRate: number;
  maxRate: number;
  rateUnit: string;
  totalArea: number;
  totalQuantity: number;
  createdAt: number;
}

// ==================== Yield Map ====================

export interface YieldMap {
  yieldId: string;
  farmId: string;
  fieldId: string;
  cropId: string;
  harvestDate: number;
  yieldData: string;              // URL to yield map file
  totalYield: number;
  avgYield: number;
  minYield: number;
  maxYield: number;
  stdDevYield: number;
  moistureAvg: number;
  points: Array<{ lat: number; lng: number; yield: number; moisture?: number }>;
  createdAt: number;
}

// ==================== Remote Sensing ====================

export interface SatelliteImage {
  imageId: string;
  farmId: string;
  source: string;
  acquisitionDate: number;
  cloudCover: number;
  bands: Array<{ name: string; resolution: number }>;
  thumbnailUrl: string;
  fullImageUrl: string;
  metadata: Record<string, any>;
}

export interface RemoteSensingJob {
  jobId: string;
  farmId: string;
  jobType: 'ndvi' | 'evi' | 'lai' | 'classify';
  fieldIds: string[];
  dateRange: { start: number; end: number };
  status: 'queued' | 'processing' | 'completed' | 'failed';
  resultUrl?: string;
  createdAt: number;
}

// ==================== Vegetation Index ====================

export interface VegetationIndexLayer {
  layerId: string;
  farmId: string;
  name: string;
  type: 'ndvi' | 'evi' | 'savi' | 'ndwi';
  date: number;
  bounds: {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
    polygon: Array<{ lat: number; lng: number }>;
    areaHa: number;
  };
  dataUrl: string;
  stats: {
    min: number;
    max: number;
    mean: number;
    stdDev: number;
  };
}

// ==================== Employee ====================

export interface Employee {
  employeeId: string;
  farmId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  hireDate: number;
  status: 'active' | 'inactive' | 'on_leave' | 'terminated';
  position: string;
  department?: string;
  employmentType: 'full_time' | 'part_time' | 'seasonal' | 'temporary' | 'contractor';
  payType: 'hourly' | 'salary' | 'commission';
  payRate: number;
  payFrequency: 'weekly' | 'biweekly' | 'monthly';
  overtimeEligible: boolean;
  overtimeRate: number;
  benefits: {
    healthInsurance: boolean;
    retirement: boolean;
    paidTimeOff: boolean;
    other: string[];
  };
  documents: string[];
  certifications: string[];
  skills: string[];
  createdAt: number;
  updatedAt: number;
}

// ==================== Payroll ====================

export interface PayrollSummary {
  summaryId: string;
  farmId: string;
  periodStart: number;
  periodEnd: number;
  employees: Array<{
    employeeId: string;
    hours: number;
    overtimeHours: number;
    grossPay: number;
    deductions: number;
    netPay: number;
    taxes: number;
    benefits: number;
  }>;
  totalGrossPay: number;
  totalNetPay: number;
  totalTaxes: number;
  totalBenefits: number;
  status: 'draft' | 'processed' | 'paid';
  createdAt: number;
  processedAt?: number;
  paidAt?: number;
}

// ==================== Budget ====================

export interface Budget {
  budgetId: string;
  farmId: string;
  name: string;
  description?: string;
  fiscalYear: number;
  lines: BudgetLine[];
  createdAt: number;
  updatedAt: number;
}

export interface BudgetLine {
  lineId: string;
  accountId: string;
  accountName: string;
  amount: number;
  actual: number;
  variance: number;
}

// ==================== Journal Entry ====================

export interface JournalEntry {
  entryId: string;
  farmId: string;
  entryNumber: string;
  date: number;
  description: string;
  lines: Array<{
    lineId: string;
    accountId: string;
    accountName: string;
    debit: number;
    credit: number;
  }>;
  source: 'manual' | 'bank' | 'sales' | 'purchase';
  posted: boolean;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

// ==================== Chart of Accounts ====================

export interface ChartOfAccounts {
  accountId: string;
  farmId: string;
  accountNumber: string;
  accountName: string;
  accountType: 'asset' | 'liability' | 'equity' | 'income' | 'expense';
  category: string;
  normalBalance: 'debit' | 'credit';
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

// ==================== Bank Account ====================

export interface BankAccount {
  bankAccountId: string;
  farmId: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  routingNumber?: string;
  swiftCode?: string;
  currency: string;
  currentBalance: number;
  asOfDate: number;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface BankTransaction {
  transactionId: string;
  bankAccountId: string;
  date: number;
  description: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'fee' | 'interest';
  category?: string;
  reconciled: boolean;
  reference?: string;
  metadata?: any;
}

// ==================== Benchmarking ====================

export interface Benchmark {
  benchmarkId: string;
  name: string;
  farmSize: 'small' | 'medium' | 'large';
  region: string;
  category: string;
  metrics: Record<string, number>;
  source: string;
  year: number;
}

// ==================== KPI ====================

export interface KPI {
  kpiId: string;
  farmId: string;
  name: string;
  value: number;
  unit: string;
  target?: number;
  trend: 'up' | 'down' | 'stable';
  category: 'financial' | 'operational' | 'environmental' | 'social';
  dataSource: {
    sourceType: 'entity' | 'aggregate' | 'external';
    sourceId?: string;
  };
  aggregation: 'sum' | 'avg' | 'min' | 'max' | 'count';
  refreshInterval: number;          // seconds
  alertThresholds: Array<{
    condition: '>' | '<' | '=' | 'between';
    value: number;
    value2?: number;
    severity: 'info' | 'warning' | 'critical';
  }>;
  history: Array<{ timestamp: number; value: number }>;
  createdAt: number;
  updatedAt: number;
}

// ==================== Integration ====================

export interface IntegrationConnection {
  connectionId: string;
  farmId: string;
  provider: string;
  name: string;
  description?: string;
  status: 'active' | 'error' | 'disabled';
  authType: 'api_key' | 'oauth2' | 'basic';
  authData: Record<string, any>;
  endpoints: {
    baseUrl?: string;
    timeout: number;
    retryCount: number;
  };
  capabilities: string[];
  syncHistory: Array<{
    syncId: string;
    startTime: number;
    endTime: number;
    recordsDownloaded: number;
    recordsUploaded: number;
    status: 'success' | 'failed' | 'partial';
    error?: string;
  }>;
  lastSync?: number;
  lastError?: string;
  metadata: Record<string, any>;
  createdAt: number;
  updatedAt: number;
}

export interface Webhook {
  webhookId: string;
  farmId: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
  status: 'active' | 'paused' | 'failed';
  failureCount: number;
  lastTriggered?: number;
  createdAt: number;
  updatedAt: number;
}

// ==================== Push Notification ====================

export interface PushNotification {
  notificationId: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  data?: any;
  readAt?: number;
  createdAt: number;
}

// ==================== Export Certificate ====================

export interface ExportCertificate {
  certificateId: string;
  farmId: string;
  certificateNumber: string;
  issuingCountry: string;
  destinationCountry: string;
  issueDate: number;
  expiryDate: number;
  products: string[];               // product IDs
  documentUrl: string;
  status: 'issued' | 'expired' | 'cancelled';
}

// ==================== Recall ====================

export interface Recall {
  recallId: string;
  recallNumber: string;
  productId: string;
  reason: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'active' | 'closed';
  issuedBy: string;
  issuedDate: number;
  affectedQuantities: Array<{
    batchId: string;
    quantity: number;
    unit: string;
  }>;
  instructions: string;
  resolvedAt?: number;
}

// ==================== Farmer Record (again) ====================

export interface FarmerRecord {
  id: string;
  farmerId: string;
  category: RecordCategory;
  type: string;
  title: string;
  details: string;
  quantity: number;
  unit: string;
  cost: number;
  income: number;
  timestamp: number;
  isLocked: boolean;
  metadata?: any;
  location?: { lat: number; lng: number; accuracy?: number };
}

// ==================== Pest Risk Model ====================

export interface PestRiskModel {
  modelId: string;
  pestId: string;
  pestName: string;
  cropIds: string[];
  weatherParameters: {
    temperatureMin: number;
    temperatureMax: number;
    temperatureOptimal: number;
    humidityMin: number;
    humidityMax: number;
    rainfallMin: number;
    rainfallMax: number;
  };
  lifecycleDays: number;
  historicalPatterns: Array<{ month: number; risk: number }>;
  riskFormula: string;
  confidence: number;
  source: string;
  createdAt: number;
  updatedAt: number;
}

// ==================== Mobile Device ====================

export interface MobileDevice {
  deviceId: string;
  userId: string;
  deviceName: string;
  platform: 'ios' | 'android' | 'web';
  model: string;
  osVersion: string;
  appVersion: string;
  lastActive: number;
  batteryLevel?: number;
  storageAvailable?: number;
  features: string[];
  settings: {
    offlineMode: boolean;
    syncOnWifi?: boolean;
  };
  lastLocation?: {
    lat: number;
    lng: number;
    timestamp: number;
  };
  createdAt: number;
  updatedAt: number;
}

// ==================== Offline Data ====================

export interface OfflineData {
  dataId: string;
  userId: string;
  entityType: string;
  entityId: string;
  data: any;
  version: number;
  lastSynced: number;
}

export interface OfflinePreference {
  preferenceId: string;
  userId: string;
  entityType: string;
  syncFrequency: 'realtime' | 'on_demand' | 'daily' | 'weekly';
  autoDownload: boolean;
  keepForDays: number;
  priority: 'high' | 'medium' | 'low';
}

export interface OfflineQueueItem {
  queueId: string;
  userId: string;
  action: 'create' | 'update' | 'delete';
  entityType: string;
  entityId?: string;
  data: any;
  timestamp: number;
  status: 'pending' | 'syncing' | 'completed' | 'failed';
  retryCount: number;
  error?: string;
}

// ==================== Sync Conflict ====================

export interface SyncConflict {
  conflictId: string;
  userId: string;
  entityType: string;
  entityId: string;
  localVersion: number;
  serverVersion: number;
  localData: any;
  serverData: any;
  resolved: boolean;
  resolution?: 'local' | 'server' | 'merge';
  resolvedAt?: number;
}

// ==================== Role Request ====================

export interface RoleRequest {
  requestId: string;
  userId: string;
  requestedRole: UserRole;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: number;
  reviewedAt?: number;
  reviewedBy?: string;
  reviewerNotes?: string;
  metadata?: any;
}

// ==================== Data Campaign ====================

export interface DataCampaign {
  campaignId: string;
  name: string;
  description: string;
  formId: string;
  campaignType: 'researcher' | 'enumerator' | 'survey';
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  status: 'draft' | 'active' | 'completed';
}

export interface DataForm {
  formId: string;
  name: string;
  description: string;
  fields: DataField[];
}

export interface DataField {
  fieldId: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'photo' | 'date' | 'location';
  required: boolean;
  options?: string[];
  placeholder?: string;
}

export interface DataSubmission {
  submissionId: string;
  campaignId: string;
  enumeratorId: string;
  startedAt: number;
  completedAt?: number;
  data: Record<string, any>;
  photos?: Array<{ fieldId: string; url: string }>;
  location?: { lat: number; lng: number };
  synced: boolean;
  createdAt: number;
  updatedAt: number;
}

// ==================== Company ====================

export interface Company {
  id: string;
  name: string;
  type: string;
  description: string;
  location: string;
  verified: boolean;
}

// ==================== Supplier ====================

export interface Vendor {
  vendorId: string;
  farmId: string;
  name: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  paymentTerms: string;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface ProductWithSupplier extends RetailerProduct {
  retailerName: string;
  distance?: number;
}

// ==================== Crop Rotation ====================

export interface ChemicalRotationPlan {
  rotationId: string;
  name: string;
  description: string;
  cropId: string;
  pestId?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  region?: string;
  approvalStatus: 'approved' | 'pending' | 'rejected';
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface RotationStep {
  stepId: string;
  rotationId: string;
  stepNumber: number;
  chemicalId: string;
  timingDescription: string;
  rateMin: number;
  rateMax: number;
  rateUnit: string;
  modeOfActionGroup: string;
  notes?: string;
}

export interface RotationSuggestion {
  suggestionId: string;
  name: string;
  description: string;
  cropId: string;
  pestId?: string;
  suggestedBy: string;
  suggesterRole: UserRole;
  suggesterName: string;
  suggesterInstitution?: string;
  submittedAt: number;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: number;
  reviewNotes?: string;
  verificationLevel: 'verified' | 'unverified' | 'peer_reviewed';
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface RotationVerificationQueue {
  queueId: string;
  suggestionId: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  assignedAt?: number;
  status: 'pending' | 'in_progress' | 'completed';
  completedAt?: number;
  completedBy?: string;
}

// ==================== Lab Procedure ====================

export interface ProcedureCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  displayOrder: number;
}

export interface LabProcedure {
  id: string;
  code: string;
  categoryId?: string;
  popularName: string;
  officialName: string;
  description: string;
  principle?: string;
  steps: string[];
  equipment?: Array<{ item: string; quantity: number }>;
  reagents?: Array<{ item: string; concentration?: string }>;
  safetyPrecautions?: string;
  version: string;
  references?: string[];
  relatedEntityIds?: string[];
  synonyms?: string[];
  createdBy?: string;
  createdAt: number;
  updatedAt: number;
  // Accreditation
  accreditedMethod?: boolean;
  accreditation?: {
    body: string;
    scope?: string[];
    certificateNumber?: string;
    issueDate?: number;
    expiryDate?: number;
    proficiencyTested?: boolean;
  };
  referenceMethod?: string;
}

export interface ProcedureSubmission {
  id: string;
  submitterId: string;
  data: any;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  timestamp: number;
}

// ==================== Taxonomy ====================

export interface Taxon {
  taxonId: string;
  scientificName: string;
  canonicalName: string;
  authorship?: string;
  rankId: string;
  parentTaxonId?: string;
  taxonomicStatus: 'accepted' | 'synonym' | 'misapplied' | 'unchecked';
  kingdom: string;
  phylum?: string;
  class?: string;
  order?: string;
  family?: string;
  genus?: string;
  species?: string;
  createdBy?: string;
  createdAt: number;
  updatedAt: number;
  verificationStatus: 'authoritative' | 'provisional' | 'unverified';
  externalIds?: {
    gbif?: number;
    ncbi?: number;
    bold?: string;
    eol?: number;
  };
}

export interface TaxonomicRank {
  rankId: string;
  rankName: string;
  rankLevel: number;
  pluralName: string;
}

export interface TaxonomicSynonym {
  synonymId: string;
  taxonId: string;
  synonymName: string;
  isHomotypic: boolean;
  createdBy?: string;
  createdAt: number;
}

export interface CommonName {
  commonNameId: string;
  taxonId: string;
  language: string;
  name: string;
  region?: string;
  isPreferred: boolean;
  createdBy?: string;
  createdAt: number;
}

// ==================== Organism Relationship ====================

export interface OrganismRelationship {
  relationshipId: string;
  fromEntityId: string;
  toEntityId: string;
  relationshipType: string;
  bidirectional: boolean;
  strength: 'weak' | 'moderate' | 'strong';
  description?: string;
  confidence: 'low' | 'medium' | 'high' | 'confirmed';
  createdBy?: string;
  createdAt: number;
  updatedAt: number;
  source?: 'literature' | 'expert' | 'machine';
}

export interface RelationshipSummary {
  prey: BioEntity[];
  predators: BioEntity[];
  parasites: BioEntity[];
  hosts: BioEntity[];
  pollinators: BioEntity[];
  pollinatedBy: BioEntity[];
  symbiotic: BioEntity[];
  competitors: BioEntity[];
  diseases: BioEntity[];
  vectors: BioEntity[];
  vectoredBy: BioEntity[];
}

// ==================== Phased Out Chemical ====================

export interface PhasedOutChemical {
  phasedOutId: string;
  chemicalId: string;
  companyId: string;
  phasedOutDate: number;
  reason?: string;
  replacementChemicalId?: string;
  stillVisibleTo: Array<'company' | 'ngo' | 'government' | 'admin'>;
  catalogHidden: boolean;
  createdAt: number;
  updatedAt: number;
}

// ==================== Vendor ====================

export interface Vendor {
  vendorId: string;
  farmId: string;
  name: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  paymentTerms: string;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

// ==================== Water Management ====================

export interface WaterSource {
  sourceId: string;
  farmId: string;
  name: string;
  type: 'well' | 'pond' | 'stream' | 'river' | 'municipal';
  location: { lat: number; lng: number; description?: string };
  capacity: number;          // m³/day
  currentLevel?: number;     // percentage
  lastReading?: number;
  quality: {
    ph?: number;
    ec?: number;            // µS/cm
    lastTested?: number;
  };
  permit?: {
    permitNumber: string;
    authority: string;
    expirationDate: number;
    maxDailyVolume: number;
  };
  createdAt: number;
  updatedAt: number;
}

export interface WaterMeter {
  meterId: string;
  sourceId: string;
  name: string;
  serialNumber: string;
  units: 'm³' | 'L';
  lastReading: number;
  lastReadingDate: number;
  multiplier: number;
  location?: { lat: number; lng: number };
  createdAt: number;
  updatedAt: number;
}

export interface MeterReading {
  readingId: string;
  meterId: string;
  date: number;
  value: number;
  totalizer: number;
  photoUrl?: string;
  notes?: string;
}

export interface WaterQualityTest {
  testId: string;
  sourceId: string;
  date: number;
  laboratory?: string;
  ph: number;
  ec: number;               // µS/cm
  tds: number;              // mg/L
  hardness: number;          // mg/L
  alkalinity?: number;
  chloride?: number;
  sodium?: number;
  coliforms?: number;        // CFU/100mL
  reportUrl?: string;
}

// ==================== Irrigation ====================

export interface IrrigationController {
  controllerId: string;
  farmId: string;
  name: string;
  type: 'timer' | 'smart' | 'manual';
  manufacturer: string;
  model: string;
  firmware?: string;
  ipAddress?: string;
  connected: boolean;
  lastCommunication?: number;
  createdAt: number;
  updatedAt: number;
}

export interface IrrigationZone {
  zoneId: string;
  farmId: string;
  fieldId: string;
  name: string;
  area: number;              // ha
  emitterType: 'drip' | 'sprinkler' | 'microsprinkler' | 'flood';
  emitterFlowRate: number;    // L/h
  emitterSpacing: number;     // m
  rowSpacing: number;         // m
  designPressure: number;     // bar
  createdAt: number;
  updatedAt: number;
}

export interface IrrigationProgram {
  programId: string;
  controllerId: string;
  name: string;
  zones: string[];            // zone IDs
  enabled: boolean;
  frequency: string;          // e.g., 'daily', 'every 2 days'
  startTimes: string[];        // e.g., ['06:00', '18:00']
  duration: number;            // minutes
  durationPerZone?: number[];   // minutes per zone (if different)
  seasonStart?: number;         // day of year
  seasonEnd?: number;           // day of year
  createdAt: number;
  updatedAt: number;
}

export interface IrrigationSchedule {
  scheduleId: string;
  programId: string;
  zoneId: string;
  scheduledStart: number;
  actualStart?: number;
  actualEnd?: number;
  duration: number;            // minutes
  volume?: number;             // m³
  status: 'scheduled' | 'running' | 'completed' | 'skipped' | 'failed';
  reason?: string;
}

export interface IrrigationDashboard {
  farmId: string;
  totalIrrigatedArea: number;
  activeZones: number;
  totalFlowRate: number;
  efficiency: number;
  todayVolume: number;
  weekVolume: number;
  monthVolume: number;
  yearVolume: number;
  waterSources: Array<{ source: string; usage: number; capacity: number }>;
  soilMoistureSummary: Array<{ zone: string; moisture: number; status: string }>;
  upcomingSchedule: Array<{ zoneId: string; scheduledStart: number; duration: number }>;
  activeAlerts: Array<{ timestamp: number; message: string }>;
}

export interface IrrigationRecommendation {
  recommendationId: string;
  farmId: string;
  zoneId: string;
  cropId: string;
  growthStage: string;
  soilMoisture: number;
  depletion: number;
  recommendedDepth: number;      // mm
  recommendedVolume: number;      // m³
  runTime: number;                // minutes
  urgency: 'critical' | 'high' | 'medium' | 'low';
  confidence: number;             // %
  createdAt: number;
}

// ==================== Evapotranspiration ====================

export interface EvapotranspirationData {
  etId: string;
  farmId: string;
  date: number;
  referenceET: number;            // mm
  actualET: number;               // mm
  source: 'station' | 'satellite';
  weatherStationId?: string;
}

// ==================== Drought Monitor ====================

export interface DroughtMonitor {
  monitorId: string;
  farmId: string;
  date: number;
  palmerIndex: number;
  severity: 'none' | 'abnormally_dry' | 'moderate' | 'severe' | 'extreme' | 'exceptional';
  spI1: number;                    // 1-month SPI
  spI3: number;                    // 3-month SPI
  spI6: number;                    // 6-month SPI
  spI12: number;                   // 12-month SPI
  soilMoisturePercentile: number;
  streamflowPercentile: number;
  impact: string;
  recommendations: string[];
}

// ==================== Frost Forecast ====================

export interface FrostForecast {
  forecastId: string;
  farmId: string;
  date: number;
  temperature: number;
  duration: number;                // hours
  severity: 'light' | 'moderate' | 'severe';
  probability: number;              // %
  affectedCrops: string[];
  protectionMeasures: string[];
  confidence: number;
}

// ==================== Growing Degree Day ====================

export interface GrowingDegreeDay {
  gddId: string;
  farmId: string;
  cropId: string;
  seasonStart: number;
  accumulatedGDD: number;
  dailyGDD: Array<{ date: number; value: number }>;
  targetGDD: number;
  estimatedMaturityDate?: number;
  plantingDate: number;
  baseTemperature: number;
  maxTemperature: number;
}

// ==================== Historical Weather ====================

export interface HistoricalWeatherData {
  farmId: string;
  year: number;
  dailyData: Array<{
    date: number;
    tempMin: number;
    tempMax: number;
    tempAvg: number;
    precipitation: number;
    humidity: number;
    windSpeed: number;
  }>;
  summary: {
    avgTemp: number;
    maxTemp: number;
    minTemp: number;
    totalPrecipitation: number;
    growingDegreeDays: number;
    frostDays: number;
    hotDays: number;
    rainyDays: number;
  };
}

// ==================== Multi-Year Analysis ====================

export interface MultiYearAnalysis {
  farmId: string;
  fieldId: string;
  years: number[];
  yieldTrend: number[];
  variabilityTrend: number[];
  stableZones: Array<{ name: string; areaHa: number }>;
  unstableZones: Array<{ name: string; areaHa: number }>;
  profitZones: Array<{ zone: string; profitPerHa: number }>;
}

// ==================== Food Safety Plan ====================

export interface FoodSafetyPlan {
  planId: string;
  farmId: string;
  name: string;
  version: string;
  lastUpdated: number;
  status: 'draft' | 'active' | 'archived';
  scope: string[];
  haccp?: {
    productDescription: string;
    intendedUse: string;
    flowDiagram: string;
    hazardAnalysis: any[];
    criticalControlPoints: any[];
    criticalLimits: any[];
    monitoring: any[];
    correctiveActions: any[];
    verification: any[];
    recordKeeping: any[];
  };
  prerequisitePrograms: Array<{
    programId: string;
    name: string;
    status: 'compliant' | 'non-compliant';
  }>;
  certifications: string[];
  auditHistory: Array<{
    auditId: string;
    date: number;
    auditor: string;
    result: 'pass' | 'fail' | 'conditional';
    reportUrl?: string;
  }>;
}

export interface SOP {
  sopId: string;
  farmId: string;
  number: string;
  title: string;
  description: string;
  steps: string[];
  effectiveDate: number;
  reviewDate: number;
  responsiblePerson: string;
  attachments: string[];
}

// ==================== Fertilizer Use Record ====================

export interface FertilizerUseRecord {
  recordId: string;
  farmId: string;
  fieldId: string;
  cropId: string;
  applicationDate: number;
  productId: string;
  productName: string;
  nutrientAnalysis: {
    n: number;
    p: number;
    k: number;
  };
  applicationRate: number;
  rateUnit: string;
  totalApplied: number;
  method: 'broadcast' | 'banded' | 'foliar' | 'fertigation' | 'side_dress';
  soilTestId?: string;
  notes?: string;
  createdAt: number;
}

// ==================== Pesticide Use Record ====================

export interface PesticideUseRecord {
  recordId: string;
  farmId: string;
  fieldId: string;
  cropId: string;
  applicationDate: number;
  productId: string;
  productName: string;
  epaRegistrationNumber?: string;
  activeIngredient?: string;
  applicationRate: number;
  rateUnit: string;
  totalApplied: number;
  applicatorId: string;
  applicatorCertification?: string;
  weatherConditions: {
    temperature: number;
    windSpeed: number;
    windDirection: string;
    humidity: number;
    precipitation: boolean;
  };
  bufferZone: number;                // meters
  preHarvestInterval: number;        // days
  reentryInterval: number;           // hours
  notes?: string;
  createdAt: number;
}

// ==================== Fixed Asset ====================

export interface FixedAsset {
  assetId: string;
  farmId: string;
  name: string;
  assetType: 'machinery' | 'vehicle' | 'building' | 'land' | 'equipment' | 'livestock';
  purchaseDate: number;
  purchasePrice: number;
  salvageValue: number;
  usefulLife: number;                 // years
  depreciationMethod: 'straight_line' | 'declining_balance' | 'macrs';
  accumulatedDepreciation: number;
  bookValue: number;
  location?: string;
  serialNumber?: string;
  notes?: string;
  createdAt: number;
  updatedAt: number;
}

export interface DepreciationEntry {
  entryId: string;
  assetId: string;
  period: number;                     // timestamp representing month/year
  amount: number;
  bookValueAfter: number;
  createdAt: number;
}

// ==================== Depreciation Schedule ====================

export interface DepreciationSchedule {
  scheduleId: string;
  assetId: string;
  entries: DepreciationEntry[];
  totalDepreciation: number;
  remainingValue: number;
}

// ==================== Customer ====================

export interface Customer {
  customerId: string;
  farmId: string;
  name: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  taxId?: string;
  paymentTerms: string;
  creditLimit?: number;
  notes?: string;
  createdAt: number;
  updatedAt: number;
}

// ==================== Lactation Record ====================

export interface LactationRecord {
  recordId: string;
  animalId: string;
  startDate: number;
  endDate?: number;
  totalYield: number;                 // liters
  peakYield: number;                  // liters/day
  peakDay?: number;                    // day of lactation
  somaticCellCount?: number;           // cells/mL
  fatPercent?: number;
  proteinPercent?: number;
  notes?: string;
  createdAt: number;
  updatedAt: number;
}

// ==================== Mortality Record ====================

export interface MortalityRecord {
  recordId: string;
  farmId: string;
  animalId: string;
  date: number;
  cause: string;
  disposalMethod: 'buried' | 'rendered' | 'composted' | 'incinerated';
  notes?: string;
  createdBy: string;
  createdAt: number;
}

// ==================== Sale Record ====================

export interface SaleRecord {
  recordId: string;
  farmId: string;
  animalId: string;
  saleDate: number;
  buyerId: string;
  price: number;
  weight?: number;
  notes?: string;
  createdAt: number;
}

// ==================== Feed Allocation ====================

export interface FeedAllocation {
  allocationId: string;
  farmId: string;
  groupId?: string;
  animalId?: string;
  date: number;
  feedFormulaId: string;
  quantity: number;
  unit: string;
  notes?: string;
  createdAt: number;
}

export interface FeedFormula {
  formulaId: string;
  farmId: string;
  name: string;
  species: LivestockType[];
  ingredients: Array<{
    ingredientId: string;
    percentage: number;
  }>;
  nutritionalProfile: {
    protein: number;
    energy: number;
    calcium: number;
    phosphorus: number;
  };
  costPerKg: number;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

// ==================== Group ====================

export interface Group {
  groupId: string;
  farmId: string;
  name: string;
  type: 'feed' | 'treatment' | 'pen' | 'other';
  description?: string;
  animalIds: string[];
  createdAt: number;
  updatedAt: number;
}

// ==================== Health Protocol ====================

export interface HealthProtocol {
  protocolId: string;
  farmId: string;
  name: string;
  description: string;
  species: LivestockType[];
  applicableTo: string[];
  schedule?: Array<{
    task: string;
    frequency: string;
    dueOffset?: number;               // days after start
  }>;
  medications?: Array<{
    medicationId: string;
    dosage: string;
    route: string;
    withdrawal: number;
  }>;
  createdAt: number;
  updatedAt: number;
}

// ==================== Performance Metrics ====================

export interface PerformanceMetrics {
  animalId: string;
  dateRange: { start: number; end: number };
  averageDailyGain: number;            // kg/day
  feedConversionRatio: number;          // kg feed / kg gain
  // ... other metrics
}

// ==================== Practice Topic ====================

export interface PracticeTopic {
  topicId: string;
  name: string;
  description?: string;
  parentTopicId?: string;
  scope: 'public' | 'private';
  createdBy?: string;
  createdAt: number;
  updatedAt: number;
}

export interface Note {
  noteId: string;
  topicId: string;
  title: string;
  content: string;
  scope: 'public' | 'private';
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface PracticeQuestion {
  questionId: string;
  topicId: string;
  questionText: string;
  questionType: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
  options?: string[];
  correctAnswer?: string | number;
  explanation?: string;
  hint?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  scope: 'public' | 'private';
  approved: boolean;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface PracticeAttempt {
  attemptId: string;
  questionId: string;
  userId: string;
  answer: string;
  isCorrect: boolean;
  timestamp: number;
}

// ==================== Exam ====================

export interface Exam {
  examId: string;
  title: string;
  description: string;
  questions: string[];                // question IDs
  timeLimit: number;                   // minutes
  passingScore: number;                // percentage
  attemptsAllowed: number;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface ExamAttempt {
  attemptId: string;
  examId: string;
  userId: string;
  startTime: number;
  endTime?: number;
  answers: Record<string, string>;
  score?: number;
  passed?: boolean;
}

// ==================== Content Submission ====================

export interface ContentSubmission {
  submissionId: string;
  userId: string;
  contentType: 'question' | 'note' | 'topic';
  content: any;
  status: 'pending' | 'approved' | 'rejected' | 'changes_requested';
  submittedAt: number;
  reviewedAt?: number;
  reviewedBy?: string;
  reviewerComments?: string;
}

// ==================== Analytics Event ====================

export interface AnalyticsEvent {
  eventId: string;
  userId: string;
  eventType: string;
  timestamp: number;
  data: Record<string, any>;
}

// ==================== KPI (already defined) ====================

// ==================== Weather Alert ====================

export interface WeatherAlert {
  alertId: string;
  farmId: string;
  title: string;
  description: string;
  severity: 'info' | 'watch' | 'warning' | 'critical';
  startTime: number;
  endTime: number;
  areas: string[];
  instructions?: string;
  source: string;
}

// ==================== System Status ====================

export interface SystemStatus {
  systemId: string;
  name: string;
  status: 'operational' | 'degraded' | 'down' | 'maintenance';
  lastChecked: number;
  responseTime: number;
  uptime: number;                     // percentage
  incidents: Array<{
    incidentId: string;
    startTime: number;
    endTime?: number;
    description: string;
    resolved: boolean;
  }>;
}

// ==================== Tax Filing ====================

export interface TaxFiling {
  filingId: string;
  farmId: string;
  formType: string;
  taxYear: number;
  period: { start: number; end: number };
  dueDate: number;
  filedDate?: number;
  amountPaid: number;
  status: 'draft' | 'filed' | 'paid' | 'overdue';
  confirmationNumber?: string;
  pdfUrl?: string;
  notes?: string;
}

export interface TaxLiability {
  liabilityId: string;
  farmId: string;
  authorityId: string;
  taxType: string;
  period: { start: number; end: number };
  taxableAmount: number;
  taxAmount: number;
  paid: number;
  balance: number;
  dueDate: number;
  status: 'open' | 'paid' | 'overdue';
}

// ==================== Telemetry Reading ====================

export interface TelemetryReading {
  readingId: string;
  machineryId: string;
  timestamp: number;
  engineHours: number;
  fuelLevel: number;                  // percentage
  engineLoad: number;                  // percentage
  speed: number;                       // km/h
  location: { lat: number; lng: number };
  fuelConsumption: number;             // L/h
  errorCodes?: string[];
  faultCodes?: string[];
  batteryVoltage?: number;
}

// ==================== Quality Test ====================

export interface QualityTest {
  testId: string;
  batchId: string;
  testType: string;
  testDate: number;
  laboratory?: string;
  labReportUrl?: string;
  results: Array<{
    parameter: string;
    value: number;
    unit: string;
    passed: boolean;
  }>;
  overallPass: boolean;
  certificateUrl?: string;
  testedBy?: string;
  expiresAt?: number;
  createdAt: number;
}

// ==================== Machinery API Connection ====================

export interface MachineryApiConnection {
  connectionId: string;
  farmId: string;
  manufacturer: string;
  apiKey: string;
  status: 'active' | 'error' | 'disabled';
  lastSync?: number;
  machineryIds: string[];
  syncHistory: Array<{
    syncId: string;
    startTime: number;
    endTime: number;
    recordsFetched: number;
    status: 'success' | 'failed';
  }>;
}

// ==================== Maintenance Record ====================

export interface MaintenanceRecord {
  recordId: string;
  machineryId: string;
  date: number;
  type: 'scheduled' | 'repair' | 'inspection';
  description: string;
  cost: number;
  hoursAtService: number;
  completed: boolean;
  completedBy?: string;
  parts?: Array<{
    name: string;
    quantity: number;
    cost: number;
  }>;
  nextDueDate?: number;
  notes?: string;
  createdAt: number;
}

// ==================== Fuel Log ====================

export interface FuelLog {
  logId: string;
  machineryId: string;
  date: number;
  gallons: number;
  price: number;
  hoursAtFill: number;
  operatorId: string;
  notes?: string;
}

// ==================== Field Operation ====================

export interface FieldOperation {
  operationId: string;
  fieldId: string;
  machineryId: string;
  operationType: 'tillage' | 'planting' | 'spraying' | 'harvesting' | 'irrigation';
  startTime: number;
  endTime: number;
  areaCovered: number;                 // ha
  operatorId: string;
  notes?: string;
}

// ==================== Labor Cost ====================

export interface LaborCost {
  costId: string;
  farmId: string;
  date: number;
  employeeId: string;
  hours: number;
  overtimeHours: number;
  rate: number;
  overtimeRate: number;
  totalCost: number;
  taskId?: string;
  allocatedTo?: string;                // e.g., field ID, crop ID, equipment ID
  notes?: string;
}

// ==================== Labor Dashboard ====================

export interface LaborDashboard {
  farmId: string;
  activeEmployees: number;
  employeesOnLeave: number;
  openTasks: number;
  tasksDueToday: number;
  totalHoursThisWeek: number;
  overtimeHoursThisWeek: number;
  laborCostThisWeek: number;
  upcomingCertifications: Array<{
    employeeId: string;
    employee: string;
    certification: string;
    expires: number;
  }>;
}

// ==================== Management Zone ====================

export interface ManagementZone {
  zoneId: string;
  farmId: string;
  fieldId: string;
  name: string;
  areaHa: number;
  productivity: 'high' | 'medium' | 'low';
  soilProperties?: Record<string, any>;
  yieldHistory?: Array<{ year: number; yield: number }>;
  recommendations?: string[];
  createdAt: number;
  updatedAt: number;
}

// ==================== Performance Review ====================

export interface PerformanceReview {
  reviewId: string;
  employeeId: string;
  reviewerId: string;
  reviewPeriod: { start: number; end: number };
  ratings: {
    quality: number;                   // 1-5
    productivity: number;
    reliability: number;
    teamwork: number;
    safety: number;
  };
  strengths?: string;
  improvements?: string;
  comments?: string;
  createdAt: number;
}

// ==================== Work Schedule ====================

export interface WorkSchedule {
  scheduleId: string;
  farmId: string;
  weekStart: number;
  shifts: Shift[];
  createdAt: number;
  updatedAt: number;
}

export interface Shift {
  shiftId: string;
  scheduleId: string;
  employeeId: string;
  date: number;
  startTime: number;
  endTime: number;
  breakMinutes: number;
  taskIds: string[];
  notes?: string;
  confirmed: boolean;
}

// ==================== Predictive Model ====================

export interface PredictiveModel {
  modelId: string;
  farmId: string;
  name: string;
  type: 'yield' | 'pest' | 'price' | 'weather' | 'growth';
  algorithm: 'linear' | 'random_forest' | 'xgboost' | 'lstm' | 'custom';
  target: string;
  features: string[];
  trainingData: {
    records: number;
    startDate: number;
    endDate: number;
  };
  accuracy: number;
  lastTrained: number;
  status: 'draft' | 'training' | 'ready' | 'failed';
  parameters: Record<string, any>;
}

export interface Prediction {
  predictionId: string;
  modelId: string;
  timestamp: number;
  value: number;
  lowerBound?: number;
  upperBound?: number;
  confidence: number;
  features: Record<string, any>;
}

// ==================== Training Record ====================

export interface TrainingRecord {
  recordId: string;
  employeeId: string;
  trainingName: string;
  provider: string;
  dateCompleted: number;
  expirationDate?: number;
  certificateUrl?: string;
  notes?: string;
  createdAt: number;
}

// ==================== Animal Medication ====================

export interface AnimalMedication {
  medicationId: string;
  companyId: string;
  name: string;
  commercialName?: string;
  medicationCategory: 'vaccine' | 'antibiotic' | 'antiparasitic' | 'anti-inflammatory' | 'hormone' | 'vitamin' | 'mineral_supplement' | 'probiotic' | 'other';
  targetSpecies: string[];
  activeIngredients: Array<{ name: string; concentration: string; unit: string }>;
  formulation: 'injectable' | 'oral' | 'topical' | 'feed_additive' | 'water_soluble' | 'powder' | 'liquid' | 'tablet' | 'capsule' | 'other';
  dosage?: string;
  withdrawalPeriod?: number;            // days before animal products can be used
  storageInstructions?: string;
  expiryDate?: number;
  price?: number;
  currency?: string;
  requiresPrescription: boolean;
  isOrganic?: boolean;
  manufacturer?: string;
  registrationNumber?: string;
  images: string[];
  averageEfficacy?: number;
  efficacyCount?: number;
  created: number;
  updated: number;
}

// ==================== Propagation Material ====================

export interface PropagationMaterial {
  materialId: string;
  companyId: string;
  name: string;
  propagationType: 'seed' | 'cutting' | 'bulb' | 'tuber' | 'rhizome' | 'graft' | 'tissue_culture' | 'seedling' | 'spore' | 'other';
  plantId: string;
  varietyId?: string;
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
  germinationRate?: number;
  purity?: number;
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
  averageEfficacy?: number;
  efficacyCount?: number;
  created: number;
  updated: number;
}

// ==================== Chemical Product (additions) ====================

export interface ChemicalProduct {
  productId: string;
  companyId: string;
  name: string;
  commercialName?: string;
  activeIngredients: Array<{ name: string; concentration: string; unit: string }>;
  chemicalCategory: ChemicalCategory;
  targetPests: string[];
  targetCrops: string[];
  modeOfAction?: { group: string; code: string; description?: string };
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
  phiDays: number;
  reiHours: number;
  applicationRate: { min: number; max: number; unit: string };
  price?: number;
  currency?: string;
  registrationNumber?: string;
  msdsUrl?: string;
  images: string[];
  resistanceRisk?: 'low' | 'medium' | 'high';
  resistanceManagementNotes?: string;
  isOrganic: boolean;
  isSynthetic: boolean;
  isBanned?: boolean;                    // derived from bans
  // Regulatory attributes
  organicAllowed?: boolean;
  approvedInMarkets?: string[];
  bannedIn?: string[];
  maxResidueLimits?: Array<{ market: string; mrl: number; unit?: string }>;
  // Safety & handling
  handlingProcedures?: string;
  emergencyProcedures?: string;
  firstAidInstructions?: string;
  spillProcedures?: string;
  disposalProcedures?: string;
  sdsUrl?: string;
  handlingVideoUrl?: string;
  emergencyContact?: { phone: string; email?: string; hours?: string };
  proceduresLastUpdated?: number;
  proceduresVersion?: string;
  // Efficacy
  averageEfficacy?: number;
  efficacyCount?: number;
  // Additional for compliance
  prohibitedPests?: string[];            // pests for which this chemical is prohibited
  activeIngredientIds?: string[];         // compound IDs
  created: number;
  updated: number;
}

// ==================== Chemical Ban ====================

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
  title?: string;  // added for consistency
}

// ==================== Chemical Warning ====================

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

// ==================== Chemical Selection ====================

export interface ChemicalSelection {
  chemicalId: string;
  name: string;
  commercialName?: string;
  category: ChemicalCategory;
  isOrganic: boolean;
  isBanned?: boolean;
  confidence?: number;
}

// ==================== Chemical (legacy) ====================

export interface Chemical {
  id: string;
  referenceId?: string;
  name: string;
  commercialName?: string;
  manufacturer: string;
  activeIngredients: string[];
  targetOrganismIds: string[];
  instructions: string;
  safetyData: string;
  toxicityClass: 'I' | 'II' | 'III' | 'IV';
  phiDays: number;
  reiHours: number;
  timestamp: number;
}

// ==================== Farm Tool ====================

export interface FarmTool {
  id: string;
  manufacturerId: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  image?: string;
}

// ==================== Company (legacy) ====================

export interface Company {
  id: string;
  name: string;
  type: string;
  description: string;
  location: string;
  verified: boolean;
}

// ==================== NGO Project ====================

export interface NGOProject {
  id: string;
  title: string;
  description: string;
  region: string;
  startDate: number;
  endDate?: number;
  ngoId: string;
  budget?: number;
  status: 'planning' | 'active' | 'completed';
}

// ==================== Agri Law ====================

export interface AgriLaw {
  id: string;
  title: string;
  content: string;
  category: string;
  country: string;
  enactedDate: number;
  enforcedBy: string;
}

// ==================== Group Invitation ====================

export interface GroupInvitation {
  id: string;
  groupId: string;
  groupName: string;
  farmerId: string;
  farmerName: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  timestamp: number;
}

// ==================== Friend Request ====================

export interface FriendRequest {
  id: string;
  fromId: string;
  fromName: string;
  toId: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  timestamp: number;
}

// ==================== Supplier ====================

export interface Supplier {
  supplierId: string;
  name: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  paymentTerms: string;
  isActive: boolean;
}

// ==================== Chat Message ====================

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp?: number;
  groundingSources?: Array<{ title: string; uri: string }>;
}

// ==================== Soil Analysis ====================

export interface SoilAnalysis {
  ph: number;
  n: number;
  p: number;
  k: number;
  organicMatter: number;
  moisture: number;
  timestamp: number;
}

// ==================== Project ====================

export interface Project {
  id: string;
  name: string;
  description: string;
  userId: string;
  createdAt: number;
}

// ==================== Generated Asset ====================

export interface GeneratedAsset {
  id: string;
  projectId: string;
  type: string;
  url: string;
  prompt: string;
  timestamp: number;
}

// ==================== Module ====================

export interface Module {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  lessons: Lesson[];
  estimatedMinutes: number;
}

// ==================== Lesson (duplicate) ====================

// Already defined above.

// ==================== UserProgress ====================

export interface UserProgress {
  userId: string;
  completedModuleIds: string[];
  lessonProgress: Record<string, boolean>;
}

// ==================== ResearchPaper ====================

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  keywords: string[];
  authors: { name: string; affiliation: string }[];
  correspondingAuthorId: string;
  publicationDate: number;
  status: 'PREPRINT' | 'UNDER_REVIEW' | 'PUBLISHED';
  journalName?: string;
  doi?: string;
  license: string;
  language: string;
  researchArea: string;
  relatedEntityIds: string[];
  relatedChemicalIds: string[];
  geographicFocus: string[];
  fundingSources: string[];
  citationCount: number;
  submittedBy?: string;
  submittedAt?: number;
  publishedAt?: number;
}

// ==================== Institution ====================

export interface Institution {
  id: string;
  name: string;
  type: string;
  location: string;
}

// ==================== UniversityDetails ====================

export interface UniversityDetails {
  legalName: string;
  acronym: string;
  type: 'public' | 'private';
  yearEstablished: number;
  location: {
    address: string;
    city: string;
    region: string;
    country: string;
    postalCode?: string;
    coordinates?: { lat: number; lng: number };
  };
  accreditation: {
    body: string;
    certificateNumber: string;
    expiryDate: number;
  };
  mainContact: {
    name: string;
    email: string;
    phone: string;
  };
  registrar: {
    name: string;
    email: string;
  };
  verificationOffice: {
    name: string;
    contact: string;
  };
  academicStructure: {
    faculties: Array<{ name: string; departments: string[] }>;
    programmes: Array<{ name: string; level: string; duration: string }>;
    courses: Array<{ code: string; name: string; credits: number }>;
  };
  researchCentres: Array<{
    name: string;
    director: string;
    focus: string;
    projects: string[];
  }>;
  extensionResources: Array<{
    type: string;
    title: string;
    url: string;
  }>;
}

// ==================== Article ====================

export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  authorId: string;
  createdAt: number;
  updatedAt: number;
  publishedAt?: number;
}

// ==================== Comment ====================

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  content: string;
  createdAt: number;
}

// ==================== Like ====================

export interface Like {
  id: string;
  articleId: string;
  userId: string;
  createdAt: number;
}

// ==================== Task ====================

export interface Task {
  taskId: string;
  farmId: string;
  title: string;
  description: string;
  taskType: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  assignedTo: string[];
  assignedBy: string;
  assignedAt: number;
  fieldId?: string;
  dueDate?: number;
  completedAt?: number;
  completedBy?: string;
  estimatedHours: number;
  actualHours?: number;
  notes?: string;
  attachments?: string[];
  metadata?: Record<string, any>;
  recurring?: {
    frequency: string;
    endDate?: number;
  };
  createdAt: number;
  updatedAt: number;
}

// ==================== Crop Rotation Suggestion ====================

export interface CropRotationSuggestion {
  cropId: string;
  cropName: string;
  scientificName?: string;
  score: number;
  reasons: string[];
  estimatedProfit?: number;
  estimatedYield?: number;
  seasonMatch: boolean;
  soilMatch: boolean;
  pestRisk: 'low' | 'medium' | 'high';
}

// ==================== Plant Part (duplicate) ====================

// Already defined above.

// ==================== Plant Part Compound ====================

export interface PlantPartCompound {
  id: string;
  plantPartId: string;
  compoundId: string;
  concentration: number;
  concentrationUnit: '%' | 'ppm' | 'mg/g' | 'μg/g';
  concentrationNotes?: string;
  role?: 'ACTIVE' | 'TOXIC' | 'FLAVOR' | 'AROMA' | 'UNKNOWN';
  source?: string;
  notes?: string;
  createdAt: number;
  updatedAt: number;
}

// ==================== Compound ====================

export interface Compound {
  compoundId: string;
  name: string;
  commonNames: string[];
  molecularFormula: string;
  molecularWeight?: number;
  smiles?: string;
  inchi?: string;
  inchiKey?: string;
  structureImage?: string;
  structureData?: string;
  pubchemCid?: number;
  source: 'MANUAL' | 'PUBCHEM' | 'OTHER';
  nutritionalRole?: 'vitamin' | 'mineral' | 'protein' | 'carbohydrate' | 'fat' | 'fiber' | 'other';
  toxicity?: {
    level: 'low' | 'medium' | 'high' | 'lethal';
    symptoms?: string[];
    notes?: string;
  };
  createdAt: number;
  updatedAt: number;
}

// ==================== Professional Profile ====================

export interface AvailabilitySlot {
  dayOfWeek: number;
  startHour: number;
  endHour: number;
}

export interface ProfessionalProfile {
  userId: string;
  bio: string;
  expertise: string[];
  hourlyRate: number;              // in cents
  currency: string;
  averageRating?: number;
  totalConsultations?: number;
  availability?: AvailabilitySlot[];
  isActive: boolean;
  stripeAccountId?: string;
  createdAt: number;
  updatedAt: number;
}

export type ConsultationStatus = 'pending' | 'accepted' | 'declined' | 'cancelled' | 'completed';

export interface ConsultationRequest {
  requestId: string;
  userId: string;
  professionalId: string;
  topic: string;
  description: string;
  proposedTime?: number;
  durationMinutes: number;
  status: ConsultationStatus;
  paymentIntentId?: string;
  amount: number;                  // in cents
  platformFee: number;              // in cents
  professionalPayout: number;        // in cents
  createdAt: number;
  updatedAt: number;
  completedAt?: number;
  meetingLink?: string;
  recordingUrl?: string;
}

export interface ConsultationReview {
  reviewId: string;
  requestId: string;
  userId: string;
  professionalId: string;
  rating: number;                   // 1-5
  comment?: string;
  createdAt: number;
}

export interface PaymentTransaction {
  transactionId: string;
  requestId: string;
  userId: string;
  professionalId: string;
  type: 'charge' | 'refund' | 'payout';
  amount: number;
  stripePaymentIntentId?: string;
  stripeTransferId?: string;
  status: 'succeeded' | 'failed' | 'pending';
  createdAt: number;
}

// ==================== Environmental Modeling ====================

export type ClimateScenario = 'rcp45' | 'rcp85' | 'custom';
export type ClimateVariable = 'tasmax' | 'tasmin' | 'pr' | 'rsds';

export interface ClimateDataPoint {
  date: number;
  value: number;
}

export interface ClimateScenarioData {
  scenarioId: string;
  name: string;
  scenario: ClimateScenario;
  timeHorizon: [number, number];
  variables: {
    [key in ClimateVariable]?: ClimateDataPoint[];
  };
  source: string;
  createdAt: number;
}

export interface CropModelInput {
  cropId: string;
  varietyId?: string;
  plantingDate: number;              // day of year (1-365)
  soilProfile: {
    sand: number;                     // percentage
    clay: number;
    organicMatter: number;
    bulkDensity: number;              // g/cm³
    ph: number;
    depth: number;                    // cm
  };
  management: {
    irrigation: boolean;
    fertilizer?: {
      amount: number;                  // kg/ha
      type: string;                    // e.g., "urea"
    };
  };
  weatherData?: ClimateDataPoint[];
}

export interface YieldProjection {
  projectionId: string;
  farmId: string;
  fieldId?: string;
  cropId: string;
  scenarioId?: string;
  year: number;
  predictedYield: number;              // kg/ha
  confidenceInterval?: [number, number];
  model: string;
  inputData: CropModelInput;
  calibrationFactor?: number;
  calibratedYield?: number;
  createdAt: number;
  createdBy: string;
}

export interface AdaptationRecommendation {
  recommendationId: string;
  farmId: string;
  cropId: string;
  scenarioId: string;
  title: string;
  description: string;
  actions: string[];
  confidence: 'low' | 'medium' | 'high';
  createdAt: number;
}

// ==================== Biotechnology ====================

export type GeneticElementType = 'gene' | 'promoter' | 'terminator' | 'construct' | 'marker';
export type TransformationMethod = 'agrobacterium' | 'biolistic' | 'electroporation' | 'other';

export interface GeneticElement {
  elementId: string;
  name: string;
  type: GeneticElementType;
  sequence?: string;
  description?: string;
  sourceOrganism?: string;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  isPublic: boolean;
}

export interface ConstructElement {
  elementId: string;
  order: number;
  notes?: string;
}

export interface Construct {
  constructId: string;
  name: string;
  description?: string;
  elements: ConstructElement[];
  backbone?: string;
  selectionMarker?: string;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  isPublic: boolean;
}

export interface TransformationEvent {
  eventId: string;
  constructId: string;
  targetCropId: string;
  targetCropName?: string;
  method: TransformationMethod;
  date: number;
  labId?: string;
  selectionMarker?: string;
  results?: {
    transformantsCount: number;
    confirmedEvents: number;
    notes?: string;
  };
  confirmationProcedures?: string[];   // lab procedure IDs
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  isPublic: boolean;
}

export interface FieldTrial {
  trialId: string;
  name: string;
  description?: string;
  cropId: string;
  cropName?: string;
  eventId?: string;
  location: {
    description?: string;
    coordinates?: { lat: number; lng: number };
    farmId?: string;
    fieldId?: string;
  };
  startDate: number;
  endDate?: number;
  design: 'randomized_block' | 'split_plot' | 'completely_randomized';
  treatments: string[];
  replications: number;
  plotCount?: number;
  measurements: FieldTrialMeasurement[];
  status: 'planned' | 'active' | 'completed' | 'abandoned';
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  isPublic: boolean;
}

export interface FieldTrialMeasurement {
  measurementId: string;
  trialId: string;
  plotId?: string;
  date: number;
  parameter: string;
  value: number;
  unit: string;
  notes?: string;
  createdBy: string;
  createdAt: number;
}

// ==================== Biodiversity ====================

export type OrganismCategory = 'pollinator' | 'beneficial_insect' | 'bird' | 'mammal' | 'amphibian' | 'reptile' | 'plant' | 'other';

export interface BiodiversityObservation {
  observationId: string;
  farmId: string;
  fieldId?: string;
  organismName: string;
  scientificName?: string;
  category: OrganismCategory;
  count?: number;
  location: { lat: number; lng: number; accuracy?: number };
  timestamp: number;
  photoUrl?: string;
  notes?: string;
  verified?: boolean;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface BiodiversitySummary {
  summaryId: string;
  farmId: string;
  year: number;
  totalObservations: number;
  uniqueSpecies: number;
  countsByCategory: Record<OrganismCategory, number>;
  speciesList: Array<{
    organismName: string;
    scientificName?: string;
    observationCount: number;
    lastSeen: number;
  }>;
  trend: 'increasing' | 'stable' | 'decreasing';
  lastUpdated: number;
}

// ==================== All Types Export ====================
