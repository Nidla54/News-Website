import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css',
})
export class SubscriptionFormComponent {
  constructor(private subService: SubscribersService) {}

  onSubmit(data: any) {
    const subData: Sub = {
      name: data.name,
      email: data.email,
    };

    data.name = '';
    data.email = '';
    this.subService.addSubs(subData);
  }
}
