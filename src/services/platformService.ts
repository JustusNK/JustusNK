export class platformService {
  async healthCheck() {
    return { service: 'platformService', ok: true };
  }
}
