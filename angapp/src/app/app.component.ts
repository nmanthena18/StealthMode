import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angapp';
  data = [];
  constructor(
    private api: ApiService
  ) {
    this.api.getAll().subscribe(res => {
      this.data.push(...res["data"]);
      console.log(this.data)
    });
   }
}
