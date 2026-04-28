export class notificationService {
  async healthCheck() {
    return { service: 'notificationService', ok: true };
  }
}
