import { Observable, of } from 'rxjs';
import { UserService, IUser } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users$: Observable<IUser[]> = of([]);
  input = '';

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.fetchUsers();
  }
}
