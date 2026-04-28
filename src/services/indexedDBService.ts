export class indexedDBService {
  async healthCheck() {
    return { service: 'indexedDBService', ok: true };
  }
}
