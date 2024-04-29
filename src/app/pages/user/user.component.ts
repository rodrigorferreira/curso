import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  username: String | null = '';

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    this.getNome();
  }


  getNome(){
    this.router.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }
}
