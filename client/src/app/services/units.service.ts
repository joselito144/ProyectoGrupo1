import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unit } from '../models/Units';
import { User } from '../models/users';
import { ConsultUser } from '../models/consultUser';


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
    return this.http.post('https://itbbqjsso4.execute-api.us-east-2.amazonaws.com/Produccion', unit);
  }

  // validation from AWS API
  validateUser(user: User) {
    return this.http.post('https://yibzn6r80a.execute-api.us-east-2.amazonaws.com/dev', user );
  }

  deleteUnit(idUnit: number) {
    const unit: ConsultUser = {
      id: idUnit,
      user: ''
    };
    return this.http.post('https://u9587qfrx7.execute-api.us-east-2.amazonaws.com/dev', unit);
  }

  getDetailUnit(idUnit: number) {
    const unit: ConsultUser = {
      id: idUnit,
      user: ''
    };
    return this.http.post('https://38yt4srl8l.execute-api.us-east-2.amazonaws.com/dev', unit);
  }

  getMyUnits(username: string) {
    const unit: ConsultUser = {
      id: null,
      user: username
    };
    return this.http.post('https://d5jf3pydl3.execute-api.us-east-2.amazonaws.com/dev', unit);
  }

  createUser(user: User) {
    return this.http.post('https://833dme4pvh.execute-api.us-east-2.amazonaws.com/dev', user);
  }



}
