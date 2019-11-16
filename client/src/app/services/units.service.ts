import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  API_URI = 'http://localhost:3000';



  constructor(private http: HttpClient) { 
  }

  getNeighborhoods() {
    return this.http.get('http://localhost:3000/leases/');
  }

  getUnits() {
    return this.http.get('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion');
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
