export class weatherService {
  async healthCheck() {
    return { service: 'weatherService', ok: true };
  }
}
