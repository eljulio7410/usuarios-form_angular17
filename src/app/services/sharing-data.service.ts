import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idUserEventemmiter = new EventEmitter();

  private _newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  constructor() { }

  get idUserEventemmiter(): EventEmitter<number>{
    return this._idUserEventemmiter;
  }

 

  get newUserEventEmitter(): EventEmitter<User> {
    return this._newUserEventEmitter;
  }
}
