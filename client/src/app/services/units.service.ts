import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unit } from '../models/Units';
import { User } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UnitsService {

username: string;

  constructor(private http: HttpClient) { 
  }

  getNeighborhoods() {
    return this.http.get('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion/neig');
  }

  getUnits() {
    return this.http.get('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion');
  }

  getUnit(id: string) {
    return this.http.get('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion/' +  id);
  }

  saveUnit(unit: Unit) {
    return this.http.post('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion',unit);
  }

  validateUser(user: User) {
    console.log(user);
    this.username = user.username;
    return this.http.post('http://localhost:3000/users/', user );
  }

  deleteUnit(id: string) {
    return this.http.delete('http://localhost:3000/leases/' + id);
  }


}
