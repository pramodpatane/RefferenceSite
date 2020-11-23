import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Felix ITs System'
  info;
  constructor(private formBuilder: FormBuilder){
  this.info = this.formBuilder.group({
  name: 'malik',
  email: 'malik@yahoo.com',
  contact: '9878663377'
  })
  }
  onSubmit(values){
  console.warn("Form Submit", values)
  }
  }
