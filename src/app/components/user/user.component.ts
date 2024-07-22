import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html'
})
export class UserComponent {

  title: string =  'Listado de usuarios!';

  users: User[] = [];

  constructor(
    private sharingData: SharingDataService,
    private service: UserService,
    private router: Router){
      if(this.router.getCurrentNavigation()?.extras.state){
        this.users = router.getCurrentNavigation()?.extras.state!['users'];
      } else {
        this.service.findAll().subscribe( users => this.users = users);
      }
    
  }

  onRemoveUser(id: number): void {
      this.sharingData.idUserEventemmiter.emit(id); 
  }

  onSelectUser(user: User): void{
    this.router.navigate(['/users/edit', user.id], {state: {user}});
  }
}
