import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router"
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(private router: Router) { }

  myEvent($event: MouseEvent){
    this.router.navigate(['/buylog']);
  }

  ngOnInit(): void {
  }

}
