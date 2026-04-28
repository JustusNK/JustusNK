// Export all service interfaces
export * from './interfaces';

// Import concrete implementations
import { OrganismService } from './OrganismService';
import { ChemicalService } from './ChemicalService';
import { FarmService } from './FarmService';
import { FinanceService } from './FinanceService';
import { ConsultationService } from './ConsultationService';
import { EcologyService } from './EcologyService';
import { BiotechService } from './BiotechService';
import { EnvironmentalModelingService } from './EnvironmentalModelingService';

// Create singleton instances
export const organismService = new OrganismService();
export const chemicalService = new ChemicalService();
export const farmService = new FarmService();
export const financeService = new FinanceService();
export const consultationService = new ConsultationService();
export const ecologyService = new EcologyService();
export const biotechService = new BiotechService();
export const environmentalModelingService = new EnvironmentalModelingService();

// Optional: provide a way to swap implementations (e.g., for Firebase)
export function setServices(
  newOrganism?: typeof organismService,
  newChemical?: typeof chemicalService,
  newFarm?: typeof farmService,
  newFinance?: typeof financeService,
  newConsultation?: typeof consultationService,
  newEcology?: typeof ecologyService,
  newBiotech?: typeof biotechService,
  newEnvironmental?: typeof environmentalModelingService
) {
  if (newOrganism) Object.assign(organismService, newOrganism);
  if (newChemical) Object.assign(chemicalService, newChemical);
  if (newFarm) Object.assign(farmService, newFarm);
  if (newFinance) Object.assign(financeService, newFinance);
  if (newConsultation) Object.assign(consultationService, newConsultation);
  if (newEcology) Object.assign(ecologyService, newEcology);
  if (newBiotech) Object.assign(biotechService, newBiotech);
  if (newEnvironmental) Object.assign(environmentalModelingService, newEnvironmental);
}
