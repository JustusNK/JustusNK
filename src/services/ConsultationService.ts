import { IConsultationService } from './interfaces';
import {
  ProfessionalProfile, ConsultationRequest, ConsultationReview, PaymentTransaction,
} from '../types';

const KEYS = {
  PROFESSIONAL_PROFILES: 'biopro_professional_profiles',
  CONSULTATION_REQUESTS: 'biopro_consultation_requests',
  CONSULTATION_REVIEWS: 'biopro_consultation_reviews',
  PAYMENT_TRANSACTIONS: 'biopro_payment_transactions',
};

export class ConsultationService implements IConsultationService {
  // --- Professionals ---
  getProfessionalProfiles(): ProfessionalProfile[] {
    return JSON.parse(localStorage.getItem(KEYS.PROFESSIONAL_PROFILES) || '[]');
  }

  getProfessionalProfile(userId: string): ProfessionalProfile | undefined {
    return this.getProfessionalProfiles().find(p => p.userId === userId);
  }

  saveProfessionalProfile(profile: ProfessionalProfile): void {
    const all = this.getProfessionalProfiles();
    const idx = all.findIndex(p => p.userId === profile.userId);
    if (idx >= 0) all[idx] = profile;
    else all.push(profile);
    localStorage.setItem(KEYS.PROFESSIONAL_PROFILES, JSON.stringify(all));
  }

  // --- Consultation requests ---
  getConsultationRequests(filters?: { userId?: string; professionalId?: string; status?: string }): ConsultationRequest[] {
    let all = JSON.parse(localStorage.getItem(KEYS.CONSULTATION_REQUESTS) || '[]');
    if (filters?.userId) all = all.filter((r: ConsultationRequest) => r.userId === filters.userId);
    if (filters?.professionalId) all = all.filter((r: ConsultationRequest) => r.professionalId === filters.professionalId);
    if (filters?.status) all = all.filter((r: ConsultationRequest) => r.status === filters.status);
    return all.sort((a: ConsultationRequest, b: ConsultationRequest) => b.createdAt - a.createdAt);
  }

  getConsultationRequest(id: string): ConsultationRequest | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.CONSULTATION_REQUESTS) || '[]');
    return all.find((r: ConsultationRequest) => r.requestId === id);
  }

  saveConsultationRequest(req: ConsultationRequest): void {
    const all = JSON.parse(localStorage.getItem(KEYS.CONSULTATION_REQUESTS) || '[]');
    const idx = all.findIndex((r: ConsultationRequest) => r.requestId === req.requestId);
    if (idx >= 0) all[idx] = req;
    else all.push(req);
    localStorage.setItem(KEYS.CONSULTATION_REQUESTS, JSON.stringify(all));
  }

  // --- Reviews ---
  getReviewsForProfessional(professionalId: string): ConsultationReview[] {
    const all = JSON.parse(localStorage.getItem(KEYS.CONSULTATION_REVIEWS) || '[]');
    return all.filter((r: ConsultationReview) => r.professionalId === professionalId);
  }

  saveReview(review: ConsultationReview): void {
    const all = JSON.parse(localStorage.getItem(KEYS.CONSULTATION_REVIEWS) || '[]');
    all.push(review);
    localStorage.setItem(KEYS.CONSULTATION_REVIEWS, JSON.stringify(all));
  }

  // --- Payment transactions ---
  savePaymentTransaction(tx: PaymentTransaction): void {
    const all = JSON.parse(localStorage.getItem(KEYS.PAYMENT_TRANSACTIONS) || '[]');
    all.push(tx);
    localStorage.setItem(KEYS.PAYMENT_TRANSACTIONS, JSON.stringify(all));
  }
}
