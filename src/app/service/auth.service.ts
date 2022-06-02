import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

   entrar(UserLogin: UserLogin ): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://blogdenise.herokuapp.com/usuarios/logar', UserLogin)

   }
  
   cadastrar(User: User): Observable<User> {
    return this.http.post<User>('https://blogdenise.herokuapp.com/usuarios/cadastrar', User)


   }

}
