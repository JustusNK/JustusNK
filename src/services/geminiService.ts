export class geminiService {
  async healthCheck() {
    return { service: 'geminiService', ok: true };
  }
}
