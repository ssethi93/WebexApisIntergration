import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from '../app/common-services/http-interceptor.service';
import { RoomsComponent } from './features/rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogueComponent } from './common/confirm-dialogue/confirm-dialogue.component';

export enum TokenEnum {
  xcssCode,
  xcssToken,
  xcssTokenType,
  xcssRefreshToken
}

class TokenKlass {
  
  processToken(data, code){
    localStorage.setItem(TokenEnum.xcssCode.toString(), code);
    localStorage.setItem(TokenEnum.xcssToken.toString(), data.access_token);
    localStorage.setItem(TokenEnum.xcssRefreshToken.toString(), data.refresh_token);
    localStorage.setItem(TokenEnum.xcssTokenType.toString(), data.token_type);
  }

  getToken(){
    return localStorage.getItem(TokenEnum.xcssToken.toString());
  }

  getRefreshToken() {
    return localStorage.getItem(TokenEnum.xcssRefreshToken.toString());
  }

  getTokenType() {
    return localStorage.getItem(TokenEnum.xcssTokenType.toString());
  }
}

export function TokenFactory() {
  return new TokenKlass();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomsComponent,
    ConfirmDialogueComponent
  ],
  entryComponents: [ConfirmDialogueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },
  {
    provide: 'tokenFac',
    useFactory: TokenFactory,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
