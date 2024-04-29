import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  user: UserGit | undefined;
  username: string = '';

  constructor(private userService: UserService){}


  getGitUser(){
    this.userService.getGitUser(this.username).subscribe((response: UserGit) => {
      this.user = response;
    });
  }
}
