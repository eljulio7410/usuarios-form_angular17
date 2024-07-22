import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './user-app.component.html'
})
export class UserAppComponent implements OnInit{

  users: User[] = [];

  constructor(
    private router: Router,
    private service: UserService,
    private sharingData: SharingDataService
  ){
    
  }
  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
    this.addUser();
    this.removeUser();
  }

  addUser(){
    this.sharingData.newUserEventEmitter.subscribe(user => {
      if (user.id > 0){
      this.users = this.users.map(u => (u.id == user.id) ? { ...user }: u)
    } else {
      this.users = [... this.users, { ... user, id: new Date().getTime() }];
    }
      this.router.navigate(['/users'], { state: { users: this.users } });

    Swal.fire({
      title: "Guardado",
      text: "Usuario guardado con exito!",
      icon: "success"
    });
    
    }); 
  }
  removeUser(): void{
    this.sharingData.idUserEventemmiter.subscribe( id => {
    Swal.fire({
      title: "Esta seguro de eliminar?",
      text: "El usuario sera eliminado del sistema!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter( user => user.id != id);
        this.router.navigate(['/users/create'], {skipLocationChange: true }).then(() => {
          this.router.navigate(['/users'], { state: { users: this.users } });
        })

        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado.",
          icon: "success"
        });
      }
    });
    });

    
  }
}
