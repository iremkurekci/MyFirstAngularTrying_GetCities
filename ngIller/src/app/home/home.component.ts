import { Component, OnInit } from '@angular/core';
import {DataService} from'../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iller: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIller().subscribe(data => {
      this.iller = data,
      console.log(this.iller)
    });
  }

}
