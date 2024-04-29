import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: String[] = [ 'Rodrigo', 'Thassiana', 'Bruno', 'Théo', 'Lucca']
  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      idade: ['', [Validators.required, Validators.min(5), Validators.max(100)]],

    });
  }

  SubmitForm(){
    if(this.userForm.valid){
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }

  }

  users: User[] = [
    {
      nome: 'Rodrigo',
      idade: 43
    },
    {
      nome: 'Thassiana',
      idade: 42
    },
    {
      nome: 'Bruno',
      idade: 16
    },
    {
      nome: 'Théo',
      idade: 8
    },
    {
      nome: 'Lucca',
      idade: 6
    },
  ];

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
    this.userService.setUser(user);
  }

}
