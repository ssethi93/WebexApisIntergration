import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/common-services/login.service';
import { WebexApisService } from 'src/app/common-services/webex-apis.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  roomsItems = []
  constructor(private route: ActivatedRoute,private servApiL: WebexApisService,private service: LoginService,  @Inject('tokenFac') private tokenfactory) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('code')) {
        this.service.checkLocalStorageToken(params.get('code')).subscribe(data => {
          this.tokenfactory.processToken(data, params.get('code'));
          this.servApiL.getRoomsDetails().subscribe((data: any) => this.roomsItems = data?.items);
        })
      }
    })
  }

}
