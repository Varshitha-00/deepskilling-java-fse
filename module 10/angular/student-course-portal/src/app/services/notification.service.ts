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
