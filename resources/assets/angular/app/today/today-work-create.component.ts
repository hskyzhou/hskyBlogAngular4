import { Component, OnInit } from '@angular/core';

import { Work } from '../work';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-today-work-create',
  templateUrl: './today-work-create.component.html',
  styleUrls: ['./today-work-create.component.css']
})
export class TodayWorkCreateComponent implements OnInit {

	work : Work = {
		id : 0,
		name : "",
		hours : "",
		type : "",
		project : ""
	};

  constructor(private workservice : WorkService) { }

  ngOnInit() {
  }

  createWork() : void{
  	this.workservice.createWork(this.work).then(res => alert(res.message));
  }

}
