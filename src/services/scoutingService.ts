export class scoutingService {
  async healthCheck() {
    return { service: 'scoutingService', ok: true };
  }
}
