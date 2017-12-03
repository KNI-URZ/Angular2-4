import { Injectable } from '@angular/core';
import { Http } from '@Angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  constructor(private http: Http) {
  }
  get(path: string) {
      return this.http.get(path).map(response => {
        if(response.status == 200 && response.text()){
          return response.json();
        } else {
          console.log('NIE UDAŁO SIĘ POŁACZYĆ Z SERVEREM');
        }
      })
  }
}
