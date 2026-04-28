export class organismRegistryService {
  async healthCheck() {
    return { service: 'organismRegistryService', ok: true };
  }
}
