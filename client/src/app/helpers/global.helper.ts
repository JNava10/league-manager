import { Injectable } from '@angular/core';
import {StorageHelper} from "./storage.helper";

@Injectable({
  providedIn: 'root'
})
export class GlobalHelper {

  constructor(private storageHelper: StorageHelper) { }

  saveToken = (token: string) => {
    const tokenKey = 'token';

    this.storageHelper.save(tokenKey, token);
  }
}
