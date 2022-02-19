

import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router"
@Component({
  selector: 'app-buylog',
  templateUrl: './buylog.component.html',
  styleUrls: ['./buylog.component.css']
})
export class BuylogComponent implements OnInit {
  Name = '';
  number = '';
  email = '';
  constructor() { }
  onSubmit () {
    if (this.Name && this.number  && this.email) {
//Todo submit
      alert('Спасибо за заполнение, мы с Вами свяжемся!');

      this.Name = this.number = this.email = ' ';
      return;
    }
    alert('Заполните, пожалуйста все данные для связи с Вами');
   }

  ngOnInit(): void {
  }

}


