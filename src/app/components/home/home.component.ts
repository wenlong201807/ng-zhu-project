import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		// if ((null > 9, true)) {
		// 	console.log(3);
		// } else {
		// 	console.log(4);
		// }
		let m = +'999ss';
		console.log(m);
		console.log(m + 9);
	}
}
