import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unit } from '../models/Units';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {


  constructor(private http: HttpClient) { 
  }

  getNeighborhoods() {
    return this.http.get('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion/neig');
  }

  getUnits() {
    return this.http.get('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion');
  }

  getUnit(id: string) {
    return this.http.get('http://localhost:3000/leases/' +  id);
  }

  saveUnit(unit: Unit) {
    console.log(unit);
    return this.http.post('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion',unit);
  }

  deleteUnit(id: string) {
    return this.http.delete('http://localhost:3000/leases/' + id);
  }


}
