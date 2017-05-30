import { Component, OnInit } from '@angular/core';

import { Work } from '../work';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

	works : Work[];

  constructor(private workservice : WorkService) { }

  ngOnInit() {
  	this.getTodayWorks();
  }

  getTodayWorks() : void {
  	this.workservice.getTodayWork().then(works => this.works = works);
  }
}
