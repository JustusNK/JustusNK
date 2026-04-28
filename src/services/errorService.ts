export class errorService {
  async healthCheck() {
    return { service: 'errorService', ok: true };
  }
}
