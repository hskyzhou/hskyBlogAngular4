import { Injectable } from '@angular/core';

import { Work } from './work';

import { Result } from './result';

const WORKS : Work[] = [
	{id:1, name : "test1", hours : "2", type : "normal", project : "edc"},
	{id:2, name : "test2", hours : "1", type : "normal", project : "edc"},
	{id:3, name : "test3", hours : "1", type : "normal", project : "edc"},
	{id:4, name : "test4", hours : "4", type : "normal", project : "edc"},
];

@Injectable()
export class WorkService {

  constructor() { }

  works : Work[];

  /*获取今日工作列表*/
  getTodayWork() : Promise<Work[]>{
  	return Promise.resolve(WORKS);
  }

  /*添加工作*/
  createWork(work : Work) : Promise<Result>{
  	return Promise.resolve({
  		code : 200,
  		message : "提交成功"
  	});
  }
}
