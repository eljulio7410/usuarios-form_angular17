import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idUserEventemmiter = new EventEmitter();

  private _newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  private _findUserByIdEventEmitter = new EventEmitter();

  private _selectUserEventEmitter = new EventEmitter();

  private _errorsUserFormEventEmitter = new EventEmitter();

  private _pageUsersEventEmitter = new EventEmitter();

  constructor() { }

  get idUserEventemmiter(): EventEmitter<number>{
    return this._idUserEventemmiter;
  }

  get newUserEventEmitter(): EventEmitter<User> {
    return this._newUserEventEmitter;
  }

  get findUserByIdEventEmitter(){
    return this._findUserByIdEventEmitter;
  }

  get selectUserEventEmitter(){
    return this._selectUserEventEmitter;
  }
  get errorsUserFormEventEmitter(){
    return this._errorsUserFormEventEmitter;
  }
  get pageUsersEventEmitter(){
    return this._pageUsersEventEmitter;
  }
}
