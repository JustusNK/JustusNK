export class seedService {
  async healthCheck() {
    return { service: 'seedService', ok: true };
  }
}
