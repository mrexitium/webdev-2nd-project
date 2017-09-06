import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  person: Person = new Person();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    this.submitted = true;
  }

}

class Person {
  name: string;
  email: string;
  message: string;
}