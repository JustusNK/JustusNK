import { IFinanceService } from './interfaces';
import {
  MarketingProduct, Budget, JournalEntry,
} from '../types';

const KEYS = {
  PRODUCTS: 'biopro_marketing_products',
  BUDGETS: 'biopro_budgets',
  JOURNAL_ENTRIES: 'biopro_journal_entries',
};

export class FinanceService implements IFinanceService {
  // --- Marketing Products (loans, insurance) ---
  getProducts(): MarketingProduct[] {
    return JSON.parse(localStorage.getItem(KEYS.PRODUCTS) || '[]');
  }

  getProduct(id: string): MarketingProduct | undefined {
    return this.getProducts().find(p => p.id === id);
  }

  saveProduct(product: MarketingProduct): void {
    const all = this.getProducts();
    const idx = all.findIndex(p => p.id === product.id);
    if (idx >= 0) all[idx] = product;
    else all.push(product);
    localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(all));
  }

  deleteProduct(id: string): void {
    const all = this.getProducts();
    const filtered = all.filter(p => p.id !== id);
    localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(filtered));
  }

  // --- Budgets ---
  getBudgets(farmId: string): Budget[] {
    const all = JSON.parse(localStorage.getItem(KEYS.BUDGETS) || '[]');
    return all.filter((b: Budget) => b.farmId === farmId);
  }

  getBudget(id: string): Budget | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.BUDGETS) || '[]');
    return all.find((b: Budget) => b.budgetId === id);
  }

  saveBudget(budget: Budget): void {
    const all = JSON.parse(localStorage.getItem(KEYS.BUDGETS) || '[]');
    const idx = all.findIndex((b: Budget) => b.budgetId === budget.budgetId);
    if (idx >= 0) all[idx] = budget;
    else all.push(budget);
    localStorage.setItem(KEYS.BUDGETS, JSON.stringify(all));
  }

  deleteBudget(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.BUDGETS) || '[]');
    const filtered = all.filter((b: Budget) => b.budgetId !== id);
    localStorage.setItem(KEYS.BUDGETS, JSON.stringify(filtered));
  }

  // --- Journal Entries ---
  getJournalEntries(farmId: string): JournalEntry[] {
    const all = JSON.parse(localStorage.getItem(KEYS.JOURNAL_ENTRIES) || '[]');
    return all.filter((e: JournalEntry) => e.farmId === farmId);
  }

  getJournalEntry(id: string): JournalEntry | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.JOURNAL_ENTRIES) || '[]');
    return all.find((e: JournalEntry) => e.entryId === id);
  }

  saveJournalEntry(entry: JournalEntry): void {
    const all = JSON.parse(localStorage.getItem(KEYS.JOURNAL_ENTRIES) || '[]');
    const idx = all.findIndex((e: JournalEntry) => e.entryId === entry.entryId);
    if (idx >= 0) all[idx] = entry;
    else all.push(entry);
    localStorage.setItem(KEYS.JOURNAL_ENTRIES, JSON.stringify(all));
  }

  deleteJournalEntry(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.JOURNAL_ENTRIES) || '[]');
    const filtered = all.filter((e: JournalEntry) => e.entryId !== id);
    localStorage.setItem(KEYS.JOURNAL_ENTRIES, JSON.stringify(filtered));
  }
}
