// src/types/efficacy.ts

export type EfficacyEntityType =
  | 'chemical'
  | 'medication'
  | 'propagation'
  | 'variety'
  | 'equipment'
  | 'practice';

export interface EfficacyRecord {
  efficacyId: string;
  entityType: EfficacyEntityType;
  entityId: string;
  farmId: string;
  fieldId?: string;
  cropId?: string;
  pestId?: string;
  animalId?: string;
  applicationId?: string;                    // Link to treatment/application record
  rating: number;                             // 1-5
  metrics?: Record<string, number>;            // e.g., { pestReduction: 85, yieldIncrease: 12 }
  notes?: string;
  recordedBy: string;
  recordedAt: number;
}

export interface AggregateEfficacy {
  entityId: string;
  averageRating: number;
  totalRatings: number;
  distribution: { 1: number; 2: number; 3: number; 4: number; 5: number };
}
