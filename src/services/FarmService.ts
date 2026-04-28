import { IFarmService } from './interfaces';
import {
  LandParcel, Animal, Machinery, Task,
} from '../types';

const KEYS = {
  LAND_PARCELS: 'biopro_land_parcels',
  ANIMALS: 'biopro_animals',
  MACHINERY: 'biopro_machinery',
  TASKS: 'biopro_tasks',
};

export class FarmService implements IFarmService {
  // --- Land Parcels ---
  getLandParcels(farmerId?: string): LandParcel[] {
    let all = JSON.parse(localStorage.getItem(KEYS.LAND_PARCELS) || '[]');
    if (farmerId) all = all.filter((p: LandParcel) => p.farmerId === farmerId);
    return all;
  }

  getLandParcel(id: string): LandParcel | undefined {
    const all = this.getLandParcels();
    return all.find(p => p.id === id);
  }

  saveLandParcel(parcel: LandParcel): void {
    const all = JSON.parse(localStorage.getItem(KEYS.LAND_PARCELS) || '[]');
    const idx = all.findIndex((p: LandParcel) => p.id === parcel.id);
    if (idx >= 0) all[idx] = parcel;
    else all.push(parcel);
    localStorage.setItem(KEYS.LAND_PARCELS, JSON.stringify(all));
  }

  deleteLandParcel(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.LAND_PARCELS) || '[]');
    const filtered = all.filter((p: LandParcel) => p.id !== id);
    localStorage.setItem(KEYS.LAND_PARCELS, JSON.stringify(filtered));
  }

  // --- Animals ---
  getAnimals(farmId: string): Animal[] {
    const all = JSON.parse(localStorage.getItem(KEYS.ANIMALS) || '[]');
    return all.filter((a: Animal) => a.farmId === farmId);
  }

  getAnimal(id: string): Animal | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.ANIMALS) || '[]');
    return all.find((a: Animal) => a.animalId === id);
  }

  saveAnimal(animal: Animal): void {
    const all = JSON.parse(localStorage.getItem(KEYS.ANIMALS) || '[]');
    const idx = all.findIndex((a: Animal) => a.animalId === animal.animalId);
    if (idx >= 0) all[idx] = animal;
    else all.push(animal);
    localStorage.setItem(KEYS.ANIMALS, JSON.stringify(all));
  }

  deleteAnimal(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.ANIMALS) || '[]');
    const filtered = all.filter((a: Animal) => a.animalId !== id);
    localStorage.setItem(KEYS.ANIMALS, JSON.stringify(filtered));
  }

  // --- Machinery ---
  getMachinery(farmId?: string): Machinery[] {
    let all = JSON.parse(localStorage.getItem(KEYS.MACHINERY) || '[]');
    if (farmId) all = all.filter((m: Machinery) => m.farmId === farmId);
    return all;
  }

  getMachineryById(id: string): Machinery | undefined {
    const all = this.getMachinery();
    return all.find(m => m.machineryId === id);
  }

  saveMachinery(machinery: Machinery): void {
    const all = JSON.parse(localStorage.getItem(KEYS.MACHINERY) || '[]');
    const idx = all.findIndex((m: Machinery) => m.machineryId === machinery.machineryId);
    if (idx >= 0) all[idx] = machinery;
    else all.push(machinery);
    localStorage.setItem(KEYS.MACHINERY, JSON.stringify(all));
  }

  deleteMachinery(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.MACHINERY) || '[]');
    const filtered = all.filter((m: Machinery) => m.machineryId !== id);
    localStorage.setItem(KEYS.MACHINERY, JSON.stringify(filtered));
  }

  // --- Tasks ---
  getTasks(farmId: string): Task[] {
    const all = JSON.parse(localStorage.getItem(KEYS.TASKS) || '[]');
    return all.filter((t: Task) => t.farmId === farmId);
  }

  getTask(id: string): Task | undefined {
    const all = JSON.parse(localStorage.getItem(KEYS.TASKS) || '[]');
    return all.find((t: Task) => t.taskId === id);
  }

  saveTask(task: Task): void {
    const all = JSON.parse(localStorage.getItem(KEYS.TASKS) || '[]');
    const idx = all.findIndex((t: Task) => t.taskId === task.taskId);
    if (idx >= 0) all[idx] = task;
    else all.push(task);
    localStorage.setItem(KEYS.TASKS, JSON.stringify(all));
  }

  deleteTask(id: string): void {
    const all = JSON.parse(localStorage.getItem(KEYS.TASKS) || '[]');
    const filtered = all.filter((t: Task) => t.taskId !== id);
    localStorage.setItem(KEYS.TASKS, JSON.stringify(filtered));
  }
}
