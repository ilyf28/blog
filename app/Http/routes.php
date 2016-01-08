<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return view('hello');
});

Route::get('/james', function () {
    return view('james');
});

Route::get('/tutorial', function () {
    return view('tutorial');
});

Route::group(['prefix' => 'api'], function () {
	Route::get('comments', function() {
		/* // comments.json
		[
		  {"author": "Pete Hunt", "text": "This is one comment"},
		  {"author": "Jordan Walke", "text": "This is *another* comment"}
		]
		*/
		$result = [
			["author"=> "Pete Hunt", "text"=> "This is one comment"],
			["author"=> "Jordan Walke", "text"=> "This is *another* comment"]
		];
		return response()->json($result);
	});
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
