import { Component, OnInit, Inject, ViewChild, AfterContentChecked, ElementRef } from '@angular/core';
import { LoginService } from '../common-services/login.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogueComponent } from '../common/confirm-dialogue/confirm-dialogue.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  @ViewChild('div') bsModalRef: ElementRef;
  displayData = { header: "Confirm", message: "Do you want to continue?", confirmBtnMsg: "Yes" };
  constructor(public modalService: NgbModal, private service: LoginService) { }
  
  ngAfterContentChecked(): void {
  }

  openModalConfirmation(displayData) {
    const modalRef = this.modalService.open(ConfirmDialogueComponent);
    modalRef.componentInstance.displayData =  displayData;
    modalRef.result.then(data => this.auth(data)).catch(data => this.auth(data))
  }

  ngOnInit(): void {
    this.openModalConfirmation(this.displayData);
  }

  

  auth(isAccepted) {
    if(isAccepted) {
      this.service.authorizeUser();
    }
    else {
      alert('User denied access for authorization');
    }
  }
}
