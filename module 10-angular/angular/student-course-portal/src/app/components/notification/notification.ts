import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FormsModule],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {
  newMessage = '';

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
