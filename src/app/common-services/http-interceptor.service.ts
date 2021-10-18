import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private token;

  constructor(@Inject('tokenFac') private tokenFac) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }

    if(this.tokenFac.getToken()){
    req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.tokenFac.getToken()}`)
      });
    }

    return next.handle(req)
  }
}
