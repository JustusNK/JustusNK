import {
  BioEntity, Taxon, OrganismRelationship, PropagationMaterial,
  ChemicalProduct, ChemicalBan, ChemicalWarning, PhasedOutChemical,
  LandParcel, Animal, Machinery, Task,
  MarketingProduct, Budget, JournalEntry,
  ProfessionalProfile, ConsultationRequest, ConsultationReview, PaymentTransaction,
  BiodiversityObservation, BiodiversitySummary,
  GeneticElement, Construct, TransformationEvent, FieldTrial, FieldTrialMeasurement,
  ClimateScenarioData, YieldProjection, AdaptationRecommendation,
} from '../types';

// ==================== Organism domain ====================
export interface IOrganismService {
  // Entities
  getEntities(): BioEntity[];
  getEntityById(id: string): BioEntity | undefined;
  saveEntity(entity: BioEntity): void;
  deleteEntity(id: string): void;

  // Taxa
  getTaxa(): Taxon[];
  getTaxonById(id: string): Taxon | undefined;
  saveTaxon(taxon: Taxon): void;
  deleteTaxon(id: string): void;

  // Relationships
  getRelationships(): OrganismRelationship[];
  getRelationshipsForEntity(entityId: string): OrganismRelationship[];
  saveRelationship(rel: OrganismRelationship): void;
  deleteRelationship(id: string): void;

  // Propagation Materials
  getPropagationMaterials(): PropagationMaterial[];
  getPropagationMaterial(id: string): PropagationMaterial | undefined;
  savePropagationMaterial(mat: PropagationMaterial): void;
  deletePropagationMaterial(id: string): void;
}

// ==================== Chemical domain ====================
export interface IChemicalService {
  // Chemicals
  getChemicalProducts(): ChemicalProduct[];
  getChemicalProduct(id: string): ChemicalProduct | undefined;
  saveChemicalProduct(product: ChemicalProduct): void;
  deleteChemicalProduct(id: string): void;

  // Bans
  getChemicalBans(chemicalId?: string, countryCode?: string): ChemicalBan[];
  saveChemicalBan(ban: ChemicalBan): void;
  deleteChemicalBan(banId: string): void;

  // Warnings
  getChemicalWarnings(chemicalId?: string): ChemicalWarning[];
  saveChemicalWarning(warning: ChemicalWarning): void;
  deleteChemicalWarning(warningId: string): void;

  // Phased Out
  getPhasedOutChemicals(companyId?: string): PhasedOutChemical[];
  addPhasedOutChemical(phasedOut: PhasedOutChemical): void;
  isChemicalPhasedOut(chemicalId: string): boolean;
}

// ==================== Farm domain ====================
export interface IFarmService {
  // Land Parcels
  getLandParcels(farmerId?: string): LandParcel[];
  getLandParcel(id: string): LandParcel | undefined;
  saveLandParcel(parcel: LandParcel): void;
  deleteLandParcel(id: string): void;

  // Animals
  getAnimals(farmId: string): Animal[];
  getAnimal(id: string): Animal | undefined;
  saveAnimal(animal: Animal): void;
  deleteAnimal(id: string): void;

  // Machinery
  getMachinery(farmId?: string): Machinery[];
  getMachineryById(id: string): Machinery | undefined;
  saveMachinery(machinery: Machinery): void;
  deleteMachinery(id: string): void;

  // Tasks
  getTasks(farmId: string): Task[];
  getTask(id: string): Task | undefined;
  saveTask(task: Task): void;
  deleteTask(id: string): void;
}

// ==================== Finance domain ====================
export interface IFinanceService {
  // Marketing Products (loans, insurance)
  getProducts(): MarketingProduct[];
  getProduct(id: string): MarketingProduct | undefined;
  saveProduct(product: MarketingProduct): void;
  deleteProduct(id: string): void;

