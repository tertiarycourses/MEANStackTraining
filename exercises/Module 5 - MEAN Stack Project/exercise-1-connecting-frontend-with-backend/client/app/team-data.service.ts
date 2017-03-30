import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamDataService {
	constructor(private http:Http){ }
	
	getMembers() {
		return this.http.get('/api/members')
			.map(res => res.json());
	}
}