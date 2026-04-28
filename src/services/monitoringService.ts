export class monitoringService {
  async healthCheck() {
    return { service: 'monitoringService', ok: true };
  }
}
