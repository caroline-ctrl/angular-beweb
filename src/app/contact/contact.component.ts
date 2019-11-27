import { Component, OnInit } from '@angular/core';
import { CONTACT } from '../mocks/test.mocks';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent implements OnInit {
  contact = CONTACT;

  constructor() {}

  ngOnInit() {
    console.log(this.contact);
  }
}
