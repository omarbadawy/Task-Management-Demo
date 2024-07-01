import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  // input signals NOTE: there are read only signals, can't change their value in this component by calling set method
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => '/assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
