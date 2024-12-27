import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {

  constructor() { }

  public isLogged$: Subject<boolean> = new Subject<boolean>();

  private isLogged: boolean = false;

  logIn(): void {
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  logOut(): void {
    this.isLogged = false;
    this.isLogged$.next(this.isLogged);
  }

  getToken(): string {
    return 'token';
  }

  isLoggedIn(): boolean {
    return  this.isLogged;
  }
}
