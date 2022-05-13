import { HttpEvent, HttpHandler, HttpRequest,HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {  
  token:any;
  constructor(private inject:Injector) { this.token = localStorage.getItem("token");
console.log("token"+JSON.stringify(this.token)); }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //let authService=this.inject.;
    let jwtToken=req.clone({
      setHeaders:{
        Authorization:'bearer '+this.token
      }
    });
    return next.handle(jwtToken);
  }
}
