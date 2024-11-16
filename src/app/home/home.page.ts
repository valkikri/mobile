import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
name: string = "Заголовок"
books = [{name: "a", author: "dsfsdfsdf"}, {name: "aer", author: "dsfsdfertesdf"}] 



changeBUTTON(){
  this.name += "po"
}
  constructor() {}
} 