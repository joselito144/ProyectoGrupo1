import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUnits() {
    console.log('${API_URI}/leases');
    return this.http.get('http://localhost:3000/leases');
  }

  getUnit(id: string) {
    return this.http.get('http://localhost:3000/leases/' +  id);
  }

  saveUnit() {

  }

  deleteUnit(id: string) {
    return this.http.delete('http://localhost:3000/leases/' + id);
  }


}
