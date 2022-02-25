import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'parth ramani';

  students = [{name:"parth", branch:"CE"},{name:"Nirmal", branch:"Chemistry"}, {name:"Sagar", branch:"CE"},{name:"Vipul", branch:"IT"},{name:"Mihir", branch:"CE"},{name:"Sahil", branch:"IT"}]

}
