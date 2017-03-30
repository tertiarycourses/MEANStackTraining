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

	getMember(id) {
		return this.http.get('/api/member/'+id)
			.map(res => res.json());	
	}

	deleteMember(id) {
		return this.http.delete('/api/member/'+id)
			.map(res => res.json());	
	}

	addMember(newMember) {
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
		return this.http.post('/api/member', 
			JSON.stringify(newMember), {headers: headers})
				.map(res => res.json());	
	}

	updateMember(member, memberId) {
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
		return this.http.put('/api/member/'+memberId, 
			JSON.stringify(member), {headers: headers})
				.map(res => res.json());	
	}
}