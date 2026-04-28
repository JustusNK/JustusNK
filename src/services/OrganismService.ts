import { IOrganismService } from './interfaces';
import {
  BioEntity, Taxon, OrganismRelationship, PropagationMaterial,
} from '../types';

const KEYS = {
  ENTITIES: 'biopro_entities',
  TAXA: 'biopro_taxa',
  RELATIONSHIPS: 'biopro_relationships',
  PROPAGATION: 'biopro_propagation',
};

export class OrganismService implements IOrganismService {
  // --- Entities ---
  getEntities(): BioEntity[] {
    return JSON.parse(localStorage.getItem(KEYS.ENTITIES) || '[]');
  }

  getEntityById(id: string): BioEntity | undefined {
    return this.getEntities().find(e => e.id === id);
  }

  saveEntity(entity: BioEntity): void {
    const all = this.getEntities();
    const idx = all.findIndex(e => e.id === entity.id);
    if (idx >= 0) all[idx] = entity;
    else all.push(entity);
    localStorage.setItem(KEYS.ENTITIES, JSON.stringify(all));
  }

  deleteEntity(id: string): void {
    const all = this.getEntities();
    const filtered = all.filter(e => e.id !== id);
    localStorage.setItem(KEYS.ENTITIES, JSON.stringify(filtered));
  }

  // --- Taxa ---
  getTaxa(): Taxon[] {
    return JSON.parse(localStorage.getItem(KEYS.TAXA) || '[]');
  }

  getTaxonById(id: string): Taxon | undefined {
    return this.getTaxa().find(t => t.taxonId === id);
  }

  saveTaxon(taxon: Taxon): void {
    const all = this.getTaxa();
    const idx = all.findIndex(t => t.taxonId === taxon.taxonId);
    if (idx >= 0) all[idx] = taxon;
    else all.push(taxon);
    localStorage.setItem(KEYS.TAXA, JSON.stringify(all));
  }

  deleteTaxon(id: string): void {
    const all = this.getTaxa();
    const filtered = all.filter(t => t.taxonId !== id);
    localStorage.setItem(KEYS.TAXA, JSON.stringify(filtered));
  }

  // --- Relationships ---
  getRelationships(): OrganismRelationship[] {
    return JSON.parse(localStorage.getItem(KEYS.RELATIONSHIPS) || '[]');
  }

  getRelationshipsForEntity(entityId: string): OrganismRelationship[] {
    return this.getRelationships().filter(r => r.fromEntityId === entityId || r.toEntityId === entityId);
  }

  saveRelationship(rel: OrganismRelationship): void {
    const all = this.getRelationships();
    const idx = all.findIndex(r => r.relationshipId === rel.relationshipId);
    if (idx >= 0) all[idx] = rel;
    else all.push(rel);
    localStorage.setItem(KEYS.RELATIONSHIPS, JSON.stringify(all));
  }

  deleteRelationship(id: string): void {
    const all = this.getRelationships();
    const filtered = all.filter(r => r.relationshipId !== id);
    localStorage.setItem(KEYS.RELATIONSHIPS, JSON.stringify(filtered));
  }

  // --- Propagation Materials ---
  getPropagationMaterials(): PropagationMaterial[] {
    return JSON.parse(localStorage.getItem(KEYS.PROPAGATION) || '[]');
  }

  getPropagationMaterial(id: string): PropagationMaterial | undefined {
    return this.getPropagationMaterials().find(m => m.materialId === id);
  }

  savePropagationMaterial(mat: PropagationMaterial): void {
    const all = this.getPropagationMaterials();
    const idx = all.findIndex(m => m.materialId === mat.materialId);
    if (idx >= 0) all[idx] = mat;
    else all.push(mat);
    localStorage.setItem(KEYS.PROPAGATION, JSON.stringify(all));
  }

  deletePropagationMaterial(id: string): void {
    const all = this.getPropagationMaterials();
    const filtered = all.filter(m => m.materialId !== id);
    localStorage.setItem(KEYS.PROPAGATION, JSON.stringify(filtered));
  }
}
