import React, { createContext, useContext, useState, useCallback } from 'react';
import { organismService } from '../services';
import { BioEntity, EntityCategory } from '../types';
import { UniversalOrganismSelector, OrganismSelection } from '../components/UniversalOrganismSelector';

interface OrganismContextType {
  selectOrganism: (options: SelectOrganismOptions) => Promise<OrganismSelection | OrganismSelection[]>;
  getOrganism: (organismId: string) => BioEntity | undefined;
  refreshOrganisms: () => void;
  getOrganismsByCategory: (category: EntityCategory) => BioEntity[];
  getRelatedOrganisms: (organismId: string, relationship: string) => BioEntity[];
}

interface SelectOrganismOptions {
  context: string;
  initialCategory?: EntityCategory;
  multiple?: boolean;
  allowCreate?: boolean;
  excludeIds?: string[];
  placeholder?: string;
  required?: boolean;
}

const OrganismContext = createContext<OrganismContextType | undefined>(undefined);

export const useOrganism = () => {
  const context = useContext(OrganismContext);
  if (!context) throw new Error('useOrganism must be used within OrganismProvider');
  return context;
};

export const OrganismProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectorOptions, setSelectorOptions] = useState<SelectOrganismOptions | null>(null);
  const [selectorPromise, setSelectorPromise] = useState<{
    resolve: (value: OrganismSelection | OrganismSelection[]) => void;
    reject: (reason?: any) => void;
  } | null>(null);

  const selectOrganism = useCallback((options: SelectOrganismOptions): Promise<OrganismSelection | OrganismSelection[]> => {
    return new Promise((resolve, reject) => {
      setSelectorOptions(options);
      setSelectorPromise({ resolve, reject });
    });
  }, []);

  const handleSelect = useCallback((selection: OrganismSelection | OrganismSelection[]) => {
    if (selectorPromise) selectorPromise.resolve(selection);
    setSelectorOptions(null);
    setSelectorPromise(null);
  }, [selectorPromise]);

  const handleClose = useCallback(() => {
    if (selectorPromise) selectorPromise.reject(new Error('Selection cancelled'));
    setSelectorOptions(null);
    setSelectorPromise(null);
  }, [selectorPromise]);

  const getOrganism = useCallback((organismId: string): BioEntity | undefined => {
    return organismService.getEntityById(organismId);
  }, []);

  const refreshOrganisms = useCallback(() => {}, []);

  const getOrganismsByCategory = useCallback((category: EntityCategory): BioEntity[] => {
    const all = organismService.getEntities();
    if (category === 'ALL') return all;
    return all.filter(e => e.category === category);
  }, []);

  const getRelatedOrganisms = useCallback((organismId: string, relationship: string): BioEntity[] => {
    const rels = organismService.getRelationships().filter(r =>
      (r.fromEntityId === organismId || r.toEntityId === organismId) &&
      r.relationshipType === relationship
    );
    const relatedIds = rels.map(r => r.fromEntityId === organismId ? r.toEntityId : r.fromEntityId);
    return relatedIds.map(id => organismService.getEntityById(id)).filter(Boolean) as BioEntity[];
  }, []);

  return (
    <OrganismContext.Provider value={{
      selectOrganism,
      getOrganism,
      refreshOrganisms,
      getOrganismsByCategory,
      getRelatedOrganisms,
    }}>
      {children}
      {selectorOptions && (
        <UniversalOrganismSelector
          onSelect={handleSelect}
          onClose={handleClose}
          initialCategory={selectorOptions.initialCategory}
          multiple={selectorOptions.multiple}
          allowCreate={selectorOptions.allowCreate}
          excludeIds={selectorOptions.excludeIds}
          context={selectorOptions.context}
          placeholder={selectorOptions.placeholder}
          required={selectorOptions.required}
        />
      )}
    </OrganismContext.Provider>
  );
};
