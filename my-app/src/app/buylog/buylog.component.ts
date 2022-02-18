import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router"
@Component({
  selector: 'app-buylog',
  templateUrl: './buylog.component.html',
  styleUrls: ['./buylog.component.css']
})
export class BuylogComponent implements OnInit {

  constructor(private router: Router) { }

  myEvent($event: MouseEvent){
this.router.navigate(['/buylog']);
  }

  ngOnInit(): void {
  }

}
