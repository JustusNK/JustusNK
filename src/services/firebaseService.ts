export class firebaseService {
  async healthCheck() {
    return { service: 'firebaseService', ok: true };
  }
}
