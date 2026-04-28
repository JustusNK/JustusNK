import React, { createContext, useContext, useState, useCallback } from 'react';
import { chemicalService } from '../services';
import { ChemicalProduct, ChemicalCategory } from '../types/chemicals';
import { UniversalChemicalSelector, ChemicalSelection } from '../components/UniversalChemicalSelector';

interface ChemicalContextType {
  selectChemical: (options: SelectChemicalOptions) => Promise<ChemicalSelection | ChemicalSelection[]>;
  getChemical: (chemicalId: string) => ChemicalProduct | undefined;
  refreshChemicals: () => void;
  getChemicalsByCategory: (category: ChemicalCategory) => ChemicalProduct[];
  getChemicalsForPest: (pestId: string) => ChemicalProduct[];
  getChemicalsForCrop: (cropId: string) => ChemicalProduct[];
  isChemicalBanned: (chemicalId: string, countryCode?: string) => boolean;
}

interface SelectChemicalOptions {
  context: string;
  initialCategory?: ChemicalCategory | 'ALL';
  multiple?: boolean;
  allowCreate?: boolean;
  excludeIds?: string[];
  filterByPest?: string;
  filterByCrop?: string;
  showBanned?: boolean;
  placeholder?: string;
  required?: boolean;
}

const ChemicalContext = createContext<ChemicalContextType | undefined>(undefined);

export const useChemical = () => {
  const context = useContext(ChemicalContext);
  if (!context) throw new Error('useChemical must be used within ChemicalProvider');
  return context;
};

export const ChemicalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectorOptions, setSelectorOptions] = useState<SelectChemicalOptions | null>(null);
  const [selectorPromise, setSelectorPromise] = useState<{
    resolve: (value: ChemicalSelection | ChemicalSelection[]) => void;
    reject: (reason?: any) => void;
  } | null>(null);

  const selectChemical = useCallback((options: SelectChemicalOptions): Promise<ChemicalSelection | ChemicalSelection[]> => {
    return new Promise((resolve, reject) => {
      setSelectorOptions(options);
      setSelectorPromise({ resolve, reject });
    });
  }, []);

  const handleSelect = useCallback((selection: ChemicalSelection | ChemicalSelection[]) => {
    if (selectorPromise) selectorPromise.resolve(selection);
    setSelectorOptions(null);
    setSelectorPromise(null);
  }, [selectorPromise]);

  const handleClose = useCallback(() => {
    if (selectorPromise) selectorPromise.reject(new Error('Selection cancelled'));
    setSelectorOptions(null);
    setSelectorPromise(null);
  }, [selectorPromise]);

  const getChemical = useCallback((chemicalId: string): ChemicalProduct | undefined => {
    return chemicalService.getChemicalProduct(chemicalId);
  }, []);

  const refreshChemicals = useCallback(() => {}, []);

  const getChemicalsByCategory = useCallback((category: ChemicalCategory): ChemicalProduct[] => {
    return chemicalService.getChemicalProducts().filter(c => c.chemicalCategory === category);
  }, []);

  const getChemicalsForPest = useCallback((pestId: string): ChemicalProduct[] => {
    return chemicalService.getChemicalProducts().filter(c => c.targetPests?.includes(pestId));
  }, []);

  const getChemicalsForCrop = useCallback((cropId: string): ChemicalProduct[] => {
    return chemicalService.getChemicalProducts().filter(c => c.targetCrops?.includes(cropId));
  }, []);

  const isChemicalBanned = useCallback((chemicalId: string, countryCode?: string): boolean => {
    const bans = chemicalService.getChemicalBans(chemicalId, countryCode);
    return bans.length > 0;
  }, []);

  return (
    <ChemicalContext.Provider value={{
      selectChemical,
      getChemical,
      refreshChemicals,
      getChemicalsByCategory,
      getChemicalsForPest,
      getChemicalsForCrop,
      isChemicalBanned,
    }}>
      {children}
      {selectorOptions && (
        <UniversalChemicalSelector
          onSelect={handleSelect}
          onClose={handleClose}
          initialCategory={selectorOptions.initialCategory}
          multiple={selectorOptions.multiple}
          allowCreate={selectorOptions.allowCreate}
          excludeIds={selectorOptions.excludeIds}
          filterByPest={selectorOptions.filterByPest}
          filterByCrop={selectorOptions.filterByCrop}
          showBanned={selectorOptions.showBanned}
          context={selectorOptions.context}
          placeholder={selectorOptions.placeholder}
          required={selectorOptions.required}
        />
      )}
    </ChemicalContext.Provider>
  );
};
