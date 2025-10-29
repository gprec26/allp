import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  name = prompt('Enter your name : ');
  age:number=25;
  showMessage(){
    alert(`Hello,${this.name}`)
  }
}
