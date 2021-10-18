import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TokenEnum } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  basePath = environment.basePath;
  client_id = 'C18de04305bfa989843aa371cd91509d0541d15ba52100add0925615f2bc70a38';
  client_secret_k ='8ca2e8d283fd031275ab06d745045a3bc9686f0601646ee772a51ff95cef29b3';
  scopee = 'spark:all';
  locationRed = 'http://localhost:4200/rooms';

  constructor(private http: HttpClient) { }

  checkLocalStorageToken(xcc) {
    let xcs = localStorage.getItem(TokenEnum.xcssCode.toString());
    if (xcs == xcc) {
      return this.getAccessTokenOrRefresh(true, xcc);
    }
    else {
      localStorage.setItem(TokenEnum.xcssCode.toString(), xcc);
      return this.getAccessTokenOrRefresh(false, xcc);
    }
  }

  getAccessTokenOrRefresh(isRefresh, code) {

    let body = new URLSearchParams();
    body.set('client_id', this.client_id);
    body.set('client_secret', this.client_secret_k);
    body.set('code', code);

    if(isRefresh){
      body.set('refresh_token', localStorage.getItem(TokenEnum.xcssRefreshToken.toString()));
      body.set('grant_type', 'refresh_token');
    }
    else {
      body.set('grant_type', 'authorization_code');
      body.set('redirect_uri', this.locationRed);
    }


    return this.http.post(`${this.basePath}/access_token`,
      body.toString(),
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    )
  }

  authorizeUser() {
    window.location.href = `${this.basePath}/authorize?response_type=code&redirect_uri=${this.locationRed}&scope=spark:all&state=sample_state&client_id=${this.client_id}`;
  }
}
