import { IChemicalService } from './interfaces';
import {
  ChemicalProduct, ChemicalBan, ChemicalWarning, PhasedOutChemical,
} from '../types';

const KEYS = {
  CHEMICALS: 'biopro_chemicals',
  BANS: 'biopro_chemical_bans',
  WARNINGS: 'biopro_chemical_warnings',
  PHASED_OUT: 'biopro_phased_out_chemicals',
};

export class ChemicalService implements IChemicalService {
  // --- Chemicals ---
  getChemicalProducts(): ChemicalProduct[] {
    return JSON.parse(localStorage.getItem(KEYS.CHEMICALS) || '[]');
  }

  getChemicalProduct(id: string): ChemicalProduct | undefined {
    return this.getChemicalProducts().find(c => c.productId === id);
  }

  saveChemicalProduct(product: ChemicalProduct): void {
    const all = this.getChemicalProducts();
    const idx = all.findIndex(c => c.productId === product.productId);
    if (idx >= 0) all[idx] = product;
    else all.push(product);
    localStorage.setItem(KEYS.CHEMICALS, JSON.stringify(all));
  }

  deleteChemicalProduct(id: string): void {
    const all = this.getChemicalProducts();
    const filtered = all.filter(c => c.productId !== id);
    localStorage.setItem(KEYS.CHEMICALS, JSON.stringify(filtered));
  }

  // --- Bans ---
  getChemicalBans(chemicalId?: string, countryCode?: string): ChemicalBan[] {
    let all = JSON.parse(localStorage.getItem(KEYS.BANS) || '[]');
    if (chemicalId) all = all.filter((b: ChemicalBan) => b.chemicalId === chemicalId);
    if (countryCode) all = all.filter((b: ChemicalBan) => b.countryCode === countryCode);
    return all;
  }

  saveChemicalBan(ban: ChemicalBan): void {
    const all = JSON.parse(localStorage.getItem(KEYS.BANS) || '[]');
    const idx = all.findIndex((b: ChemicalBan) => b.banId === ban.banId);
    if (idx >= 0) all[idx] = ban;
    else all.push(ban);
    localStorage.setItem(KEYS.BANS, JSON.stringify(all));
  }

  deleteChemicalBan(banId: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.BANS) || '[]');
    const filtered = all.filter((b: ChemicalBan) => b.banId !== banId);
    localStorage.setItem(KEYS.BANS, JSON.stringify(filtered));
  }

  // --- Warnings ---
  getChemicalWarnings(chemicalId?: string): ChemicalWarning[] {
    let all = JSON.parse(localStorage.getItem(KEYS.WARNINGS) || '[]');
    if (chemicalId) all = all.filter((w: ChemicalWarning) => w.chemicalId === chemicalId);
    return all;
  }

  saveChemicalWarning(warning: ChemicalWarning): void {
    const all = JSON.parse(localStorage.getItem(KEYS.WARNINGS) || '[]');
    const idx = all.findIndex((w: ChemicalWarning) => w.warningId === warning.warningId);
    if (idx >= 0) all[idx] = warning;
    else all.push(warning);
    localStorage.setItem(KEYS.WARNINGS, JSON.stringify(all));
  }

  deleteChemicalWarning(warningId: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.WARNINGS) || '[]');
    const filtered = all.filter((w: ChemicalWarning) => w.warningId !== warningId);
    localStorage.setItem(KEYS.WARNINGS, JSON.stringify(filtered));
  }

  // --- Phased Out ---
  getPhasedOutChemicals(companyId?: string): PhasedOutChemical[] {
    let all = JSON.parse(localStorage.getItem(KEYS.PHASED_OUT) || '[]');
    if (companyId) all = all.filter((p: PhasedOutChemical) => p.companyId === companyId);
    return all;
  }

  addPhasedOutChemical(phasedOut: PhasedOutChemical): void {
    const all = this.getPhasedOutChemicals();
    all.push(phasedOut);
    localStorage.setItem(KEYS.PHASED_OUT, JSON.stringify(all));
  }

  isChemicalPhasedOut(chemicalId: string): boolean {
    return this.getPhasedOutChemicals().some(p => p.chemicalId === chemicalId);
  }
}
