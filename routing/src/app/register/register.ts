import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from '../login/login';

@Component({
  selector: 'app-register',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

}
