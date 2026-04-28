export class rateLimitService {
  async healthCheck() {
    return { service: 'rateLimitService', ok: true };
  }
}
