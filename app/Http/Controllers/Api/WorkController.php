<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;



class WorkController extends Controller
{
	public function __construct(){

	}
	/*保存工作*/
	public function save(){
		$name = request('name', '');
		$hours = request('hours', '');
		$type = request('type', '');
		$project = request('project', '');


	}

	/*今日工作*/
	public function today(){

	}

	/*本周工作*/
	public function week(){

	}
}
