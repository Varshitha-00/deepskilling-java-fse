// Hands-On 6 — NotificationComponent
// providers: [NotificationService] here creates a NEW instance scoped to this component
// and its children. It is NOT the same instance as any other component.
// This demonstrates component-level DI — the hierarchical injector creates a child injector.
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FormsModule],
  // Component-level provider — new NotificationService instance, scoped to this component tree
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {
  newMessage = '';

  // Angular injects the component-scoped instance (not the root one)
  constructor(public notificationService: NotificationService) {}

  addMessage(): void {
    if (this.newMessage.trim()) {
      this.notificationService.add(this.newMessage.trim());
      this.newMessage = '';
    }
  }

  clear(): void {
    this.notificationService.clear();
  }
}