  // Budgets
  getBudgets(farmId: string): Budget[];
  getBudget(id: string): Budget | undefined;
  saveBudget(budget: Budget): void;
  deleteBudget(id: string): void;

  // Journal Entries
  getJournalEntries(farmId: string): JournalEntry[];
  getJournalEntry(id: string): JournalEntry | undefined;
  saveJournalEntry(entry: JournalEntry): void;
  deleteJournalEntry(id: string): void;
}

// ==================== Consultation domain ====================
export interface IConsultationService {
  // Professionals
  getProfessionalProfiles(): ProfessionalProfile[];
  getProfessionalProfile(userId: string): ProfessionalProfile | undefined;
  saveProfessionalProfile(profile: ProfessionalProfile): void;

  // Consultation requests
  getConsultationRequests(filters?: { userId?: string; professionalId?: string; status?: string }): ConsultationRequest[];
  getConsultationRequest(id: string): ConsultationRequest | undefined;
  saveConsultationRequest(req: ConsultationRequest): void;

  // Reviews
  getReviewsForProfessional(professionalId: string): ConsultationReview[];
  saveReview(review: ConsultationReview): void;

  // Payment transactions
  savePaymentTransaction(tx: PaymentTransaction): void;
}

// ==================== Ecology domain ====================
export interface IEcologyService {
  // Biodiversity observations
  getBiodiversityObservations(farmId: string, filters?: { fieldId?: string; category?: string; from?: number; to?: number }): BiodiversityObservation[];
  getBiodiversityObservation(id: string): BiodiversityObservation | undefined;
  saveBiodiversityObservation(obs: BiodiversityObservation): void;
  deleteBiodiversityObservation(id: string): void;

  // Biodiversity summaries
  getBiodiversitySummary(farmId: string, year: number): BiodiversitySummary | null;
  saveBiodiversitySummary(summary: BiodiversitySummary): void;
}

// ==================== Biotechnology domain ====================
export interface IBiotechService {
  // Genetic elements
  getGeneticElements(filters?: { createdBy?: string; type?: string }): GeneticElement[];
  getGeneticElement(id: string): GeneticElement | undefined;
  saveGeneticElement(el: GeneticElement): void;
  deleteGeneticElement(id: string): void;

  // Constructs
  getConstructs(filters?: { createdBy?: string }): Construct[];
  getConstruct(id: string): Construct | undefined;
  saveConstruct(construct: Construct): void;
  deleteConstruct(id: string): void;

  // Transformation events
  getTransformationEvents(filters?: { createdBy?: string; cropId?: string }): TransformationEvent[];
  getTransformationEvent(id: string): TransformationEvent | undefined;
  saveTransformationEvent(event: TransformationEvent): void;
  deleteTransformationEvent(id: string): void;

  // Field trials
  getFieldTrials(filters?: { createdBy?: string; cropId?: string; status?: string }): FieldTrial[];
  getFieldTrial(id: string): FieldTrial | undefined;
  saveFieldTrial(trial: FieldTrial): void;
  deleteFieldTrial(id: string): void;

  // Measurements
  getMeasurements(trialId: string): FieldTrialMeasurement[];
  addMeasurement(measurement: FieldTrialMeasurement): void;
  deleteMeasurement(id: string): void;
}

// ==================== Environmental Modeling domain ====================
export interface IEnvironmentalModelingService {
  // Climate scenarios
  getClimateScenarios(farmId: string): ClimateScenarioData[];
  getClimateScenario(id: string): ClimateScenarioData | undefined;
  saveClimateScenario(scenario: ClimateScenarioData): void;

  // Yield projections
  getYieldProjections(filters?: { farmId?: string; fieldId?: string; cropId?: string }): YieldProjection[];
  getYieldProjection(id: string): YieldProjection | undefined;
  saveYieldProjection(proj: YieldProjection): void;

  // Adaptation recommendations
  getAdaptationRecommendations(farmId: string, cropId: string, scenarioId: string): AdaptationRecommendation[];
}
