import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html'
})
export class UserComponent {

  @Input() users: User[] = [];

  @Output() idUserEventemmiter = new EventEmitter();

  @Output() selectUserEventEmitter = new EventEmitter();

  onRemoveUser(id: number): void {
      this.idUserEventemmiter.emit(id); 
  }

  onSelectUser(user: User): void{
    this.selectUserEventEmitter.emit(user);
  }
}
