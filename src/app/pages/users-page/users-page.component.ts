import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {UsersComponent} from "../../components/user-container/users/users.component";


@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    UsersComponent,
    RouterOutlet
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

}
