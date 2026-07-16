// Hands-On 6 — NotificationService
// NOTE: This service is intentionally NOT provided in root.
// It is provided at COMPONENT level via providers: [NotificationService] in @Component.
// This means each component that declares it in providers gets its OWN separate instance —
// isolated state, not shared across the app. Contrast with providedIn:'root' which is a
// singleton. Use component-level providers when you need per-component state (e.g., a
// notification queue scoped to a single page or widget).
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
    console.log('[NotificationService instance] message added:', message);
  }

  getMessages(): string[] {
    return [...this.messages];
  }

  clear(): void {
    this.messages = [];
  }
}
