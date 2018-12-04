import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  data:any;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  getProduct() {
    this.api.getAll().subscribe(res => {
      console.log(res)
    })
    console.log(this.api.getAll())
    this.data = this.api.getAll();
  }

}
