import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/common-services/login.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: LoginService,  @Inject('tokenFac') private tokenfactory) { }

  ngOnInit(): void {
    debugger;
    this.route.queryParamMap.subscribe(params => {
      if (params.has('code')) {
        this.service.checkLocalStorageToken(params.get('code')).subscribe(data => this.tokenfactory.processToken(data, params.get('code')))
      }
    })
  }

}
